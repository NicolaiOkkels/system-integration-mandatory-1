import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    name: String,
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artist'
    },
    length: Number,
    lyrics: String
});

const UserModel = mongoose.model("track", trackSchema);

export default UserModel;