const express = require("express")
const app = express()

// Middleware to parse Json
app.use(express.json())

let books = [
    {
        "id": 1,
        "name": "Book 1",
        "price": 10.99
    },
    {
        "id": 2,
        "name": "Book 2",
        "price": 9.99
    },
    {
        "id": 3,
        "name": "Book 3",
        "price": 12.99
    }
]


// create routes
app.get('/', (req, res) => {
    res.send('Welcome to the Books API')
});

app.get("/books", (req,res)=>{
    res.json(books);
});

app.get("/books/:id", (req,res)=>{
    let book_result = books.find( (book) => book.id === parseInt(req.params.id));
    if(book_result){
        res.json(book_result);
    }
    else{
        res.status(404).json({message: "Book not found"});
    }
});

// .post() requests

app.post("/add", (req,res)=>{
    let newBook = {
        id: books.length + 1,
        name: `Book ${books.length+1}`,
        price: parseInt(Math.random()*15)
    }

    books.push(newBook);
    res.json({
        data : newBook,
        message : "Book added Succesfully"
    });
});


// update a book -- generally we use .put() method to do this.

app.put("/update/:id", (req,res)=>{
    let findCurrentBook = books.find( (book) => book.id === parseInt(req.params.id));
    if(findCurrentBook){

        // We we want to give dynamic input in postman 
        // Mention all the required "keys" required to display updated changes.
        findCurrentBook.name = req.body.name || findCurrentBook.name;
        findCurrentBook.price = req.body.price || findCurrentBook.price;
        
        res.status(200).json({
            data : findCurrentBook,
            message : "Book updated Succesfully"
        });
    }
    else{
        res.status(404).json({message: "Book not found"});
    }
});

// .delete() request
app.delete("/delete/:id", (req,res)=>{
    let findCurrentBook = books.findIndex( (book) => book.id === parseInt(req.params.id) );
    if(findCurrentBook !== -1){
        const deletedBook = books.splice(findCurrentBook, 1);

        res.json({
            data : deletedBook,
            message : "Book deleted Succesfully"
        })
    }
    else{
        res.status(404).json({message: "Book not found"});
    }
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})