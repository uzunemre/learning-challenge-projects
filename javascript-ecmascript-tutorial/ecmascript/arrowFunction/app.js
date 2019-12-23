const hello1 = firstName => console.log("Merhaba", firstName);
const hello2 = (firstName, lastName) => console.log("Merhaba", firstName, lastName);

hello1("Emre", "Uzun");

const cube1 = function (x) {
    return x * x * x;
};

console.log(cube1(4)); // without arrow function

const cube2 = x => x * x * x;

console.log(cube2(5)); // with arrrow function

const person = {
    age: 25,
    /*tellAge: function () {
        console.log(this);
    }.bind(this)
    // buradaki bind window objesi*/

    // arrow function yapılınca yukarıdaki hibi this objesini bind eder
    tellAge: () => {
        console.log(this); // window
    }

};

person.tellAge();
