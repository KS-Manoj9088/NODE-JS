const express = require("express")
const app = express()

const requestTimeStampLogger = (req, res, next)=>{
    const timestamp = new Date().toISOString();
    console.log(`Request received at ${timestamp}`);
    next();
}

app.use(requestTimeStampLogger);


app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.get("/about/:product", (req,res)=>{
    res.send(`The product is ${req.params.product}`);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})