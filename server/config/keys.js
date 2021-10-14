require("dotenv").config();
module.exports = {
  mongodbURL: process.env.DB_HOST,
  jwtSecretKey: process.env.JWT_KEY,
};
