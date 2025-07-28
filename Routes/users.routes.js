import { Router } from "express";
import { getUser, getUsers } from "../Controllers/users.controler.js";
import authorize from "../Middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id',authorize,getUser );

userRouter.post('/', (req, res) => res.send({ title: "Create a new user" }));

userRouter.put('/:id', (req, res) => res.send({ title: "Update user details" }));

userRouter.delete('/:id', (req, res) => res.send({ title: "Delete a user" }));

export default userRouter;
