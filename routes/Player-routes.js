const mongoose = require('mongoose')

const express = require("express")
const router=  express.Router()

// استيراد الموديل من قاعده البيانات 
const playerModel= require('../models/Player-model')
const playerControllerModule = require('../controllers/Player-controllers')

// get all players
router.get('/all',playerControllerModule.getPlaye )

//get one by id
router.get('/one/:id', playerControllerModule.getOneById )

// add post 

router.post('/add', playerControllerModule.addPlayers )

// update
router.put('/update/:id', playerControllerModule.updatePlayerr );

// (DELETE)
router.delete('/delete/:id', playerControllerModule.deletePlayerr );


module.exports.router=router









