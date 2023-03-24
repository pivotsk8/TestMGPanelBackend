import { User } from "../models/user.js";
import {
  badGatewayError,
  internalServerError,
  responseHandlingSuccess,
} from "../responseHandling.js";

export const deletUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndDelete({ email: email });
    const message = {
      message: "El usuario fue borrado",
      user: user,
    };
    !user
      ? badGatewayError(res, { error: "El usuario no fue encontrado" })
      : responseHandlingSuccess(res, message);
  } catch (error) {
    internalServerError(res, { error: error.message });
  }
};
