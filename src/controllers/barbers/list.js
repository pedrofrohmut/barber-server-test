const jwt = require("jsonwebtoken")

const { barber, user } = require("../../models")

/**
 * GET api/barbers
 * BODY: {
 *   token: string
 * }
 */
module.exports = async (req, res) => {
  const token = req.get("auth-token")
  if (!token) {
    return res
      .status(400)
      .json({ error: "Dados incorretos, forneça um json web token valido" })
  }

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

  let barbers = []
  try {
    const barbersBD = await barber.findAll()
    barbers = barbersBD.map(
      ({ id, name, stars, latitude, longitude, distance }) => ({
        id,
        name,
        avatar: "",
        stars,
        latitude,
        longitude,
        distance: parseFloat(distance)
      })
    )
  } catch (err) {
    return res.status(500).json({ error: `Error to find all barbers: ${err}` })
  }
  const location = "São Paulo"
  return res.status(200).json({
    error: "",
    data: barbers,
    loc: location
  })
}
