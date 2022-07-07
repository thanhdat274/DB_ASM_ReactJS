import express from "express";
import { signin, signup } from "../controllers/auth";
import { AddUser, DeleteUser, ListOneUser, ListUser, UpdateUser } from "../controllers/user";


const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get(`/user`, ListUser);
userRouter.get(`/user/:id`, ListOneUser);
userRouter.post(`/user`, AddUser);
userRouter.delete(`/user/:id`, DeleteUser);
userRouter.put(`/user/:id`, UpdateUser);


export default userRouter;