const mongoose = require('mongoose');

const teamsModel = new mongoose.Schema({
    contry: { type: String, required: true },  
    clubName: { type: String, required: true } 
}, { _id: true });  

module.exports.teamsModel = mongoose.model('teams', teamsModel);
