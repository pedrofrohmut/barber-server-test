module.exports = (sequelize, DataTypes) => {
  const Barber = sequelize.define(
    "barber",
    {
      name: DataTypes.STRING,
      stars: DataTypes.FLOAT,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      distance: DataTypes.STRING
    },
    {
      underscored: true,
      timestamps: true
    }
  )
  return Barber
}
