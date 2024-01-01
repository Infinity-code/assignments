let counter=0;
const befTime=Date.now();
for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log("Counter= "+ counter++);
        if(i==9){
            console.log(Date.now()-befTime);
        }
    },(i+1)*1000);
}