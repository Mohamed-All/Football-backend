const express = require('express')
const router = express.Router()

const teamsModule =require('../models/Teams-models')


 const getTeam = async(req , res)=>{
    try {
        const allTeams= await teamsModule.teamsModel.find();
        res.status(200).json(allTeams)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
  
}

const getTeamById=async (req, res )=>{
    try {
        const getoneteam = await  teamsModule.teamsModel.findById(req.params.id)
        res.status(201).json(getoneteam)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
   
}

const addTeam =  async(req,res)=>{

    const addTeams= new teamsModule.teamsModel({
        contry: req.body.contry,
        clubName: req.body.clubName
    })
    try {
    const saveTeams= await addTeams.save()
    res.status(201).json(
        {
            message:"Team added succssefuly",
            saveTeams:saveTeams   })
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

const updateTeam = async(req, res) => {
    try {
        const updateTeam = await teamsModule.teamsModel.findByIdAndUpdate(
            req.params.id, 
            {
                contry: req.body.contry,
                clubName: req.body.clubName
            }, 
            { new: true } 
        );

        if (!updateTeam) {
            return res.status(404).json({ message: "Team not found" });
        }

        res.status(200).json({
            message: "Team updated successfully",
            updateTeam: updateTeam
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteTeam= async(req, res) => {
    try {
        const deleteTeam = await teamsModule.teamsModel.findByIdAndDelete(req.params.id);

        if (!deleteTeam) {
            return res.status(404).json({ message: "Team not found" });
        }

        res.status(200).json({
            message: "Team deleted successfully",
            deleteTeam: deleteTeam
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}






module.exports.getTeam=getTeam
module.exports.getTeamById=getTeamById
module.exports.addTeam=addTeam
module.exports.updateTeam=updateTeam
module.exports.deleteTeam=deleteTeam
module.exports.router=router