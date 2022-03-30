const express=require("express");

const router=express.Router();

const womensdata=require("../models/womensdata.model");

router.post("/",async(req,res)=>{
    try{
        const womensdatas=await womensdata.insertMany(req.body);
        return res.status(200).send(womensdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/",async(req,res)=>{
    try{
        const womensdatas=await womensdata.find().lean().exec();
        return res.status(200).send(womensdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

module.exports=router;