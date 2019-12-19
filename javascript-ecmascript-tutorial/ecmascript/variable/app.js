
var test = 1;
var test = 2;
console.log(test);

//let deneme = 1; let kullanılınca değişken adı bir kere kullanılır
//let deneme = 2;
//console.log(deneme);


const name = "Emre";
console.log(name);

//name = "Mustafa"; tekrardan atama yapılamaz
//console.log(name);

/*const a;
a=10;
console.log(a);*/ //hatalı işlem a değişkeni oluşturulduğund ailk başta atama yapılması gerekiyor

const a = [1,2,3,4,5];
console.log(a);
// a = [1,2,3,4,5,6]; hatalı işlem yerni bir array oluşturuluyor ve referansı değiştiriliyor

a.push(6); // referans aynı olduğu için hata yok
console.log(a);
