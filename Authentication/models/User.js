const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
},{
    timestamps: true
});

module.exports = model("User",UserSchema);