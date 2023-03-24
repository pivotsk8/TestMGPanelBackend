import { Router } from "express";
import {
  createUser,
  users,
  user,
  updateUser,
  deletUser,
} from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validatorResultResponse.js";
const router = Router();

router.get("/", users, validationResultExpress);
router.get("/user", user, validationResultExpress);
router.put(
  "/user/:email",
  [body("name", "EL nombre tiene que ser un string").trim().isString()],
  updateUser,
  validationResultExpress
);
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
  createUser
);
router.delete("/user/:email", deletUser, validationResultExpress);

export default router;
