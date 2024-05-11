
import express from 'express';
import {createUser, getAllUsers, getUserById, deleteUserById, updateUser, patchUser } from '../controller/user.js'
const userRouter = express.Router();

userRouter.post('/', createUser)
.get('/', getAllUsers)
.get('/:id', getUserById)
.put('/:id', updateUser)
.patch('/:id', patchUser)
.delete('/:id', deleteUserById)

export default userRouter