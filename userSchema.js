const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required : true,
        trim:true
    },
    middlename : {
        type:String
    },
    lastname : {
        type:String,
        required : true,
        trim:true
    },
    dob : {
        type : Date,
        trim:true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    occupation : {
        type: String,
        trim : true
    },
    company : {
        type : String,
        trim : true
    },
    password : {
        type : String,
        required : true
    }

})

module.exports = mongoose.model("Contact_Data", userSchema)