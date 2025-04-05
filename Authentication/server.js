require("dotenv").config()
const express = require("express");
const {dbConnection} = require("./database/db");
const authRoutes = require("./routes/auth-routes")

const app = express();
const PORT = process.env.PORT || 3000;

// Establish DB Connection
dbConnection();

// Middleware to parse json() and URL extended
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware to for register and signup 
app.use("/api/auth", authRoutes);

// To render index.html
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});