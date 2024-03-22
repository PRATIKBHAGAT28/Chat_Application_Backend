import express from "express";
import { getMyProfile, login, newUser } from "../controllers/user.js";
import { upload } from "../middlewares/multer.js";
import isAuthenticated from "../middlewares/auth.js";

const app = express.Router();

app.post("/new", upload.single("avatar"), newUser);
app.post("/login", login);

app.get("/me", isAuthenticated, getMyProfile);

export default app;
