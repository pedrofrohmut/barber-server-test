const { user } = require("../../models")
const {
  isValidName,
  isValidEmail,
  isValidPassword
} = require("../../entities/user")

const isValidRequestBody = (body) => {
  if (!body) return false
  const { name, email, password } = body
  if (!isValidName(name)) return false
  if (!isValidEmail(email)) return false
  if (!isValidPassword(password)) return false
  return true
}

/**
 * POST api/users
 * BODY: {
 *   name: string,
 *   email: string,
 *   password: string
 * }
 */
module.exports = async (req, res) => {
  if (!isValidRequestBody(req.body)) {
    return res.status(400).json({ error: "Dados incorretos" })
  }
  const { name, email, password } = req.body
  let createdUser = null
  try {
    createdUser = await user.create({ name, email, password })
  } catch (err) {
    return res.status(500).json({ error: `Error to create a user: ${err}` })
  }
  let authToken = null
  try {
    authToken = createdUser.generateToken()
  } catch (err) {
    return res
      .status(500)
      .json({ error: `Error to generate auth token: ${err}` })
  }
  if (createdUser === null || authToken === null) {
    return res
      .status(500)
      .json({
        error: `Error to create a user. The server could not retrieve the values of created user and/or auth token`
      })
  }
  return res.status(200).json({
    error: "",
    data: {
      id: createdUser.id,
      name: createdUser.name,
      avatar: "",
      email: createdUser.email
    },
    token: authToken
  })
}
