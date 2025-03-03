const express = require ("express") 
const app =express();
const port=4141
app.get("/",function (req,res) {
    const username=req.query.username;
    const password=req.query.password;
    if (username!="user" && password!="pass") {
        res.status(400).json({
            "msg": " invalid inputs try again"
        })
    }
    if (username==="user" && password === "pass") {
        res.status(200).json({
            "msg": " login success"
        })
    }
})

app.listen(port, ()=> {
    console.log("working fine");
    
})