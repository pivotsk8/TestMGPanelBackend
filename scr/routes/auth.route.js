import { Router } from "express";
import { createUser } from "../controllers/createUser.js";
import { getAllUsers, findUser } from "../controllers/getUsers.js";
import { updateUser } from "../controllers/updateUser.js";
import { deletUser } from "../controllers/deletUser.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validatorResultResponse.js";
const router = Router();

router.get("/", getAllUsers, validationResultExpress);
router.get("/user", findUser, validationResultExpress);
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
