const router = require("express").Router()

router.post("/auth/refresh", (req, res) => {
  res.send("Auth refresh")
})

router.post("/auth/login", (req, res) => {
  res.send("Auth login")
})

/**
 * POST api/users
 * BODY: {
 *   name: string,
 *   email: string,
 *   password: string
 * }
 */
router.post("/users", (req, res) => {
  res.status(200).json({
    error: "",
    data: {
      id: "",
      name: "",
      avatar: "",
      email: ""
    },
    token: ""
  })
})

const routes = (app) => {
  app.use("/api", router)
}

module.exports = routes
