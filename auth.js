const express = require ("express") 
const app =express();
const port=3838

app.use(express.json())
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
    const uname=req.header("username")
    if (uname!=="user") {
        return res.status(401).send("invalid user name ");
    }
    next();
}
function passwordvalidation(req,res,next){
    const upass=req.header("password")
    if (upass!=="password") {
        return res.status(401).send("invalid user password ");
    }
    next();
}

app.get("/",usernamevalidation,passwordvalidation,function (req,res) {
    let starttime=Date.now();

    function add(){
        let a=10
        for (let i= 0; i < 1000; i++) {
            
            a+=i;
            
        }console.log(a);
        
    }add();
    let endtime=Date.now();
    let timetaken=endtime-starttime;
    
    res.send(` login successfully time taken to send the response : ${timetaken}`)
console.log(`time taken to send the response : ${timetaken}`);

})

//golobal catche
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.json({
        errmsg : " server is not responded, please try again"
    })
})


app.listen(port,()=>{
    console.log(`server is working fine on port number ${port}`);
    
})