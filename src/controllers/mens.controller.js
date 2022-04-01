const express=require("express");

const router=express.Router();

const mensdata=require("../models/mensdata.model");

router.post("/",async(req,res)=>{
    try{
        const mensdatas=await mensdata.insertMany(req.body);
        return res.status(200).send(mensdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});

router.get("/",async(req,res)=>{
    try{
        const mensdatas=await mensdata.find().lean().exec();
        return res.status(200).send(mensdatas)
    }
    catch(err){
        console.log(err.message);
        return res.status(400).send(err.message);
    }
     
});


module.exports=router;