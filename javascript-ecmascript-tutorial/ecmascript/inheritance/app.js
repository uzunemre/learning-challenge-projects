class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim: " + this.name + " Yaş" + this.age);
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    showInfos() {//Overriding
        console.log("İsim: " + this.name + " Yaş" + this.age + "Maaş :" + this.salary);
    }

}

const emp = new Employee("Emre", 28, 2000);
console.log(emp);