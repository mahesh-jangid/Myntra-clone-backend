const mongoose=require("mongoose");

const cathomelivingSchema=new mongoose.Schema({
    Brand: {type:String,required:true},
    productName: {type:String,required:true},
    imageURL:{type:String,required:true},
    price:{type:Number,required:true},
    strikedPrice:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
});

const cathomelivingdata=mongoose.model("categoryhomelivingdata",cathomelivingSchema);

module.exports=cathomelivingdata;