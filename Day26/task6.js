function sumAll(...numbers){
    let total=0;
    for(let num of numbers){
         total=total+num
    }
    return total;
}
console.log(sumAll(2,3,4,5));
console.log(sumAll(7,8,4,));

