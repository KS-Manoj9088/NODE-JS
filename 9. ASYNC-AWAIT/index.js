let lovers = async (lovername) => {
    try {
        let info = await new Promise((res, rej) => {
            if (lovername === "Deekshitha") {
                res("Deekshitha is my lover");
            } else {
                res(`${lovername} is not your Lover`);
            }
        });
        console.log(info);
    } catch (err) {
        console.log(err);
    }
}

lovers("Deekshitha");



function delayTime(time){
    return new Promise((resolve, reject) => {

        if(time>5000){
            reject("Time Limit Exceeded");
        }
        else{
            setTimeout(() => {
                resolve("Time is up");
            },time);
        }
    }).catch( (err)=>{
        console.log(err);
    });
}

async function display(name) {
    await delayTime(7000);
    console.log(name);
}

display("MANOJ");

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise 


// DIVISON USING ASYNC-AWAIT
console.log("-----------------")

async function division(a, b) {
    try {
        let result = await new Promise((resolve, reject) => {
            if (b == 0) {
                reject("Division by zero is not possible");
                return;
            }
            let ans = a / b;
            resolve(ans);
        });

        return result; // ✅ Return the result after resolving the promise
    } catch (err) {
        return err; // ✅ Return the error message so that it can be logged
    }
}

/*
// ✅ Calling the function properly
(async () => {
    let result = await division(10, 5);
    console.log(result); // Output: 2

    let errorResult = await division(10, 0);
    console.log(errorResult); // Output: "Division by zero is not possible"
})();
*/


async function DivisonResults(){
    let result = await division(10, 5);
    console.log(result); // Output: 2

    let errorResult = await division(10, 0);
    console.log(errorResult);
}

DivisonResults()