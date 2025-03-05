const express = require ("express") 
const app =express();
const port=4141
// app.get("/",function (req,res) {
//     const username = req.header("username");
//     const password = req.header("password");
//     if (username!=="user" || password!=="pass") {
//        return res.status(400).json({
//             "msg": " invalid inputs try again"
//         })
//     }
//     if (username==="user" && password === "pass") {
//         res.status(200).json({
//             "msg": " login success"
//         })
//     }
// })

// app.listen(port, ()=> {
//     console.log("working fine");
    
// })


// by using middlewares 


function usernamevalidation(req,res,next){
    const uname=req.header("uname")
    if (uname!=="user") {
        return res.status(401).send("invcalid user name ");
    }
    next();
}
function passwordvalidation(req,res,next){
    const upass=req.header("upass")
    if (upass!=="password") {
        return res.status(401).send("invalid user password ");
    }
    next();
}

app.get("/",usernamevalidation,passwordvalidation,function (req,res) {
    res.send(" login successfully ")
})
app.listen(port,()=>{
    console.log(`server is working fine on port number ${port}`);
    
})