import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	//const [enteredUsername, setEnteredUsername] = useState("");
	//const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();
	/*
	const userNameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};
*/
	const addUserHandler = (event) => {
		event.preventDefault();

		const EnteredUserNAME = nameInputRef.current.value;
		const EnteredUserAGE = ageInputRef.current.value;

		if (EnteredUserNAME.trim().length === 0 || EnteredUserAGE.trim().length === 0) {
			setError({
				title: "Invalid name",
				message: "Please enter a valid name.",
			});
			return;
		}
		if (+EnteredUserAGE < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age.",
			});
			return;
		}
		props.liftUser(EnteredUserNAME, EnteredUserAGE);
		nameInputRef.current.value = "";
		ageInputRef.current.value = "";
		// setEnteredUsername("");
		// setEnteredAge("");
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<Wrapper>
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
						/*
						value={enteredUsername}
						onChange={userNameChangeHandler}
						*/
						ref={nameInputRef}
					></input>

					<label htmlFor="age">Age Years</label>
					<input
						id="age"
						type="number"
						/*
						value={enteredAge}
						onChange={ageChangeHandler}
						*/
						ref={ageInputRef}
					></input>

					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
