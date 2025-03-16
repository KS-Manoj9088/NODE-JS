const fs = require("fs");


let data  = `public class basics{

    public static void main(String[] args){
        System.out.println("I am OpThunder");
    }
}`;
fs.writeFile("input.txt", "I am writing this statement into a File - 'input.txt' ", (error) => {
    if (error) {
        console.log(error);
    }

    console.log("------------");
    fs.readFile("input.txt", "utf-8", (data1,error) => {
        if (error) {
            console.log(error);
        }
        //console.log(data1);
    });
});
