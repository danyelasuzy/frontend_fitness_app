import { useState } from "react";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isForgotPassword, setForgotPassword] = useState(false);

  const handleForgotPassword = () => {
    setForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setForgotPassword(false);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Invalid email format!");
      return;
    }

    if (password.trim() === "") {
      alert("Password cannot be empty!");
      return;
    }

    try {
      // !!!!!add CORRECT LOGIN ROUTE!!!!!!
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong!");
    }
  };

  const handleResetPassword = async () => {
    if (!validateEmail(email)) {
      alert("Invalid e-mail format");
      return;
    }
    try {
      // ADD CORRECT RESET PASSWORD ROUTE!!!!!
      const response = await fetch(
        "http://localhost:5174/resetPassword/:token",
        {
          method: "PATCH",
          headers: { "Content type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Password reset e-mail sent!");
      } else {
        alert(data.message || "Reset failed!");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginFormStyle}>
      {!isForgotPassword ? (
        <>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SmallDarkGreenButton>Login</SmallDarkGreenButton>
          <a onClick={handleForgotPassword}>Forgot Password?</a>
        </>
      ) : (
        <>
          {/* Formularz resetowania hasła */}
          <h2>Reset Password</h2>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SmallDarkGreenButton onClick={handleResetPassword}>
            Reset Password
          </SmallDarkGreenButton>
          <SmallDarkGreenButton onClick={handleBackToLogin}>
            Back to Login
          </SmallDarkGreenButton>
        </>
      )}
    </form>
  );
};

export default LoginForm;
