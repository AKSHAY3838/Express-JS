
const express=require("express");
const port = 3832;
const app = express();  //returns an object 

app.get('/', function (req, res) {
    res.send("<h1>Hello world</h1>");    
})

app.listen(port,()=>{

    console.log("EXPRESS IS WORKING ");
    
})