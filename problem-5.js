const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];


const seenNumber = new Map();

for( let i = 0; i < numbers.length; i++){
    if(seenNumber.has(numbers[i])){
        console.log(i, seenNumber.get(numbers[i]))
    } else {
        seenNumber.set(numbers[i], i)
        console.log(seenNumber)
    }
}

console.log(seenNumber);


