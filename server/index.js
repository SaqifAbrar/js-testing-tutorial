const express = require("express");
const validateLogin = require("./validateLoginRequest");
const sqlite3 = require("sqlite3").verbose();

const app = express();

const PORT = process.env.PORT || 8080;

const db = new sqlite3.Database(
	"./model/mock_data.db",
	sqlite3.OPEN_READWRITE,
	(err) => {
		if (err) return console.error(err.message);

		console.log("Data base connection successful...");
	},
);

app.use(express.static("build"));

app.use(express.json());

async function searchUser(email) {
	if (email === "") return -1;

	const search_query = `SELECT id FROM mock_data WHERE email = '${email}'`;

	return new Promise((resolve) =>
		db.all(search_query, [], (err, rows) => {
			if (err) resolve(err.message);

			resolve(rows[0].id);
		}),
	);
}

async function validatePassword(id, request_password) {
	if (id === "" || request_password === "") return -1;

	const search_query = `SELECT password FROM mock_data WHERE id = ${id}`;

	return new Promise((resolve) =>
		db.all(search_query, [], (err, rows) => {
			if (err) resolve(err.message);

			const user_password = rows[0].password;
			resolve(user_password == request_password);
		}),
	);
}

app.post("/auth/login", async (req, res) => {
	const username = req.body.email;
	const password = req.body.password;

	let validate = false;
	if (!validateLogin(username, password)) {
		const userId = await searchUser(username);
		validate = await validatePassword(userId, password);
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
