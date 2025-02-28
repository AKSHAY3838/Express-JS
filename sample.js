const users=[
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
const app=express()
const port =3838
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
// app.get("/", (req, res) => {
//     let userDetailsHTML = "<center><h1>All User Details</h1>";

    
//     users.forEach(user => {
        userDetailsHTML += `
            <div style="border: 2px solid black; padding: 10px; margin: 10px; width: 300px; text-align: left; background-color: lightblue; border-raius:2px;">
                <p><strong>Name:</strong> ${user.user1}</p>
                <p><strong>Age:</strong> ${user.age}</p>
                <p><strong>Date of Birth:</strong> ${user.DOB.date} ${user.DOB.month} ${user.DOB.year}</p>
                <p><strong>Address:</strong> ${user.adds}</p>
            </div>
        `;
    });

    userDetailsHTML += "</center>";
    res.send(userDetailsHTML);

})


app.listen(port,()=>{
    console.log("working"); 
})