import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  age: String,
});

const UserModel = mongoose.model("CrudUser", UserSchema);

export default UserModel;
