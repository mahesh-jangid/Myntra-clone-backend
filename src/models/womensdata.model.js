const mongoose=require("mongoose");

const womensSchema=new mongoose.Schema({
    imageURL: {type:String,required:false},
    productName:  {type:String,required:false},
    price:{type:Number,required:false},
    strikedPrice:{type:Number,required:false},
    itemGender:  {type:String,required:false},
    itemCategory:  {type:String,required:false},
    sale:{type:String,required:false},
    Brand: {type:String,required:false},
},{
    versionKey:false,
    timestamps:true
});

const womensdata=mongoose.model("womensdata",womensSchema);

module.exports=womensdata;