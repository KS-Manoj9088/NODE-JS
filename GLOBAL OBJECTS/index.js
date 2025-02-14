console.log(__filename);

console.log(__dirname);

let printHello = () => {
    console.log('Hello');
}

let s1 = setTimeout( printHello,2000);

//s1 is to clear interval set

clearTimeout(s1);     //No function will be executed.

setInterval(printHello,2000);


