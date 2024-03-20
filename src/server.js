const { app } = require("./app");
import { DB } from "./config/sequelize";
require("dotenv").config();
const { PORT } = process.env;

app.listen(PORT, () => {
  // importamos y ejecutamos la conexion dentro del listen.
  DB.connectDB();
  DB.sequelize.sync({ force: false });
  console.log(`Server listen on port: ${PORT}`);
});
