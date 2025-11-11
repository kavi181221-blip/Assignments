function dect(){
    let count=0;
    return async function incre() {
        await new Promise((resolve)=>setTimeout(resolve,3000));
        count++;
        console.log(`Counter updated ${count}`);
        
        
    };
}
const counter=dect();
counter();
counter();