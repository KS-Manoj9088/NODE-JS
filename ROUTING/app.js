const http = require('http');
const fs = require("fs");

let html = fs.readFileSync("index.html","utf-8", (err)=>{
    if(err) {
        console.log(err);
    }
})


const server = http.createServer( (request, response) => {
    let path = request.url;
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.end(html.replace("{{%content%}}","You are in Home Page"));
    }
    else if(path.toLocaleLowerCase() === '/contact'){
        response.end(html.replace("{{%content%}}","You are in Contact Page"));
    }
    else if(path.toLocaleLowerCase() === '/about'){
        response.end(html.replace("{{%content%}}","You are in About Page"));
    }
    else if(path.toLocaleLowerCase() === '/services'){
        response.end(html.replace("{{%content%}}","You are in Services Page"));
    }
    else{
        response.end(html.replace("{{%content%}}","Error : 404 Page not Found"));
    }
});

server.listen( 8000, "127.0.0.1", ()=>{
    console.log('Server is running on port 8000');
})

