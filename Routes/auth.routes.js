import { Router } from "express";

const authRouter = Router();

authRouter.post('/sign-in', (req, res) => res.send("Sign-in Login Successfully"));
authRouter.post('/sign-up', (req, res) => res.send("Sign-up Login Successfully"));
authRouter.post('/sign-out', (req, res) => res.send("Sign-out Login Successfully"));

export default authRouter;
