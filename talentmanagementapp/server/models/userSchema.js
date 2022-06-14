import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  UserName: String,
  Password: String,
});

const UserList = mongoose.model("UserList", userSchema);

export default UserList;
