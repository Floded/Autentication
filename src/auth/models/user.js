const { DataTypes } = require("sequelize");

const User = (sequelize) => {
  const User = sequelize.define("User", {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_role: {
      // integramos una relacion uno a uno con la tabla role
      type: DataTypes.INTEGER,
      reference: {
        model: "Roles",
        key: "id_role",
      },
    },
  });
  User.associate = (models) => {
    User.belongsTo(models.Role, {
      foreingKey: "id_role",
      targetKey: "id_role",
    });
  };
  return User;
};
export default User;
