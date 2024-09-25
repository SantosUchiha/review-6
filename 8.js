console.log("Hello World")

let numbers = [1, 23, 5, 234, 0, 999];
let largest = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]; 
    }
}

console.log(largest);
