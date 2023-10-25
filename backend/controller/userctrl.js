
require('dotenv').config();
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const salt = 10;
const createuser = async (req, res) => {

  const { Firstname, Lastname, email, password } = req.body;

  const createuser = await User.findOne({ email });

  if (!createuser) {
    bcrypt.hash(password,salt)
      .then(hash => {
        User.create({ Firstname, Lastname, email, password: hash });
        res.json("success");
      }).catch(err => res.json(err))

  } else {
    res.json("Email is already exist");
  }

};

const loginuser = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  await User.findOne({ email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password)
          .then((result) => {
            if (result) {
              res.json(user)
          
            } else {
              res.json("Invalid Password")
            }
          });
      } else {
        res.json("No Record Founded")
      }
    })

};

module.exports = { createuser, loginuser };