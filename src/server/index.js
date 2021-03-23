const App = require("../app")

if (!process.env.PORT) {
  console.error("Not a valid port number in ENV")
}

App.listen(
  process.env.PORT,
  console.log(`Node server listening to port ${process.env.PORT}`)
)
