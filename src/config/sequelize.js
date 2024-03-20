import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import Role from "../auth/models/role";
import User from "../auth/models/user";
dotenv.config();

const sequelize = new Sequelize( // los parametros que recibe son 1. "nombre de la base de datos", 2."nombre de usuario postgres", 3. "password"
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_SERVER,
    dialect: "postgres",
    logging: false,
  }
);

// creamos la conexion con la base de datos con el cuidado de manejar el error para evitar problemas y la exportamos

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("conexion correctamente establecida");
  } catch (error) {
    console.log("Error en la conexion con la base de datos");
  }
};

Role(sequelize);
User(sequelize);

export const DB = {
  ...sequelize.models,
  sequelize,
  connectDB,
};
