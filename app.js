import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/user.js";
import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;

dotenv.config;
({
  path: "./env",
});

// middlwares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes
// app.use("/user", userRoute);

//db config
const mongoURI = process.env.MONGODB_URI;
connectDB(mongoURI)
  .then((result) => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is runnig at port:${process.env.PORT}`, result);
    });
  })
  .catch((err) => {
    console.log("server connection failed", err);
  });
