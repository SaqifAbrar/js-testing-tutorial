const Joi = require("joi");

const loginSchema = Joi.object({
	email: Joi.string()
		.email({
			minDomainSegments: 2,
		})
		.required()
		.messages({
			"string.pattern.base": `Email should be in format (ex. johndoe@example.com)`,
			"string.empty": `Email cannot be empty`,
			"any.required": `Email is required`,
		}),

	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
		.required()
		.messages({
			"string.pattern.base": `Password should be between 8 to 30 characters and contain letters or numbers only`,
			"string.empty": `Password cannot be empty`,
			"any.required": `Password is required`,
		}),
});

function validateLogin(username, password) {
	const validation = loginSchema.validate({
		email: username,
		password: password,
	});

	return validation.hasOwnProperty("error");
}

module.exports = validateLogin;
