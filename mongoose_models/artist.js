import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: String,
    genre: String,
    bio: String,
    image: String
  });

const UserModel = mongoose.model("artist", artistSchema);

export default UserModel;