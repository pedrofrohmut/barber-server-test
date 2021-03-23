const { sequelize } = require("../../src/models")

const truncateDatabase = () => {
  // Join all the promises created in a single promise
  return Promise.all(
    Object.keys(sequelize.models).map((model) => {
      return sequelize.models[model].destroy({ truncate: true, force: true })
    })
  )
}

module.exports = { truncateDatabase }
