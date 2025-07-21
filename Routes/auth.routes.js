import { Router } from "express";



const authRouter = Router();



authRouter.post('/sign-in',(req,res)=>res.send("Sign-in Login Successfll"));
authRouter.post('/sign-up',(req,res)=>res.send("Sign-up Login Successflly"));
authRouter.post('/sign-out',(req,res)=>res.send("Sign-out Login Successflly"));










export default authRouter