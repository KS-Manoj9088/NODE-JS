const http = require("http")

// Read content of Error.html file

const fs = require("fs");
const path = require("path");
const fileContent = fs.readFileSync("error.html", "utf8");

//

const server = http.createServer( (req,res) => {
    const url = req.url.toLocaleLowerCase();
    if( url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Home Page</h1>');
    }
    else if(url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>About Page</h1>');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(fileContent);
    }
});

server.listen(4000, ()=>{
    console.log('Server is running on port 4000');
});