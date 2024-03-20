import { Router } from "express";
import { userGet } from "../controller/user";

const userRouter = Router();

userRouter.get("/user", userGet);

export default userRouter;
