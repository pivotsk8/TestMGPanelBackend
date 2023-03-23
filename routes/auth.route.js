import express from "express";
import { userRegister, users } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validatorResultResponse.js";
const router = express.Router();

router.get("/", users);
router.post(
  "/register",
  [
    body("email", "Formato de email incorrecto")
      .trim()
      .isEmail()
      .normalizeEmail(),

    body("name", "EL nombre tiene que ser un string")
      .trim()
      .isString()
      .notEmpty(),
  ],
  validationResultExpress,
  userRegister
);

export default router;
