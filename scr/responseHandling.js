export const internalServerError = (res, message) => {
  const response = {
    statusCode: res.status(500),
    body: res.json(message || "Something went wrong"),
  };
  return response;
};

export const badGatewayError = (res, message = "") => {
  const response = {
    statusCode: res.status(400),
    body: res.json({ message: message || "Bad gateway" }),
  };
  return response;
};

export const responseHandlingSuccess = (res, message) => {
  const response = {
    statusCode: res.status(200),
    body: res.json({
      reponse: message.message || "Successful response",
      user: message.user,
    }),
  };
  return response;
};
