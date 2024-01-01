/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000);
    })

}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    const befDate=Date.now();
    return wait1(t1).then(()=>{
        // console.log("Inside t1. Waited for "+t1+" seconds.")
        return wait2(t2);
    }).then(()=>{
        // console.log("Inside t2. Waited for "+t2+" seconds.")
        return wait3(t3);
    }).then(()=>{
        // console.log("inside t3. Waited for "+t3+" seconds.")
        return new Promise((resolve)=>{
            resolve(Date.now()-befDate);
        })
    });

}
// async function main(){
//     const a=await calculateTime(1,2,3);
//     console.log(a);
// }
// main();

module.exports = calculateTime;
