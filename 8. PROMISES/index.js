

function delayFn(time){
    return new Promise( (res, req)=>{
        setTimeout( res, time);
    });
}

console.log("Delay Timer ");

delayFn(2000).then( ()=>{
    console.log("Timer Completed Promise Resolved....");
});



let divison = (a,b)=>{
    new Promise( (res, rej) => {
        if(b===0){
            rej("Divison by Xero is not posiible")
        }
        let ans = a/b;
        res(ans);
    }).then( (solution)=>{
        console.log("Solution is ", solution);
    })
    .catch( (err) => {
        console.log(err);
    })
}

divison(10,4);