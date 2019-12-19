console.log(window);
console.log(this); // global scope da en temel obje windows objesidir

const emp1 = { // Object literal
    name: "Mustafa",
    age: 25,
    showInfos: function () {
        console.log("Bilgiler gösteriliyor");
    }
};

const emp2 = {
    name: "Ahmet",
    age: 25
};

emp1.salary = 4000;
emp1.showInfos();
console.log(emp1);


function Employee() {
    this.name = "Mustafa"
}

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log(this);
}

const employee = new Employee(); // en son employee fonksiyonunu çağırırır. parametre yollanmadığı için name,age,salary değerleri undefined olur
console.log(employee); // undefined

const employee1 = new Employee("Mustafa", 25, 4000);
const employee2 = new Employee("Ahmet", 25, 4000);;
