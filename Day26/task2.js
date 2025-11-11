function dotask(callback){
    console.log("Task Started")
    setTimeout(()=>{
        callback();
    },3000)
}
function task(){
    console.log("Task Completed")
}
dotask(task);