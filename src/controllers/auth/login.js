const { user } = require("../../models")
const { isValidEmail, isValidPassword } = require("../../entities/user")

const isValidBody = (body) => {
  if (!body) return false
  const { email, password } = body
  if (!isValidEmail(body.email)) return false
  if (!isValidPassword(body.password)) return false
  return true
}

/**
 * POST api/auth/login
 * BODY: {
 *   email: string,
 *   password: string
 * }
 */
module.exports = async (req, res) => {
  if (!isValidBody(req.body)) {
    return res
      .status(400)
      .json({
        error:
          "Dados incorretos. Forneça e-mail e senha de um usuario já cadastrado no sistema"
      })
  }
  const { email, password } = req.body

  // Find user service
  let foundUser = null
  try {
    foundUser = await user.findOne({ where: { email: email } })
  } catch (err) {
    return res.status(500).json({ error: `Error to find a user: ${err}` })
  }
  if (foundUser === null) {
    return res
      .status(400)
      .json({ error: `No user found with the passed e-mail: ${email}` })
  }

  // Validate password service
  const isValidPassword = await foundUser.checkPassword(password)
  if (!isValidPassword) {
    return res
      .status(400)
      .json({ error: `The password is not valid or does not match the e-mail` })
  }

  // Generate token service
  let authToken = null
  try {
    authToken = foundUser.generateToken()
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
      id: foundUser.id,
      name: foundUser.name,
      avatar: "",
      email: foundUser.email
    },
    token: authToken
  })
}
