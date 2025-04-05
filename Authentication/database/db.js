const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if(connection){
            console.log("Connected to MongoDB");
        }
        else{
            console.log("Failed to connect to MongoDB");
        }
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
    
}

const name = "thunder";

module.exports = {dbConnection,name};