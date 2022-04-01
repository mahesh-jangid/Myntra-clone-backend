const express=require("express");

const router=express.Router();

const searchpagedata=require("../models/searchpage.model");

router.post("/",async(req,res)=>{
    try{
        const searchpagedatas=await searchpagedata.insertMany(req.body);
        return res.status(200).send(searchpagedatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/",async(req,res)=>{
    try{
        const searchpagedatas=await searchpagedata.find().lean().exec();
        return res.status(200).send(searchpagedatas);
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});


module.exports=router;