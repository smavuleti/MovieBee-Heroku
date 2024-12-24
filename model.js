const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Defining Schema for database tables
let genreSchema = mongoose.Schema({
  GenreName: { type: String, required: true },
  GenreDescription: { type: String, required: true },
});

let directorSchema = mongoose.Schema({
  DirectorName: { type: String, required: true },
  MiniBio: { type: String, required: true },
  BirthYear: Date,
});

let movieSchema = mongoose.Schema({
  MovieTitle: { type: String, required: true },
  MovieDescription: { type: String, required: true },
  MovieGenre: {type: mongoose.Schema.Types.ObjectId, ref: 'Genres'  },
  MovieDirector: {type: mongoose.Schema.Types.ObjectId, ref: 'Directors' },
  ImagePath: String,
  Featured: Boolean,
});

let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  UserPassword: { type: String, required: true },
  UserEmail: { type: String },
  UserBirthday: Date,
  UserFavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movies" }],
});

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.UserPassword);
};

//Creating Models
let Movies = mongoose.model("Movie", movieSchema);
let User = mongoose.model("User", userSchema);
let Genres = mongoose.model("Genres", genreSchema);
let Directors = mongoose.model("Directors", directorSchema);

//Exporting Models
module.exports.Movies = Movies;
module.exports.User = User;
module.exports.Genres = Genres;
module.exports.Directors = Directors;
