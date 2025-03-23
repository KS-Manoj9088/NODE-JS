const express = require("express")
const app = express()

//root route

app.get('/home', (req,res)=>{
    res.send('Welcome to my home page')
});

app.get('/products', (req,res) =>{

    const products = [
        {id:1, name: 'product1', price: 10.99},
        {id:2, name: 'product2', price: 9.99},
        {id:3, name: 'product3', price: 8.99}
    ];

    res.json(products)    // Ekkada "products" json will get displayed on screen when we go to "localhost:9088/products"
})

// Creating Dynamic routes
// dynamic routes are created to get particularly work on different multi pages.
// ex:-   "localhost:9088/products/2"  i.e "localhost:9088/products/id"
app.get('/products/:id', (req,res)=>{
    const productId = parseInt(req.params.id);

    const products = [
        {id:1, name: 'product1', price: 10.99},
        {id:2, name: 'product2', price: 9.99},
        {id:3, name: 'product3', price: 8.99}
    ];

    const getSingleProduct = products.find( (product) => {
        return product.id == productId;
    })

    //console.log(typeof(getSingleProduct));

    if(getSingleProduct){
        res.json(getSingleProduct)
    }
    else{
        res.status(404).send("Product not found! Please try with different id")
    }
})


const port = 9088
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})