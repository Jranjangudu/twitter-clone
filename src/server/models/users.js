const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: { type: String, require },
  email: { type: String, require },
  password: { type: String, require },
});
module.exports = mongoose.model("users", User);
