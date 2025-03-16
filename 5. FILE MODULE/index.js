const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "DATAS1");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log(`Data Folder ${dataFolder} created Succesfully`);
}
else{
    console.log(`Data Folder ${dataFolder} already exists`);
}

console.log(path.dirname(dataFolder));



const filePath = path.join(dataFolder, "input-3.txt");

if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, "This is @nd Input file");
}

//fs.unlinkSync("C:/WebDevelopment/NODE JS/FILE MODULE/DATAS1/input-2.txt");

let content = "\nNammodhu nammodhu aada vallani nammodhu";
fs.appendFileSync("C:/WebDevelopment/NODE JS/FILE MODULE/DATAS1/input-3.txt", content);


let dataOfFile = fs.readFileSync("C:/WebDevelopment/NODE JS/FILE MODULE/DATAS1/input-3.txt","utf-8");
console.log(dataOfFile);

const asyncFilePath = path.join(dataFolder, "async-data.txt");

fs.writeFile(asyncFilePath, "This is File Creation Using Async Way", (err)=>{
    if(err){
        console.log(err);
    }
});

fs.readFile(asyncFilePath, "utf-8", (data,err) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

fs.appendFile(asyncFilePath, "\n This is appended Content", (err)=>{
    if(err){
        console.log(err);
    }
});

