function findSum() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum+numbers[i];
    }
    return sum;
}

let numbers= [10, 20, 30, 40, 50];
console.log(findSum());
