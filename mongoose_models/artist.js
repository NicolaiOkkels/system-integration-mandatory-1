import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: String,
    genre: String,
    bio: String,
});

const UserModel = mongoose.model("artist", artistSchema);

export default UserModel;