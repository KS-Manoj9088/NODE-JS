
const firstModule = require('./first-module');


console.log(firstModule.add(90,88));


try{
    console.log("trying to divide by zero");
    console.log(firstModule.divide(10,0));
}
catch(error){
    console.log(error.message);
}


/*
module wrapper 

(
    function(exports, require, module, __filename, __dirname){
        //modle code here
    }
)

*/