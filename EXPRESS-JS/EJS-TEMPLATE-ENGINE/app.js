const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the custom folder for EJS views
app.set("views", path.join(__dirname, "templates")); 


const products = [
    { id: 1, name: "MacBookAir1", price: "$1000" },
    { id: 2, name: "MacBookAir2", price: "$1200" },
    { id: 3, name: "MacBookAir3", price: "$1500" }
];// 👈 Change "views" to "templates"

app.get("/", (req, res) => {
    res.render("index",{products : products, name : "Manoj Kumar"}); // Will look inside "templates/index.ejs"
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
