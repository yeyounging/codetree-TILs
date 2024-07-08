const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = parseInt(input[0]); // 입력의 첫 줄을 정수로 파싱
const numbers1 = input[1].split(" ").map(Number); // 두 번째 줄을 숫자 배열로 변환
const numbers2 = new Set(input[2].split(" ").map(Number)); // 세 번째 줄을 숫자 Set으로 변환

for (let num of numbers1) {
    if (!numbers2.has(num)) {
        console.log("No");
        return;
    }
}
console.log("Yes");