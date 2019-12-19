let number1, number2;

arr = [100, 200, 300, 400];

[number1, number2] = arr; // sırasıyla atama yapar

console.log(number1); // 100
console.log(number2); // 200


const numbers = {
    a: 10, b: 20, c: 30, d: 40, e: 50
};

const {a: x, c: y, e: z} = numbers; // numbers içindeki a değerini x'e,c değerini y'ye e değerini z'ye atar

console.log(x, y, z);

const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();
console.log(lang1,lang2,lang3);
