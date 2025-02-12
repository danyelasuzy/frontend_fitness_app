import { useState } from "react";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";

import styles from "./LoginForm.module.css";
import { Navigate } from "react-router-dom";
//import styles from "./LoginForm.module.css"; ! CONVERTED TO TAILWIND

const backendURL = import.meta.env.VITE_BACKEND_URL;

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
				`${backendURL}/api/users/login`,
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
				localStorage.setItem("userData", JSON.stringify(data.data.user));
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
			const response = await fetch(
				`${backendURL}/api/resetPassword/:token`,
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
		<form onSubmit={handleSubmit} className="flex flex-col gap-5 font-serif text-base">
	{!isForgotPassword ? (
		<>
			<input
				type="text"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="px-3 py-2 italic bg-[#f2f0ea] border border-gray-300 rounded-md"
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="px-3 py-2 italic bg-[#f2f0ea] border border-gray-300 rounded-md"
			/>
			<SmallDarkGreenButton>Login</SmallDarkGreenButton>
			<a
				href="#"
				onClick={handleForgotPassword}
				className="text-sm text-black hover:underline"
			>
				Forgot Password?
			</a>
		</>
	) : (
		<>
			<h2 className="text-xl font-semibold text-[#123524]">Reset Password</h2>
			<input
				type="text"
				placeholder="Enter your email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="px-3 py-2 italic bg-[#f2f0ea] border border-gray-300 rounded-md"
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
