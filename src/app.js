import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import UserRouter from "./routes/user.routes.js";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//BASIC CONFIGS
// to limit data not to crash server
app.use(express.json({limit: "16kb"}))
//converts sentence to url like space to %20 or +
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
//helps accessing files from public folder
app.use(express.static("public"))
app.use(cookieParser())


//ROUTES DECLARATION
app.use("/users",UserRouter);

export {app}