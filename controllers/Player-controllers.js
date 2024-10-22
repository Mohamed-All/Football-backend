const express = require("express")
const router=  express.Router()

// استيراد الموديل من قاعده البيانات 
const playerModel= require('../models/Player-model')


const getPlaye=async(req , res)=>{
    try {
        const allPlay= await playerModel.playerDB.find();
        res.status(200).json(allPlay)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
  
}

const getOneById=async (req, res )=>{
    try {
        const specicPlayer = await  playerModel.playerDB.findById(req.params.id)
        res.status(201).json(specicPlayer)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
   
}

const addPlayers=async(req,res)=>{

    const addPlayer = new playerModel.playerDB({
        name: req.body.name,
        number:req.body.number ,
        nationalty : req.body.nationalty,
        postion:req.body.postion,
        Club:req.body.Club
    })
    try {
    const savePlayer= await addPlayer.save()
    res.status(201).json(
        {
            message:"Player added succssefuly",
            savePlayer:savePlayer   })
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

const updatePlayerr=async(req, res) => {
    try {
        const updatePlayer = await playerModel.playerDB.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                number: req.body.number,
                nationalty: req.body.nationalty,
                postion: req.body.postion,
                Club: req.body.Club
            },
            { new: true } 
        );

        if (!updatePlayer) {
            return res.status(404).json({ message: "Player not found" });
        }

        res.status(200).json({
            message: "Player updated successfully",
            updatePlayer: updatePlayer
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deletePlayerr = async(req, res) => {
    try {
        const deletePlayer = await playerModel.playerDB.findByIdAndDelete(req.params.id);

        if (!deletePlayer) {
            return res.status(404).json({ message: "Player not found" });
        }

        res.status(200).json({
            message: "Player deleted successfully",
            deletePlayer: deletePlayer
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.getPlaye=getPlaye
module.exports.getOneById=getOneById
module.exports.addPlayers=addPlayers
module.exports.updatePlayerr=updatePlayerr
module.exports.deletePlayerr=deletePlayerr
module.exports.router=router