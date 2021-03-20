const validator = require("validator")

const isValidName = (name) =>
  name !== undefined && name !== "" && name.length > 3 && name.length < 50

const isValidEmail = (email) =>
  email !== undefined && email !== "" && validator.isEmail(email)

const isValidPassword = (password) =>
  password !== undefined &&
  password !== "" &&
  password.length >= 3 &&
  password.length < 50

module.exports = {
  isValidName,
  isValidEmail,
  isValidPassword
}
