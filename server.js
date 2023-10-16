const app = require('./app.js')
const mongoose = require('mongoose')
const PORT  = process.env.PORT||7000

// Databases connection

(async()=>{
    try {
        // bd 
        
      await  mongoose.connect('mongodb+srv://<Aman@pw>:<IcKDbDA8O8QjyCkK>@cluster0.ovdwfq3.mongodb.net/todoapp')
      console.log(" connected success")
      app.on("error" , (err)=>{
        console.log(" ERROR " + err)
        throw err
      })
      app.listen(port,()=>{
        console.log(` server is working at localhost:${PORT}`)
    }
    )
    
        
    } catch (error) {
        console.log(" error in database"+ err)
        throw err
        
    }

})()




