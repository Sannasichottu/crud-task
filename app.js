const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require("./router")

//body-parser
app.use(express.json());

//router
app.use("/users",router)

//mongoose-connected
mongoose.connect("mongodb+srv://dhojay:dhojay@cluster0.ebuwxab.mongodb.net/taskCrud?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("I'm connected to database")
    }
    else{
        console.log(err)
    }
})

/*
app.get('/',(req,res)=>{
    res.send('port running on display')
})
*/


app.listen(5000,(req,res) => {
    console.log("I'm listening to port 5000")
})