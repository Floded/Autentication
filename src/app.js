const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyparser = require("body-parser");

//========== Iniciamos el severidor ==========

const app = express();

//========== Utilizamos los middlewares necesarios ======

app.use(cors({ origin: true }));
app.use(bodyparser.json());
app.use(morgan("dev"));

//========== Rutas ==========

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hola probando server con morgan" });
});

export { app };
