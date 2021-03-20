const router = require("express").Router()

router.post("/auth/refresh", (req, res) => {
  res.send("Auth refresh")
})

router.post("/auth/login", (req, res) => {
  res.send("Auth login")
})

router.post("/users", require("../controllers/users/create"))

const routes = (app) => {
  app.use("/api", router)
}

module.exports = routes
