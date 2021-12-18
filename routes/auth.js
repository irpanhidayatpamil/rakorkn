import express from "express";

import { cekToken } from "../controller/auth.js";

const authRoutes = express.Router();
authRoutes.post('/', cekToken)
export default authRoutes;