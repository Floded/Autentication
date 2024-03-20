import { DataTypes } from "sequelize";

const Role = (sequelize) => {
  const Role = sequelize.define("Role", {
    id_role: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  Role.associate = (model) => {
    Role.hasMany(models.User, { foreingKey: "id_role" });
  };
  return Role;
};

export default Role;
