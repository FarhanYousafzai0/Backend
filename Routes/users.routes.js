import { Router } from "express";

const userRouter =Router();



userRouter.get('/',(req,res)=> res.send({title:"Get all Users"}));

userRouter.get('/:id',(req,res)=> res.send({title:"Get a user Details"}))

userRouter.post('/',(req,res)=> res.send({title:"Create a new user ."}))


userRouter.put('/:id',(req,res)=> res.send({title:"Update a user details"}))



userRouter.delete('/:id',(req,res)=> res.send({title:"Delete a user "}))







export default userRouter