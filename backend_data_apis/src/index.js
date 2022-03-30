const express=require("express");
const app=express();


const beautycontroller=require("./controllers/beauty.controller");

const homelivingcontroller=require("./controllers/homeliving.controller");

const homescontroller=require("./controllers/homes.controller");

const kidscontroller=require("./controllers/kids.controller");

const menscontroller=require("./controllers/mens.controller");

const searchcontroller=require("./controllers/search.controller");

const womenscontroller=require("./controllers/womens.controller")

const cathomelivingcontroller=require("./controllers/cathome.controller");

app.use(express.json());

app.use("/beautyproductdataentry",beautycontroller);

app.use("/cathomelivingdataentry",cathomelivingcontroller);

app.use("/homelivingdataentry",homelivingcontroller);

app.use("/homesdataentry",homescontroller);

app.use("/kidsdataentry",kidscontroller);

app.use("/mensdataentry",menscontroller);

app.use("/searchpagedataentry",searchcontroller);

app.use("/womensdataentry",womenscontroller);



module.exports=app;