function getData(data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof data === "string") {
                resolve(data);
            } else {
                reject(new Error("Lütfen string bir değer giriniz"));
            }
        }, 5000);
    });
}

getData("Merhaba").then(response => {
    // resolve olunca then fonksiyonu çalışıyor
    console.log("Gelen Değer " + response);
}).catch(err => {
    // reject olunca catch fonksiyonu çalışıyor
    console.error(err);
});

function addTwo(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === "number") {
            resolve(number + 2);
        } else {
            reject(new Error("Lütfen bir sayı girin"));
        }
    }, 3000);
}

// promise chain
// 1 tane catch ama birden fazla then kullanabiliriz.
addTwo(10).then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => {
    console.log(response2);
}).catch(err => console.log(err));