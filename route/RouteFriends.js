const express=require('express')
const controllerFriend=require('../controllers/ControllerFriends')
const {Register,Read,Remove,Update}=require('../controllers/ControllerFriends');

const router=express.Router()

router.get('/read',Read)
router.post('/create',Register)
router.put('/update',Update)
router.delete('/delete',Remove)


module.exports=router