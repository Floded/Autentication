import productRouter from "./routes/products";
import userRouter from "./routes/user";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyparser = require("body-parser");

//========== Iniciamos el severidor ==========

const app = express();

//========== Utilizamos los middlewares necesarios ======

app.use(cors({ origin: true }));
app.use(bodyparser.json());
app.use(morgan("combined"));

//========== Rutas ==========

app.get("/user", userRouter);
app.get("/products", productRouter);

export { app };
