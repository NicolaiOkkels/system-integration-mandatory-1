import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name: String,
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
    },
    genre: String,
    year: Number,
    tracks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Track'
    }],
    image: String
  });

const UserModel = mongoose.model("album", albumSchema);

export default UserModel;