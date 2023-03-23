export const registerUser = (req, res, next) => {
  console.log(req.body);
  res.json({ ok: true });
};

export const users = (req, res, next) => {
  res.json({ ok: true });
};
