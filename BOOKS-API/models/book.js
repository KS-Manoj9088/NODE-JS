const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Book title is Required"],
        trim : true,
        maxLength : [100, "Book title cannot be more than 100 Characters"]
    },
    author : {
        type : String,
        required : [true, "author title is Required"],
        trim : true
    },
    year : {
        type : Number,
        required : [true, "Publication Year is required"],
        min : [1900, "Publication Year must be greater than 1900"],
        max : [new Date().getFullYear(), "Year cannot be in Future"]
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model("books",BookSchema);