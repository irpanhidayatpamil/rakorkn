import express from "express";

import { userValidation } from "../validators/uservalidation.js";
import { authFilter } from "../middleware/authfilter.js";
import {
    createUSer,
    updateUser,
    findUser,
    deleteUser,
    getAllUser,
    createBachUSer,
    updateUserWalk,
    updateUserRun,
    updateUserSepeda
} from '../controller/users.js'

const userRoutes = express.Router();


userRoutes.get('/', authFilter.isLoggedIn, getAllUser)
userRoutes.post('/',  authFilter.isLoggedIn, authFilter.isAdmin, userValidation.validateSimpanUser, createUSer)
userRoutes.post('/batch', authFilter.isLoggedIn, authFilter.isAdmin, createBachUSer)
userRoutes.get('/:id', authFilter.isLoggedIn, findUser)
userRoutes.delete('/:id',  authFilter.isLoggedIn, authFilter.isAdmin, deleteUser);
userRoutes.patch('/:id', authFilter.isLoggedIn, authFilter.isAdmin, updateUser);
userRoutes.post('/walk', authFilter.isLoggedIn, updateUserWalk);
userRoutes.post('/run', authFilter.isLoggedIn, updateUserRun);
userRoutes.post('/sepeda', authFilter.isLoggedIn, updateUserSepeda);

export default userRoutes;