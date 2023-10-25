require('dotenv').config();
const Express = require("express");
const mongoose = require('mongoose');
const { createuser, loginuser } = require('./controller/userctrl')
const cors = require('cors');
const forgetpassword = require('./controller/forgetpassword')
const ResetPassword = require('./controller/reset-password')
const products = require('./products');
const app = Express();
app.use(Express.json());

app.use(Express.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect(process.env.MONGO_URL);

app.get("/products",(req,res) =>{
  res.send(products)
})

app.post("/user", createuser);

app.post("/Login", loginuser);

app.post("/forget-password",forgetpassword)

app.post("/reset-password/:id/:token",ResetPassword)


app.listen(process.env.PORT, () => {
  console.log("server is successfully running");
});