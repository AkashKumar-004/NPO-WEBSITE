const mongoose=require('mongoose');
const queryschema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    }
)
const query=mongoose.model("query",queryschema);
module.exports=query;