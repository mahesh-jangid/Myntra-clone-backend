const express=require("express");

const router=express.Router();

const homeproductsdata=require("../models/homesdata.model");

router.post("/",async(req,res)=>{
    try{
        const homeproductsdatas=await homeproductsdata.insertMany(req.body);
        return res.status(200).send(homeproductsdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/",async(req,res)=>{
    try{
        const homeproductsdatas=await homeproductsdata.find().lean().exec();
        return res.status(200).send(homeproductsdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

module.exports=router;