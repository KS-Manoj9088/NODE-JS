require("dotenv").config();
const express = require("express");
const app =  express();
const dbConnection = require("./dbconnection/dbConnection");
const allRoutes = require("./routes/routes");
const path = require("path");

//Run db
dbConnection();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));

//Routes
app.use("/fest/home",allRoutes);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})