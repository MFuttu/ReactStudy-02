import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const userNameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};
	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid name",
				message: "Please enter a valid name.",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age.",
			});
			return;
		}
		props.liftUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				></ErrorModal>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={userNameChangeHandler}
					></input>

					<label htmlFor="age">Age Years</label>
					<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
