const mongoose = require("mongoose");

//Setting up Schema with objects
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email Address"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Password"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);