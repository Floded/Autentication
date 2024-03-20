import { Router } from "express";
import { productGet } from "../controller/products";

const productRouter = Router();

productRouter.get("/products", productGet);

export default productRouter;
