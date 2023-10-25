
require('dotenv').config();
const User = require("../models/userModel");
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const forgetpassword = async (req, res) => {
  const email = req.body.email;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.json("Mail not exist")
      } else {
        const token = jwt.sign({ id: user._id }, process.env.TOKENPASS, { expiresIn: "1d" })
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.USER,
            pass: process.env.PASS
          }
        });

        var mailOptions = {
          from: process.env.USER,
          to: email,
          subject: 'Reset your password',
          text: `http://localhost:3000/reset-password/${user._id}/${token}`
        };

        transporter.sendMail(mailOptions, function (error) {
          if (error) {
            console.log(error)
          } else {
            res.json("Mail is send to your Email");
          }
        });
      };
    }
    )
    .catch(err => console.log(err))
}


module.exports = forgetpassword;