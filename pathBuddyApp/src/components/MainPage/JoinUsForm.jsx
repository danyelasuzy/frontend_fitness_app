import { useState } from "react";
import SmallDarkGreenButton from "../Buttons/SmallDarkGreen/SmallDarkGreenButton";
import styles from "./JoinUsForm.module.css"
import { useNavigate } from "react-router-dom";
=======
//import styles from "./JoinUsForm.module.css" ! CONVERTED TO TAILWIND
//import { use } from "react";

const backendURL = import.meta.env.VITE_BACKEND_URL;

const JoinUsForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [age, setAge] = useState("");
	const [location, setLocation] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [ageError, setAgeError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const navigate = useNavigate();

	const validateForm = () => {
		let isValid = true;
		if (!/^[a-zA-Z\s]+$/.test(name)) {
			setNameError("Name cannot contain numbers or special characters.");
			isValid = false;
		} else {
			setNameError("");
		}

		// Walidacja emaila
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setEmailError("Invalid email format.");
			isValid = false;
		} else {
			setEmailError("");
		}

		// Walidacja wieku
		if (!/^\d+$/.test(age)) {
			setAgeError("Age must be a number.");
			isValid = false;
		} else {
			setAgeError("");
		}

		// Walidacja hasła
		const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
		if (!regex.test(password)) {
			setPasswordError(
				"Password must have at least 8 characters, 1 uppercase letter, and 1 number."
			);
			isValid = false;
		} else if (password !== confirmPassword) {
			setPasswordError("Passwords do not match.");
			isValid = false;
		} else {
			setPasswordError("");
		}

		return isValid;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validateForm()) {
			try {
				const response = await fetch(
					`${backendURL}/api/users/register`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name,
							email,
							age,
							location,
							password,
							confirmPassword,
						}),
					}
				);

				const data = await response.json();

				if (response.ok) {
					alert("Registration successful!");
					setName("");
					setEmail("");
					setAge("");
					setLocation("");
					setPassword("");
					setConfirmPassword("");
					window.location.href = "/welcome";
				} else {
					alert(`Error: ${data.message}`);
				}
			} catch (error) {
				console.error("Error:", error);
				alert("Something went wrong. Please try again.");
			}
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-5 text-lg">
			<h2 className="text-[#123524] font-bold text-2xl">Join us!</h2>

			<input
				type="text"
				placeholder="Name or nickname"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="p-2 italic bg-[#f2f0ea] rounded-md"
			/>
			{nameError && <p className="text-red-500">{nameError}</p>}
			<input
				type="email"
				placeholder="example@email.com"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="p-2 italic bg-[#f2f0ea] rounded-md"
			/>
			{emailError && <p className="text-red-500">{emailError}</p>}
			<input
				type="text"
				placeholder="Age"
				value={age}
				onChange={(e) => setAge(e.target.value)}
				className="p-2 italic bg-[#f2f0ea] rounded-md"
			/>
			{ageError && <p className="text-red-500">{ageError}</p>}
			<input
				type="text"
				placeholder="Location"
				value={location}
				onChange={(e) => setLocation(e.target.value)}
				className="p-2 italic bg-[#f2f0ea] rounded-md"
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="p-2 italic bg-[#f2f0ea] rounded-md"
			/>
			<input
				type="password"
				placeholder="Confirm password"
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				className="p-2 italic bg-[#f2f0ea] rounded-md"
			/>
			{passwordError && <p className="text">{passwordError}</p>}
			<SmallDarkGreenButton>Submit!</SmallDarkGreenButton>
		</form>
	);
};

export default JoinUsForm;
