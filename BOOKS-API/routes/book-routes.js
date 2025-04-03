const express = require("express")
const {getAllBooks,getSingleBookById,addNewBook,updateBook,deleteBook} = require("../controllers/book-controller")

// create express router
const router = express.Router()

// We are going to create all required routes for books api.
router.get("/get",getAllBooks);

router.get("/get/:id", getSingleBookById);

router.post("/add",addNewBook);

router.put("/update/:id",updateBook);

router.delete("/delete", deleteBook);



// Export router
module.exports = router;