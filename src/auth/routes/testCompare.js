import { Router } from "express";
import { testCompare } from "../controller/user";

const compareRouter = Router();

compareRouter.get("/compare", testCompare);

export default compareRouter;
