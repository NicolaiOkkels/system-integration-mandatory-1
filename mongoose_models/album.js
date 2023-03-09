import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    name: String,
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artist'
    },
    genre: String,
    year: Number,
    tracks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'track'
    }],
  });

const UserModel = mongoose.model("album", albumSchema);

export default UserModel;