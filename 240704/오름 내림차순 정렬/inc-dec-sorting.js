const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0];
let arr = input[1].trim().split(" ");

arr.sort((prev,cur)=> prev-cur);
let str="";
for(let i=0;i<arr.length;i++)
    str= str+arr[i]+" ";
str+="\n";
for(let i=arr.length-1;i>=0;i--)
    str= str+arr[i]+" ";
console.log(str);