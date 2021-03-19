const dotenv = require("dotenv")

const App = require("./app")
const { getEnvPath, validateEnv } = require("./utils/server")
const { testConnection } = require("./database/connection/utils")

const isValidEnv = validateEnv(process.env.NODE_ENV)
if (!isValidEnv) {
  console.error("There is not a valid Node env (NODE_ENV)")
  process.exit(1)
}

// if (process.env.NODE_ENV !== "production") {
//   console.clear()
// }

dotenv.config({
  path: getEnvPath(process.env.NODE_ENV)
})

;(async () => {
  const isConnected = await testConnection()
  if (!isConnected) {
    console.error("Could not connect to Database")
  }
})()

if (!process.env.PORT) {
  console.error("Not a valid port number in ENV")
}
App.listen(
  process.env.PORT,
  console.log(`Node server listening to port ${process.env.PORT}`)
)
