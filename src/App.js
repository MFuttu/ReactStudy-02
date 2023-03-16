import React, { useState } from "react";
import { Container } from "react-bootstrap";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const liftUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }];
		});
	};
	return (
		<div>
			<AddUser liftUser={liftUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
