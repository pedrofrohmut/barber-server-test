/**
 * GET api/barbers
 * BODY: {
 *   token: string
 * }
 */
module.exports = async (req, res) => {
  const barbers = []
  const location = ""
  return res.status(200).json({
    error: "",
    data: barbers,
    loc: location
  })
}
