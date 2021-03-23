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

  let foundUser = null
  try {
    foundUser = await user.findOne({ where: { email: email } })
  } catch (err) {
    return res.status(500).json({ error: `Error to find a user: ${err}` })
  }
  if (foundUser !== null) {
    return res
      .status(400)
      .json({ error: `The e-mail passed is already been used` })
  }

  // Create user service
  let createdUser = null
  try {
    createdUser = await user.create({ name, email, password })
  } catch (err) {
    return res.status(500).json({ error: `Error to create a user: ${err}` })
  }
  if (createdUser === null) {
    return res.status(500).json({ error: `User could not be created` })
  }

  // Generate token service
  let authToken = null
  try {
    authToken = createdUser.generateToken()
  } catch (err) {
    return res
      .status(500)
      .json({ error: `Error to generate auth token: ${err}` })
  }
  if (authToken === null) {
    return res
      .status(500)
      .json({ error: `Server could not generate a auth token` })
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
