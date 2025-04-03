require("dotenv").config()
const express = require("express");
const connectDb = require("./database/db");
const app = express();
const bookRoutes = require("./routes/book-routes");

const PORT = process.env.PORT || 3000;

// Connect to our database
connectDb();

// Middleware to parse JSON data.
app.use(express.json());


// routes here ---> here we will software methodology "Route Merging"
// We will be having a root route and follwing to get that we give a callback function exported from "Routes" folder.
// Ex:-  /api/books/  this is main route
//       /api/books/delete/:id ---> delete request


// This is not a http request something like {get/post/put/delete}
// ... here it is acting as a middleware
// So we need to use  ".use()" 


app.use("/api/books",bookRoutes);


app.listen(PORT,()=>{
    console.log(`Server is now running on port ${PORT}`);
});