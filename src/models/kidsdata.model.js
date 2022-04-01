const mongoose=require("mongoose");

const kidsSchema=new mongoose.Schema({
        imageURL: {type:String,required:true},
        productName:  {type:String,required:true},
        price: {type:Number,required:true},
        strikedPrice: {type:Number,required:true},
        itemGender:  {type:String,required:true},
        itemCategory: {type:String,required:true},
        sale:  {type:String,required:false},
        age:  {type:String,required:true},
        Brand: {type:String,required:true},
},{
        versionKey:false,
        timestamps:true
    });

const kidsdata=mongoose.model("kidsdata",kidsSchema);

module.exports=kidsdata;