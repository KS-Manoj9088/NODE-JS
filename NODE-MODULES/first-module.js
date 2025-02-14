function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

let multiply = (a,b) => {
    return a*b;
}

let divide = function(a,b){
    if(b==0){
        throw new Error('Divide by zero is not allowed');
    }
    return a/b;
}

module.exports = {
    add,subtract,multiply,divide
};