let myMap = new Map();
console.log(typeof myMap);

const key1 = "Mustafa";
const key2 = {a: 10, b: 20};
const key3 = () => 2;

myMap.set(key1, "String Değer");
myMap.set(key2, "Object Literal Değer");
myMap.set(key3, "Function Değer");

console.log(myMap.get(key1));
console.log(myMap);

myMap.forEach(function (value, key) {
    console.log(key, value);
});

for (let [key, value] of myMap) {
    console.log(key, value);
}

for (let value of myMap) {
    console.log(value);
}
