module.exports = (sequelize, DataTypes) => {
  const Barber = sequelize.define(
    "barber",
    {
      name: DataTypes.STRING,
      starts: DataTypes.FLOAT,
      latitude: DataTypes.STRING,
      logitude: DataTypes.STRING,
      distance: DataTypes.STRING
    },
    {
      underscored: true,
      timestamps: true
    }
  )
  return Barber
}
