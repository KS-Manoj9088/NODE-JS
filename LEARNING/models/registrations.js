const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
    username: String,
    email : String,
    number : Number,
    rollno : String,
    year : String,
    branch : String,
    session : String,
    events : [String]
});

module.exports = mongoose.model("Registrations", registrationSchema);