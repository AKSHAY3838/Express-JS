function cal(a,b,sign) {
    let ans=sign(a,b);
    console.log(ans);
    return ans;
}
function sum(a, b) { return a + b; }
function min(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }


const exp=require("express"); 
const app = exp();
const port=5421;


app.get("/cal",function(req,res){
    let num1 =Number(req.query.num1);
    let num2 =Number(req.query.num2);
    let op =req.query.op;
    let operation = {
        "sum": sum,
        "min": min,
        "mul": mul,
        "div": div
    }; 
    if (!operation[op]) {
        return res.send("<h2>Invalid operation! Use 'sum', 'min', 'mul', or 'div'.</h2>");
    }

    let calcu=cal(num1,num2,operation[op]);
    res.send(`<center><H1>calculation<H1></center>
        <h2>Result: ${calcu}</h2>
        `);
})
app.listen(port,()=>{
    
    console.log("EXPRESS IS WORKING OK ");
    
})

