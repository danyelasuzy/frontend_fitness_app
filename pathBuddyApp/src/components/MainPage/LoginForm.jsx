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
			const response = await fetch(
				"https://path-buddy-d047224ae5e0.herokuapp.com/api/users/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					credentials: "include",
					body: JSON.stringify({ email, password }),
				}
			);

			const data = await response.json();

			if (response.ok) {
				console.log("Login successful:", data);
				localStorage.setItem("authToken", data.token);
				localStorage.setItem("userName", data.data.user.name);
				window.location.href = "/welcome";
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
				"https://path-buddy-d047224ae5e0.herokuapp.com/api/resetPassword/:token",
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
					{/* Form to reset password */}
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
