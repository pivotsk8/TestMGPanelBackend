import "dotenv/config";
import "./scr/database/connectDb.js";
import express from "express";
import cors from "cors";
import authRouter from "./scr/routes/auth.route.js";

const app = express();
const whiteList = [process.env.ORIGIN];
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("👌 =>", origin);
      !origin || whiteList.includes(origin)
        ? callback(null, origin)
        : callback(`Error: ${origin} No authorization`);
    },
    credentials: true,
  })
);
app.use(express.json());
app.use("/", authRouter);

const port = process.env.PORT || 7124;
app.listen(port, () => console.log(`http://localhost:${port} 😊`));
