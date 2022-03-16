const express = require("express");
require('./config/connection')
const router=require('./route/RouteFriends')
const cors=require('cors')
require('dotenv').config()
const app=express()

app.use(cors())

app.use(express.json())

app.use('/',router)
/// DATABASE CONNECTION


app.listen(process.env.PORT || 5000, () => {
  console.log("You are connected!");
});
