/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve()},t*1000);
    });


}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve()},t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve()},t*1000);
    }); 
}

function calculateTime(t1, t2, t3) {
    // const befDate=new Date();
    // const befTIme=befDate.getSeconds();
    const befTIme=Date.now();
    // console.log("beforeDate: "+befTIme);
    return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(()=>{
        const a=new Promise((resolve)=>{
            // const aftDate=new Date();
            const aftDate=Date.now();
            // resolve((aftDate.getSeconds()-befTIme)*1000);
            resolve(aftDate-befTIme);
            // console.log("afterdate: "+aftDate.getSeconds());
        })
        // console.log(a);
        return a;
    })
    

    
    // return arr[3]-befTIme;
}
// async function main(){
//     const c=await calculateTime(1,2,3);
//     // const b=await wait1(4);
//     console.log(c);
//     // console.log(b);
// }

// main();
module.exports = calculateTime;
