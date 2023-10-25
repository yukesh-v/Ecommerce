require('dotenv').config();
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const salt = 10;

const ResetPassword = async (req, res) => {

    const { id, token } = req.params;
    const password = req.body.password;

    jwt.verify(token, process.env.TOKENPASS, (err) => {

        if (err) {
            console.log(err);
        } else {
            bcrypt.hash(password,salt)
                .then(hash => {
                    User.findByIdAndUpdate({ _id: id }, { password: hash })
                        .then(() => res.json("success"))
                        .catch(err => console.log(err))
                })
                .catch(err =>console.log(err))

        }
    })



}

module.exports = ResetPassword;