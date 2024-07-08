const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = parseInt(input[0]);
const numbers1 = input[1].trim().split(" ").map(Number);
const numbers2 = input[2].trim().split(" ").map(Number);

let flag = false;

for (let num of numbers1) {
    flag = false;
    for (let num2 of numbers2) {
        if (num == num2) {
            flag = true;
            break;
        }
    }
    if (flag == false) {
        console.log("No");
        return 0;
    }
}
console.log("Yes");