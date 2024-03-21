import { Router } from "express";
import { registro } from "../controller/user";

const regRouter = Router();

regRouter.get("/register", registro);

export default regRouter;
