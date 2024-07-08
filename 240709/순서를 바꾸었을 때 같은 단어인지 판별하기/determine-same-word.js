const fs = require("fs");
const input = fs.readFileSync(0).toString().split("\n");
const str1 = input[0].trim().toString();
const str2 = new Set(input[1].trim().toString());

if(str1.length != str2.size) {
    console.log("No");
    return 0;

}for(let c of str1){
    if (!str2.has(c) ){
        console.log("No");
        return 0;
    }
}
   console.log("Yes");