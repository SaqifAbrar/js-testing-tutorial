const express = require("express");
const validateLogin = require("./validateLoginRequest");
const sqlite3 = require("sqlite3").verbose();

const app = express();

const PORT = process.env.PORT || 8080;

const users = [
	{
		id: 1,
		first_name: "John",
		last_name: "Smith",
		email: "jsmith@example.com",
		password: "TestingIsFun123",
	},
];

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
	console.log(search_query);

	return new Promise((resolve) =>
		db.all(search_query, [], (err, rows) => {
			if (err) resolve(err.message);
			// console.log(`+++++ ${rows[0].id}`);
			resolve(rows[0].id);
		}),
	);
}

async function validatePassword(id, request_password) {
	if (id === "" || request_password === "") return -1;

	const search_query = `SELECT password FROM mock_data WHERE id = ${id}`;
	console.log(search_query);

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

	const loginObject = validateLogin(username, password);

	const userId = await searchUser("cpeniman0@over-blog.com");
	const validate = await validatePassword(userId, "zU66JSk76IP4ZAe5");

	res.send(validate);
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

/*
const express = require("express");
const passport = require("passport");
const flash = require("express-flash");
const initializePassport = require("./passport-config");
const session = require("express-session");
// const bcrypt = require("bcrypt");

const app = express();

const PORT = process.env.PORT || 8080;

const users = [
	{
		id: 1,
		email: "dcrallan0@studiopress.com",
		password: "$2a$04$tH7hG019TBndzq0k88OJc.FKw2JDKqnYnM2nD/HojL6DbbU/oMaPe",
	},
];

initializePassport(
	passport,
	(email) => users.find((user) => user.email === email),
	(id) => users.find((user) => user.id === id),
);

app.use(express.json());
app.use(flash());
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
	}),
);
app.use(passport.initialize());
app.use(express.static("build"));
app.use(passport.session());
app.use(passport.initialize());

app.post("/", (req, res) => {
	console.log(res.failureMessage);
	res.send("Failed");
});

app.post(
	"/auth/login",
	passport.authenticate("local", {
		successRedirect: true,
		successMessage: "T",
		failureRedirect: "/",
		failureMessage: "F",
		failureFlash: true,
	}),
);

app.get("/api", (req, res) => {
	const welcome = {
		message: "Welcome to the JavaScript testing tutorial!",
		github: "https://github.com/SaqifAbrar/js-testing-tutorial",
		authors: ["Saqif Abrar"],
	};
	res.send("");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
*/
