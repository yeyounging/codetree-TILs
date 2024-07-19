const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const length = Number(input[0].trim());
const arr = input[1].trim().split(" ").map(Number);
const isSorted = Array(length).fill(false);
const ans = Array(length);

let min_index= 0;
let cnt = 1;
let flag = true;
while(flag){
    for(let i =0 ; i<length;i++){
        if(isSorted[i] ==false) {
        min_index=i; 
        break;
        }
        if(i==length-1) flag = false;
    }
    if(!flag) break;
    for(let j=0;j<length;j++){
        if(isSorted[j]==false && arr[min_index]>arr[j]) min_index=j;
    }
    ans[min_index] = cnt++;
    isSorted[min_index] = true;
}
console.log(ans.join(" "));