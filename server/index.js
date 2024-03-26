import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
import MongoConnection from "./connection/mongoConnection.js";
import UserRoutes from "./routes/userRoute.js";

const app = express();

dotenv.config();
app.use(express.json());
// app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(UserRoutes);

MongoConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});
