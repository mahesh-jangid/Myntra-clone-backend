const express=require("express");

const router=express.Router();

const homelivingdata=require("../models/homelivingdata.model");

router.post("/",async(req,res)=>{
    try{
        const homelivingdatas=await homelivingdata.insertMany(req.body);
        return res.status(200).send(homelivingdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/",async(req,res)=>{
    try{
        const homelivingdatas=await homelivingdata.find().lean().exec();
        return res.status(200).send(homelivingdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});


module.exports=router;