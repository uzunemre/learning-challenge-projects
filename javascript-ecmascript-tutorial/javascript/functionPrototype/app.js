const obj1 = {
    number1: 10,
    number2: 20
};

function addNumbers(number3, number4) {
    console.log(this.number1 + this.number2 + number3 + number4);
}

//addNumbers(100,200);
addNumbers.call(obj1, 100, 200); // obj1 gönderildiği için addNumbers içinde this yazıldığında obj1'e ulaşılır

addNumbers.apply(obj1, [100, 200]); // call dan farklı olarak dizi kabul eder

function getNumbersTotal(number3, number4) {
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1); // bind kullanıldığında geriye foknskiyon döndürülür

console.log(copyFunc1(100, 200));
