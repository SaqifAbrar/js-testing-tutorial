const express = require("express");
const validateLogin = require("./validateLoginRequest");
const sqlite3 = require("sqlite3").verbose();
const { db, searchUser, validatePassword, addUser } = require("./dbConfig");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("build"));

app.use(express.json());

app.post("/auth/register", async (req, res) => {
	const new_first_name = req.body.email;
	const new_last_name = req.body.email;
	const new_username = req.body.email;
	const new_password = req.body.password;

	if (searchUser(email, db) == -1) {
		addUser(first_name, last_name, email, password, db);
	}
});

app.post("/auth/login", async (req, res) => {
	const username = req.body.email;
	const password = req.body.password;

	let validate = false;
	if (!validateLogin(username, password)) {
		const userId = await searchUser(username, db);
		validate = await validatePassword(userId, password, db);
	}

	const response = {
		status: 200,
		validation: validate,
		sent: { username: username, password: password },
	};

	res.send(response);
});

app.get("/api", (req, res) => {
	const welcome = {
		message: "Welcome to the JavaScript testing tutorial!",
		github: "https://github.com/SaqifAbrar/js-testing-tutorial",
		authors: ["Saqif Abrar"],
	};
	res.send(welcome);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
