const mongoose=require("mongoose");

const mensSchema=new mongoose.Schema({
    imageURL: {type:String,required:true},
    productName:  {type:String,required:true},
    price:{type:Number,required:true},
    strikedPrice:{type:Number,required:true},
    itemGender:  {type:String,required:true},
    itemCategory:  {type:String,required:true},
    sale:{type:Number,required:true},
    Brand: {type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

const mensdata=mongoose.model("mensdata",mensSchema);

module.exports=mensdata;