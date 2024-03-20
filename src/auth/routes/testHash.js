import { Router } from "express";
import { testPassword } from "../controller/user";

const testRouter = Router();

testRouter.get("/test", testPassword);

export default testRouter;
