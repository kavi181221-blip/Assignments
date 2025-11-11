function doPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Task Completed")
        },2000);
    });
}
doPromise()
.then((message)=>console.log(message))
.catch((error)=>console.log(error));