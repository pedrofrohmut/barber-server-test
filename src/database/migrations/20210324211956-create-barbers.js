module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("barbers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stars: {
        type: Sequelize.FLOAT,
        default: 0
      },
      latitude: {
        type: Sequelize.STRING
      },
      logitude: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.STRING
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("barbers")
  }
}
