const jwt = require("jsonwebtoken")

const { user } = require("../../models")

/**
 * POST api/auth/refresh
 * BODY: {
 *   token: string
 * }
 */
module.exports = async (req, res) => {
  if (!req.body || !req.body.token) {
    return res
      .status(400)
      .json({ error: "Dados incorretos, forneça um json web token valido" })
  }
  const { token } = req.body

  // Verify token service
  let decoded = null
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET)
  } catch (err) {
    return res
      .status(400)
      .json({ error: `Please log in again. This token is not valid: ${err}` })
  }
  if (!decoded.data && !decoded.data.id) {
    return res
      .status(400)
      .json({ error: "Supplied token has no id in it, and could not be used" })
  }

  // Find user service
  let foundUser = null
  try {
    foundUser = await user.findOne({ where: { id: decoded.data.id } })
  } catch (err) {
    return res.status(500).json({ error: `Error to find a user: ${err}` })
  }
  if (foundUser === null) {
    return res.status(400).json({ error: `No user found with the id present in the token` })
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
