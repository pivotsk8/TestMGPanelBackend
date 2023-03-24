import { User } from "../models/user.js";
import {
  badGatewayError,
  responseHandlingSuccess,
} from "../responseHandling.js";

export const getAllUsers = async (req, res) => {
  let message;
  try {
    const users = await User.find({});
    message = { message: users };
    responseHandlingSuccess(res, message);
  } catch (error) {
    badGatewayError(res, { error: error.message });
  }
};

export const findUser = async (req, res) => {
  let { name, email } = req.query;
  const query = {
    $or: [{ name }, { email }],
  };
  try {
    const user = await User.find(query);
    const message = { message: "El usuario fue encontrado", user: user };
    user.length === 0
      ? responseHandlingSuccess(res, { message: "El usuiario no existe" })
      : responseHandlingSuccess(res, message);
  } catch (error) {
    badGatewayError(res, { error: error.message });
  }
};
