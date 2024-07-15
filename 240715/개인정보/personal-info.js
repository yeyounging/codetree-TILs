const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 데이터를 저장할 클래스 정의
class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = parseInt(height);
        this.weight = parseFloat(weight);
    }
}

// 입력 데이터 파싱
const people = input.map(line => {
    const [name, height, weight] = line.trim().split(" ");
    return new Person(name, height, weight);
});

// 이름순 정렬
const nameSorted = [...people].sort((a, b) => a.name.localeCompare(b.name));

// 키 순 정렬
const heightSorted = [...people].sort((a, b) => b.height - a.height);

console.log("name");
nameSorted.forEach(person => {
    console.log(`${person.name} ${person.height} ${person.weight.toFixed(1)}`);
});

console.log("\nheight");
heightSorted.forEach(person => {
    console.log(`${person.name} ${person.height} ${person.weight.toFixed(1)}`);
});