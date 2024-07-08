const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = parseInt(input[0]);
const numbers = input[1].trim().split(" ").map(Number);

numbers.sort();
let max = 0;

for(let i=0;i<numbers.length/2;i++){
    let temp = numbers[i]+numbers[numbers.length-i-1];
    if ( temp > max) max =temp; 
}

console.log(max);