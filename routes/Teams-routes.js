const mongoose = require('mongoose')

const express = require('express')
const router = express.Router()

const teamsModule =require('../models/Teams-models')

const TeamsControllerModule=require('../controllers/Teams-controllers')

// get
router.get('/all',TeamsControllerModule.getTeam)

// get one team by id
router.get('/one/:id', TeamsControllerModule.getTeamById )
//add
router.post('/add', TeamsControllerModule.addTeam)


//update
router.put('/update/:id',TeamsControllerModule.updateTeam );

// delete

router.delete('/delete/:id', TeamsControllerModule.deleteTeam);





module.exports.router=router
