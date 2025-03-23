let readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num){
    if (num <= 1) {
        return false;
    }

    for(let i =2;i <=Math.sqrt(num);i++){
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function isPalindrome(num){
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

rl.question("Enter a value to check if it is PrimePalindrome : ", (num) => {
    let n = parseInt(num);

    if(isNaN(num)){
        console.log("Invalid input");
    }
    else{

        if(isPrime(n) && isPalindrome(n)){
            console.log(num + " is a PrimePalindrome");
        }
        else{
            console.log(num + " is not a PrimePalindrome");
        }
    }

    rl.close();
});
