import { User } from "../models/user.js";

export const createUser = async (req, res) => {
  const { email, name } = req.body;

  try {
    const user = new User({ email, name });
    await user.save();
    res.status(201).json({ ok: true });
  } catch (error) {
    error.code === 11000
      ? res.status(400).json({ error: "El email ya esta registrado" })
      : res.status(500).json({ error: "server error" });
  }
};

export const users = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ response: users });
  } catch (error) {
    return res.status(500).json({ error: "server error" });
  }
};

export const user = async (req, res) => {
  let { name, email } = req.query;
  const query = {
    $or: [{ name }, { email }],
  };

  try {
    const user = await User.find(query);
    user.length === 0
      ? res.status(200).json({ message: "El usuiario no existe" })
      : res.status(200).json({ response: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedData =
      !req.body.name && req.body.email
        ? req.body.email
        : !req.body.name && req.body.email
        ? req.body.name
        : req.body;
    console.log(updatedData);
    //actualiza varios datos
    const user = await User.findOneAndUpdate({ email: email }, updatedData, {
      new: true,
    });

    !user
      ? res.status(404).json({ error: "El usuario no se encontro" })
      : res.status(200).json({
          message: "El usuario se actualizo correctamente",
          user: user,
        });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const deletUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndDelete({ email: email });
    !user
      ? res.status(404).json({ error: "El usuario no se encontro" })
      : res.status(200).json({
          message: "El usuario fue borrado",
          user: user,
        });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
