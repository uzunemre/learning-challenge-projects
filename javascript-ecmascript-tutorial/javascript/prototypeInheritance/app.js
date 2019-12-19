function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("İsim: " + this.name + " Yaş: " + this.age);
};

const person = new Person("Mustafa", 25);
console.log(person);

function Employee(name, age, salary) {
    //this.name = name;
    //this.age = age;
    Person.call(this, name, age);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
const emp = new Employee("Mustafa", 25, 4000);
emp.showInfos();
