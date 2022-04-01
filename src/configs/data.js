const express=require("express");
const { default: mongoose } = require("mongoose");

const app=express();

const connectdb=()=>{
    mongoose.connect("mongodb+srv://uday:9010015985@cluster0.fflxi.mongodb.net/myntra_project?retryWrites=true&w=majority");
};

module.exports=connectdb;