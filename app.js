import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { Routes } from "./routes.js";

const PORT = process.env.PORT || 50000;
const app = express();
app.use(bodyParser.json());
Routes(app);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

export default app;