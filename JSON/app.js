const http = require('http');
const fs = require("fs");

let html = fs.readFileSync("index.html","utf-8", (err)=>{
    if(err) {
        console.log(err);
    }
});

let products = JSON.parse(fs.readFileSync("products.json","utf-8")); //Convert JSON Data into JSON Object

let productListHtMl = fs.readFileSync("product-list.html","utf-8");

const server = http.createServer( (request, response) => {
    let path = request.url;
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.writeHead(200,{
            'Content-Type': 'text/html',
        });
        response.end(html.replace("{{%content%}}",productListHtMl));
    }
    else if(path.toLocaleLowerCase() === '/contact'){
        response.writeHead(200,{
            'Content-Type': 'text/html',
        });
        response.end(html.replace("{{%content%}}","You are in Contact Page"));
    }
    else if(path.toLocaleLowerCase() === '/products'){
        response.writeHead(200,{
            'Content-Type': 'application/json'
        });

        response.end(JSON.stringify(products));
        //console.log(products);
    }
    else if(path.toLocaleLowerCase() === '/services'){
        response.writeHead(200,{
            'Content-Type': 'text/html',
        });
        response.end(html.replace("{{%content%}}","You are in Services Page"));
    }
    else{
        response.writeHead(404,{
            'Content-Type': 'text/html',
        });
        response.end(html.replace("{{%content%}}","Error : 404 Page not Found"));
    }
});

server.listen( 8000, "127.0.0.1", ()=>{
    console.log('Server is running on port 8000');
});

