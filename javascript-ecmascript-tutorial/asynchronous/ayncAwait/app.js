// aync anahtarı, promise döneceğini belirtir
async function test1(data) {
    return data; // new Promise(resolve,reject) otomatik olarak bu formata çevirir yazılmazsa
}

//test1("test1").then(response => console.log(response));

async function test2(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 5000)
    });
    let response = await promise; // 5 saniye bekleyecek, await sadece aync fonksiyonlarda çalışır
    console.log(response);
    console.log("test2'den sonra çalışır");
}

//test2("test2");

async function testData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve(data);
            } else {
                reject(new Error("Lütfen string bir değer girin"));
            }
        }, 5000);
    });
    return await promise;
}

//testData(5).then(data => console.log(data)).catch(err => console.log(err));

async function getCurrency(url) {
    const response = await fetch(url); // Response Object
    return await response.json(); // Json Object
}

getCurrency("https://api.exchangeratesapi.io/latest").then(response => console.log(response));