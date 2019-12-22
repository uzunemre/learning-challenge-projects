class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos() {
        console.log("İsim:" + this.name + "Yaş: " + this.age + "Maaş:" + this.salary);
    }
}

// ecmacript ile class kullanabiliyoruz.
const emp = new Employee("Emre","25",1000);

console.log(emp);