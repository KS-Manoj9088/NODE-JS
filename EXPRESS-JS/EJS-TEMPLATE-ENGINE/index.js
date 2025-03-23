// EJS - embedded javascript templating.
// http://embeddedjs.com/
// http://embeddedjs.com/docs/
// http://embeddedjs.com/docs/templating/
// http://embeddedjs.com/docs/templating/expressions/

// This is used to generate HTML+JS
// Used to create Dynamic HTML pages.

const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express()

// set the view engine as "ejs"
// What is view-engine :- "Used to seperate 'express.js' code from dynamic html".
app.set("view engine", "ejs");

//set the directory for "views" folder
//console.log(__dirname);
let newpath = path.join(__dirname,"views")
console.log(newpath);

app.set("views", newpath);

const products = [
    {
    id:1,
    name:"Product 1",
    price:100
    },
    {
    id:2,
    name:"Product 2",
    price:200
    },
    {
    id:3,
    name:"Product 3",
    price:300
    }
]

app.get("/", (req,res)=>{
    res.render('home', {
        title: "Home Page",
        products: products,
    });
});

app.get("/about", (req,res)=>{
    res.render('about', {
        title: "About Page"
    })
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})