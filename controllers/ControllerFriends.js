const express=require('express')
const FriendModel = require('../models/ModelFriends');



exports.Register = async (req, res) => {
    const name=req.body.name
    const age=req.body.age
    const friend = new FriendModel({ name:name, age: age });
    await friend.save();
    res.send(friend);
  };
  
exports.Read= async (req, res) => {
    FriendModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  };
  
 exports.Update= async(req,res)=>{
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
  }
  
  
exports.Remove=async(req,res)=>{
    const id=req.params.id
    await FriendModel.findByIdAndRemove(id).exec(
      res.send('deleted')
    ) 
  }

