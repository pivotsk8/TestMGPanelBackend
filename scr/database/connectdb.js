import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("conection ok 🤯");
} catch (e) {
  console.log(e);
}
