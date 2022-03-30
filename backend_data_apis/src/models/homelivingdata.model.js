const mongoose=require("mongoose");

const homelivingdSchema=new mongoose.Schema({
    brand:{type:String,required:true},
    name:{type:String,required:true},
    imageURL:{type:String,required:true},
    price:{type:Number,required:true},
   
},{
    versionKey:false,
    timestamps:true
});

const homelivingdata=mongoose.model("homelivingdata",homelivingdSchema);

module.exports=homelivingdata;