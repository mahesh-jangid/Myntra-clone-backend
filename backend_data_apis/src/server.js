const connectdb = require("./configs/db");
const app=require("./index");

app.listen(5000,async ()=>{    
    try{
        await connectdb();
        console.log("listening to port 5k");
    }
    catch(err)
    {
        console.log(err.message)
    }
});
