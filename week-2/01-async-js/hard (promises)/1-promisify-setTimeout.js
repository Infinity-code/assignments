/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    
    const prom=new Promise((param)=>{
        console.log(typeof(param));
        setTimeout(function(){
            
        },n*1000);
    });
    return prom
}
const resolve=new wait(2);
resolve.then(function(){
    console.log(resolve);
})
module.exports = wait;
