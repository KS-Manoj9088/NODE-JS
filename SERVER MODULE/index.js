// Using Server Module

const http = require("http");

// 1. creating the Server
const server = http.createServer( (request, response)=> {
    console.log("A new request received");
    response.end("<h1>I am OpThunder!!</h1>");
});

// 2. Starting the Server

server.listen(8000, '127.0.0.1', () => {
    console.log("Server is started");
    console.log("Server is running on port 8000");
});

//For each new request comes to the server , the callback function in createServer method gets executed.

//The callback function takes two parameters - request and response.


