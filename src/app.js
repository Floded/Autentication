import productRouter from "./auth/routes/products";
import compareRouter from "./auth/routes/testCompare";
import testRouter from "./auth/routes/testHash";
import userRouter from "./auth/routes/user";

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
app.get("/test", testRouter);
app.get("/compare", compareRouter);

export { app };
