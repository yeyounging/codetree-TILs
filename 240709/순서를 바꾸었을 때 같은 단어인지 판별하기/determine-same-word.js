const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const str11 = input[0].trim();
const str22 = input[1].trim();

const str1 = str11.split('').sort().join('');
const str2 = str22.split('').sort().join('');

if(str1.length != str2.length) {
    console.log("No");
    return 0;

}
for(let i =0;i<str1.length;i++){
    if(str1[i] != str2[i])  {
        console.log("No");
        return 0;
    }
}
   console.log("Yes");