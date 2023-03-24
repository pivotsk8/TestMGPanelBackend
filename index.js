import "dotenv/config";
import "./scr/database/connectDb.js";
import express from "express";
import authRouter from "./scr/routes/auth.route.js";

const app = express();
app.use(express.json());
app.use("/", authRouter);

const port = process.env.PORT || 7124;
app.listen(port, () => console.log(`http://localhost:${port}`));
