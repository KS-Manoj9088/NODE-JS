// Express is a routing and middleware web framework that has minimal functionality of its own.
// This means that an Express app is very much like any other Node.js HTTP server.

// Middleware functions are functions that have access to the "request" (req) and "response" (res) objects 
// and that "execute" next middleware function in the stack of applications "request-response cycle".


const express = require("express")
const app = express()

const myFirstMiddleWare = (req,res, next)=>{
    console.log("This is my first middleware, this will run on every request");
    next();

    // next() function is used to call run middleWare function for request to a particular "URL"
}

app.use(myFirstMiddleWare);

app.get("/", (req,res)=>{
    res.send("Hello, World!");
})

app.get("/about",(req,res)=>{
    res.send("This is about page");
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})