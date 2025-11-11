function Createcounter(){
    let count=0;
    return function(){
        count++;
        return count;
    };
}
const counts=Createcounter();
console.log(counts());
console.log(counts());
console.log(counts())

