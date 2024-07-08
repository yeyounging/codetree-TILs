const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n,k] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

const cmp = (prev,cur) => {
    return prev-cur;
}

numbers.sort(cmp);
console.log(numbers[k-1]);