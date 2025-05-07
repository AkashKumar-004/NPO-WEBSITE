const mongoose =require('mongoose');
const Serviceschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    donationLink:{
        type:String
    },
    contact:{
        type:String,
        required:true
    },
    history:{
        type:String,
        required:true
    },
    impact:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})
const service =mongoose.model("service",Serviceschema)
module.exports=service;