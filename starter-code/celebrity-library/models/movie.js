const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [{type: Schema.Types.ObjectId, ref: "Celebrity"}],
  image: String,
  description:String,
  showtimes: [String],
  owner:{type: Schema.Types.ObjectId, ref: "User"},
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Movie = mongoose.model("Movie", movieSchema);


module.exports = Movie;