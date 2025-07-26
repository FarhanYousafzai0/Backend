import { Router } from "express";
import { signIn, signOut, signUp } from "../Controllers/auth.controler.js";

const authRouter = Router();

authRouter.post('/sign-in',signUp);
authRouter.post('/sign-up',signIn);
authRouter.post('/sign-out',signOut );

export default authRouter;
