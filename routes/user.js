import express from "express";
// import { Router } from "express";
import { login, newUser } from "../controllers/user.js";
// const Router = Router();
const app = express.Router();

app.post("/new", newUser);
app.post("/login", login);

export default app;
