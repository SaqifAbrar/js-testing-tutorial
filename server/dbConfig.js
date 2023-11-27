const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
	"./model/mock_data.db",
	sqlite3.OPEN_READWRITE,
	(err) => {
		if (err) return console.error(err.message);

		console.log("Data base connection successful...");
	},
);

async function searchUser(email, db) {
	if (email === "") return -1;

	const search_query = `SELECT id FROM mock_data WHERE email = '${email}'`;

	return new Promise((resolve) =>
		db.all(search_query, [], (err, rows) => {
			if (err || rows.length == 0) resolve(-1);
			// Sconsole.log(rows);
			resolve(rows[0].id);
		}),
	);
}

async function validatePassword(id, request_password, db) {
	if (id === "" || request_password === "") return false;

	const search_query = `SELECT password FROM mock_data WHERE id = ${id}`;

	return new Promise((resolve) =>
		db.all(search_query, [], (err, rows) => {
			// console.log(rows);
			if (err || rows == undefined || rows.length == 0 || rows == undefined) {
				resolve(false);
			} else {
				const user_password = rows[0].password;
				resolve(user_password == request_password);
			}
		}),
	);
}

async function addUser(first_name, last_name, email, password, db) {
	if (first_name == "" || last_name == "" || email == "" || password == "") {
		return -1;
	}

	const add_query = `insert into MOCK_DATA (id, first_name, last_name, email, password) values (1, '${first_name}', '${last_name}', '${email}', '${password}');`;

	return new Promise((resolve) =>
		db.all(add_query, [], (err, rows) => {
			if (err || rows.length == 0) resolve(-1);

			resolve(rows);
		}),
	);
}

module.exports = { db, searchUser, validatePassword, addUser };
