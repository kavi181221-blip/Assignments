function fecthdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched Successfully")
        },3000);
    });
}
async function getData(){
    console.log("Fetching Data");
    const result=await fecthdata();
    console.log(result)
    console.log("process Completed")
}
getData();