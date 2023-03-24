import { User } from "../models/user.js";
import {
  badGatewayError,
  responseHandlingSuccess,
  internalServerError,
} from "../responseHandling.js";

export const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedData =
      !req.body.name && req.body.email
        ? req.body.email
        : !req.body.name && req.body.email
        ? req.body.name
        : req.body;
    //actualiza varios datos
    const user = await User.findOneAndUpdate({ email: email }, updatedData, {
      new: true,
    });
    const message = {
      message: "El usuario se actualizo correctamente",
      user: user,
    };
    !user
      ? badGatewayError(res, { error: "El usuario no se encontro" })
      : responseHandlingSuccess(res, message);
  } catch (error) {
    internalServerError(res, { error: error.message });
  }
};
