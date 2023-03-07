import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    name: String,
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album'
    },
    length: Number,
    lyrics: String
});

const UserModel = mongoose.model("track", trackSchema);

export default UserModel;