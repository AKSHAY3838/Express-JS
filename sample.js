let users=[
    {
        Fname : "amar",
        age : 22,
        DOB :{
            date:1,
            month:"aug",
            year : 2000
        },
        adds:"bengalure"
    },
    {
        Fname : "aman",
        age : 22,
        DOB :{
            date:11,
            month:"mar",
            year : 2000
        },
        adds:"bengalure"
    },{
        Fname : "amina",
        age : 22,
        DOB :{
            date:1,
            month:"dec",
            year : 2000
        },
        adds:"bengalure"
    }
]

const express =require("express")
const app=express();
const port =3838;
app.use(express.json());
// single user details in object 
// app.get("/",(req,res) => {
//     const user =users[0]
//     res.send(`<center><h1>1st user details</h1>
//                 <p><strong>Name:</strong> ${user.Fname}</p>
//                 <p><strong>Age:</strong> ${user.age}</p>
//                 <p><strong>Date of Birth:</strong> ${user.DOB.date} ${user.DOB.month} ${user.DOB.year}</p>
//                 <p><strong>Address:</strong> ${user.adds}</p>\
//             </center>
//     `
//     ) 
// })

// // all user details
app.get("/", (req, res) => {
    // res.json(users);
    let userDetailsHTML = "<center><h1>All User Details</h1>";
    users.forEach(users => {
        userDetailsHTML += `
            <div style="border: 2px solid black; padding: 10px; margin: 10px; width: 300px; text-align: left; background-color: lightblue; border-radius:2px;">
                <p><strong>Name:</strong> ${users.Fname}</p>
                <p><strong>Age:</strong> ${users.age}</p>
                <p><strong>Date of Birth:</strong> ${users.DOB.date} ${users.DOB.month} ${users.DOB.year}</p>
                <p><strong>Address:</strong> ${users.adds}</p>
                <p><strong>Address:</strong> ${users.section}</p>
            </div>
        `
    });

    userDetailsHTML += "</center>";
    res.send(userDetailsHTML);

})




// post request


app.post('/',function (req,res) {
        const adduser=req.body;
        console.log("Received Data:", adduser);        
        users.push(adduser) 
        res.status(201).json({ 
            message: "User added successfully", 
            users 
        });   
})

// put request
app.put("/",function (req,res) {
    users.forEach(user=>{
        user.section="A"
        if (user.Fname === "amar") {
            user.section = "B";
    }});
    res.json(users);})

//delete request
app.delete("/",function (req,res) {
    users = users.filter(user => user.section !== "B"); 
    res.json(users);
})    
app.listen(port,()=>{
    console.log("working"); 
})