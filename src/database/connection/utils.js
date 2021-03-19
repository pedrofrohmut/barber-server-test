const testConnection = async () => {
  if (process.env.NODE_ENV == "test") {
    return true
  }
  const Sequelize = require("sequelize")
  const dbConfig = require("../config/config")[process.env.NODE_ENV]
  const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect
    }
  )
  try {
    await sequelize.authenticate()
    return true
  } catch (err) {
    return false
  }
}

module.exports = {
  testConnection
}
