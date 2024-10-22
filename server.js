const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/ITI-Project')
const connection = mongoose.connection
connection.once('open', ()=>console.log('connected to database'))
connection.on('error',(err)=>console.log(err))
// اول حاجه استيراد اكسبريس 
const express = require("express")
const expressApp = express() 
expressApp.use(express.json())


expressApp.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
      return res.status(200).json({});
    }
    next();
  });



// استيراد البيانات من الراوتس علشان اقدر اشغلها
const playerRouter= require('./routes/Player-routes')
// ثم بقولو استخدمها بقا الحاجات الي جايه من بلاير روتس
expressApp.use('/players', playerRouter.router)


// استيراد التيمز
const teamsRouter = require('./routes/Teams-routes')
expressApp.use('/teams', teamsRouter.router)


    
expressApp.listen(3000,()=>{console.log('Port 3000 is runing')})



