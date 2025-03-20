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