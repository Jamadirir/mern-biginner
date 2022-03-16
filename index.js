const express = require("express");
const app = express();
const mongoose = require("mongoose");
const FriendModel = require("./models/Friends");
const cors=require('cors')
require('dotenv').config()
app.use(cors())
app.use(express.json())
/// DATABASE CONNECTION
mongoose.connect(
  "mongodb+srv://jama:Jamam2522@mern.x7tsv.mongodb.net/tutorialmern?retryWrites=true&w=majority", { 
    useNewUrlParser: true
   });

app.post("/addfriend", async (req, res) => {
  const name=req.body.name
  const age=req.body.age
  const friend = new FriendModel({ name:name, age: age });
  await friend.save();
  res.send(friend);
});

app.get("/read", async (req, res) => {
  FriendModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/update', async(req,res)=>{
  const newAge=req.body.newAge
  const id=req.body.id
  try {
    await FriendModel.findById(id,(error,updateToFriend)=>{
      updateToFriend.age=Number(newAge)
      updateToFriend.save()
    })
  } catch (error) {
    console.log(error)
  }
  res.send('updated')
})


app.delete('/delete/:id',async(req,res)=>{
  const id=req.params.id
  await FriendModel.findByIdAndRemove(id).exec(
    res.send('deleted')
  ) 
})
app.listen(process.env.PORT || 5000, () => {
  console.log("You are connected!");
});