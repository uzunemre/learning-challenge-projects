// 2 saniye sonra bir kere çalışacak
setTimeout(function () {
    console.log("Merhaba")
}, 2000);


let i = 0;
// her bir saniyede çalışacak
let value = setInterval(function () {
    i++;
    console.log("Sayı", i);
}, 1000);

document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
});
