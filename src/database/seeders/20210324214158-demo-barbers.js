module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("barbers", [
      {
        name: "Pedro Diniz",
        stars: 4.5,
        latitude: "-23.5530907",
        longitude: "-46.6682795",
        distance: "0.691000000000108",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Ronaldo Sousa",
        stars: 2.9,
        latitude: "-23.5730907",
        longitude: "-46.6682795",
        distance: "0.691000000000108",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Leticia Diniz",
        stars: 3.3,
        latitude: "-23.5530907",
        longitude: "-46.6482795",
        distance: "1.4430774243756335",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Ronaldo Gomes",
        stars: 2.1,
        latitude: "-23.5830907",
        longitude: "-46.6582795",
        distance: "1.5201936184696858",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Amanda Sousa",
        stars: 4.7,
        latitude: "-23.5630907",
        longitude: "-46.6982795",
        distance: "1.9001792731522114",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("barbers", null, {})
  }
}
