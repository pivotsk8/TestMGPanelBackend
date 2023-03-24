import { User } from "../models/user.js";
import {
  badGatewayError,
  internalServerError,
  responseHandlingSuccess,
} from "../responseHandling.js";

export const createUser = async (req, res) => {
  const { email, name } = req.body;
  try {
    const user = new User({ email, name });
    const message = {
      message: `El usuario con el email: ${user.email} y nombre: ${user.name}, fue creado con exito`,
      user: user,
    };
    await user.save();
    responseHandlingSuccess(res, message);
  } catch (error) {
    const message = { error: "Este email ya esta registrado" };
    error.code === 11000
      ? badGatewayError(res, message)
      : internalServerError(res);
  }
};
