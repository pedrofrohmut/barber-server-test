const express = require("express")

const middlewares = (app) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
}


module.exports = middlewares
