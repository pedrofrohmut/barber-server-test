const express = require("express")

const middlewares = require("./middlewares")
const routes = require("./routes")

const App = express()
middlewares(App)
routes(App)

module.exports = App
