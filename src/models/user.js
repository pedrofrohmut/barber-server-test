const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      hooks: {
        beforeValidate: async (user, options) => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      },
      underscored: true,
      timestamps: true
    }
  )

  User.prototype.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function () {
    if (!process.env.JWT_SECRET) {
      throw new Error(
        "Error to generate token. There is no jwt secret in the server env."
      )
    }
    return jwt.sign({ data: { id: this.id } }, process.env.JWT_SECRET)
  }

  return User
}
