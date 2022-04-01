const mongoose=require("mongoose");

const homeSchema=new mongoose.Schema({
    Brand: {type:String,required:true},
    productName: {type:String,required:true},
    imageURL:{type:String,required:true},
    price:{type:Number,required:true},
    strikedPrice:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
});

const homeproductsdata=mongoose.model("homeproductsdata",homeSchema);

module.exports=homeproductsdata;