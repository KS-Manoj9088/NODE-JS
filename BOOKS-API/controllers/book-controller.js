const Book = require("../models/book")

const getAllBooks = async(req, res)=>{
    try{
        const allBooks = await Book.find({});

        if(allBooks?.length >0){
            res.status(200).json({
                success : true,
                description : "All Books In Store",
                data : allBooks
            });
        }
        else{
            res.status(404).json({
                success : false,
                description : "No Books found in Collection"
            });
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success : false,
            description : "Something went wrong"
        })
    }
}

const getSingleBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        const bookDetails = await Book.findById(bookId);  // Await the query to get actual data

        if (!bookDetails) {
            return res.status(404).json({
                success: false,
                description: "Book not found. Try with another ID"
            });
        }

        res.status(200).json({
            success: true,
            description: "Book Details",
            data: bookDetails
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            description: "Something went wrong"
        });
    }
};

const addNewBook = async (req,res)=>{
    try{
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);

        if(newBookFormData){
            res.status(201).json({
                success : true,
                message : "Book added Succesfully",
                data : newlyCreatedBook
            });
        }
    }
    catch(error){
        console.log(error);
        res.status(404).json({
            success : false,
            description : "No Books found in Collection"
        });
    }
}

const updateBook = async (req,res)=>{
    
}

const deleteBook = async(req,res)=>{

}

module.exports = {
    getAllBooks,getSingleBookById,addNewBook,updateBook,deleteBook
}