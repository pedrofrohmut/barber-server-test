const router = require("express").Router()

router.post("/auth/refresh", require("../controllers/auth/refresh"))

router.post("/auth/login", require("../controllers/auth/login"))

router.post("/users", require("../controllers/users/create"))

router.use((req, res) => {
  res
    .status(404)
    .send(
      `Sorry, the server cannot find anything at "${req.method} ${req.originalUrl}"`
    )
})

const routes = (app) => {
  app.use("/api", router)
}

module.exports = routes
