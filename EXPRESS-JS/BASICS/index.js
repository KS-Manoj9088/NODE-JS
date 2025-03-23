const express = require("express")

const port = 3000

const app = express()

app.get("/", (req, res) =>{
    res.send("Welcome to home page")
});


app.get("/about", (req, res) => {
    res.send("This is the About Page!");
});

app.listen( port, ()=>{
    console.log(`Server is running on port ${port}`)
});