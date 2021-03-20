const express = require("express")
const dotenv = require("dotenv")

const middlewares = require("./middlewares")
const routes = require("./routes")
const { getEnvPath, validateEnv } = require("./utils")
const { testConnection } = require("../database/connection/utils")

const isValidEnv = validateEnv(process.env.NODE_ENV)
if (!isValidEnv) {
  console.error("There is not a valid Node env (NODE_ENV)")
  process.exit(1)
}

dotenv.config({
  path: getEnvPath(process.env.NODE_ENV)
})

;(async () => {
  const isConnected = await testConnection()
  if (!isConnected) {
    console.error("Could not connect to Database")
  }
})()

const App = express()
middlewares(App)
routes(App)

module.exports = App
