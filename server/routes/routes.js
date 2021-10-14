const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const keys = require("../config/keys");
// ----------------- AUTHENTICAITON --------------------------------------------------------
//CREATE A NEW USER " URL :{endpoint}/api/register "
/*
  POST
  req body = ({
    userName:string,
    email:string,
    password:string
  })
*/

router.post("/register", async (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((users) => {
      if (users.length > 0) {
        return res.status(409).json({
          message: "Auth Failed! Email already Registered!",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const newUser = new User({
              _id: new mongoose.Types.ObjectId(),
              userName: req.body.userName,
              email: req.body.email,
              password: hash,
            });
            newUser
              .save()
              .then((result) => {
                return res.status(201).json({
                  status: true,
                  message: "Registered Succesfully!",
                });
              })
              .catch((err) => {
                return res.status(500).json({
                  status: false,
                  message: "Registered Failed!",
                });
              });
          }
        });
      }
    });
});
//SIGN-IN A NEW USER "  URL :{endpoint}/api/login "
/*
  POST
  req body = ({
    email:string,
    password:string
  })
*/

router.post("/login", async (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((users) => {
      if (users.length < 1) {
        return res.status(401).json({
          status: true,
          message:
            "This email is not Registered! Try loging-in with a registred email.",
        });
      } else {
        bcrypt.compare(req.body.password, users[0].password, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "Login Failed!",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                userName: users[0].userName,
                userID: users[0]._id,
              },
              keys.jwtSecretKey
            );
            return res.status(200).json({
              status: true,
              message: "Login Succesfull!",
              token: token,
              userID: users[0]._id,
              userName: users[0].userName,
            });
          }

          return res.status(401).json({
            message: "Auth Failed!",
          });
        });
      }
    })
    .catch();
});

module.exports = router;
