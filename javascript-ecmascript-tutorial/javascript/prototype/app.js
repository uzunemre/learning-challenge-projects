function Employee(name, age) {
    this.name = name;
    this.age = age;
    /*this.showInfos = function () { her employee oluştuğunda belleğe gereksiz yere ekleme yapar. bu yüzden aşağıda Employee.prototype olarak ekleme yapılacak
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    };*/
    this.toString = function () {
        console.log("Bu bir Employee objesi");
    }
}

Employee.prototype.showInfos = function () {
    console.log("İsim: " + this.name + "Yaş: " + this.age);
};

const emp1 = new Employee("Mustafa", 25);
//console.log(emp1);

// prototype objeler arası katılım yapmayı sağlar. her bir objemiz javascripteki Object prototipini miras alır

//console.log(emp1.toString()); // Employee functionun içindeki toString fonksiyonunu çalıştırır.



console.log(emp1);
