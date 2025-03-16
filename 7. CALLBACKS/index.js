const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err,data) => {
    if (err) throw err;

    console.log(data);

    let UpdatedData = "I am OpThunder";
    fs.writeFile("thunder.txt", UpdatedData, (err)=>{
        if (err) throw err;
        console.log("File written Succesfulll");
    });
})