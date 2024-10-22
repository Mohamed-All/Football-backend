const mongoose = require('mongoose')
const playerDB= new mongoose.Schema({
    id:{ type: mongoose.Schema.Types.ObjectId },
    name: String,
    number: Number,
    nationalty: String,
    postion:String,
    Club:String
})

module.exports.playerDB=mongoose.model('Players',playerDB)