const langs = ["Python", "Java", "C++"];

console.log(...langs);

const langs2 = ["Javascript", "C#", ...langs];

console.log(...langs2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...numbers2] = numbers;

console.log(numbers2);

const addNumbers = (a, b, c) => a + b + c;

console.log(addNumbers(...numbers));
