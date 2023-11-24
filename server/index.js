const express = require("express");
const validateLogin = require("./validateLoginRequest");

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

app.use(express.static("build"));

app.use(express.json());

function searchUser(email) {
	return users.find((user) => user.email === email).id;
}

function validatePassword(id, password) {
	return users.find((user) => user.id === id).password === password;
}

app.post("/auth/login", (req, res) => {
	const username = req.body.email;
	const password = req.body.password;

	loginObject = validateLogin(username, password);

	if ("error" in loginObject) {
		res.send(loginObject.error);
	} else {
		const user = searchUser(username);

		if (user == undefined) {
			res.send(loginObject.error);
		} else {
			res.send(validatePassword(user, password));
		}
	}
});

app.get("/api", (req, res) => {
	const welcome = {
		message: "Welcome to the JavaScript testing tutorial!",
		github: "https://github.com/SaqifAbrar/js-testing-tutorial",
		authors: ["Saqif Abrar"],
	};
	res.send(welcome);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

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
