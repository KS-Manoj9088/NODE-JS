const express = require('express');
const path = require('path');
const app = express();

// Middleware
let customMiddleware = (req, res, next) => {
    console.log('Custom Middleware');
    next();
};

app.use(customMiddleware);

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public'))); //to render css file or any other.

const products = [
    { id: 1, name: "MacBookAir1", price: "$1000" },
    { id: 2, name: "MacBookAir2", price: "$1200" },
    { id: 3, name: "MacBookAir3", price: "$1500" }
];

// Routes

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// "HTML" files render cheyyali antae "res.sendFile" method use cheyyali. 
// Render cheddham anukunna HTML public folder lo undaali.

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:name", (req, res) => {
    const name = req.params.name;
    let laptop = products.find(product => product.name === name);

    if (laptop) {
        res.status(200).json(laptop);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
