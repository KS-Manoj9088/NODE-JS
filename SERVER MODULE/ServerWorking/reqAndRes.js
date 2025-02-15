const http = require('http');
const fs = require("fs");


let data = fs.readFileSync("index.html", "utf-8", (err)=>{
});

//console.log(data);

const server = http.createServer( (request, response) => {
    console.log("New Request Received");
    response.end(data);
});

server.listen(9000, "127.0.0.1", () => {
    console.log("Server is running on port 9000");
});