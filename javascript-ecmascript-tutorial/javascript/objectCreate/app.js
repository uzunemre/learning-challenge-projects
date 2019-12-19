const obj = {
    test1: function () {
        console.log("Test 1");
    },
    test2: function () {
        console.log("Test 2");
    }
};

console.log(obj);

const emp = Object.create(obj);
console.log(emp);

function Person() {

}

Person.prototype.test1 = function () {
    console.log("Test 1");
};

Person.prototype.test2 = function () {
    console.log("Test 2");
};

const person = new Person();
console.log(person);

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
const employee = new Employee("Mustafa", 25);
console.log(employee);
employee.test1();

