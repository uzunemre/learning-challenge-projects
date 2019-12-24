// aync anahtarı, promise döneceğini belirtir
async function test1(data) {
    return data; // new Promise(resolve,reject) otomatik olarak bu formata çevirir yazılmazsa
}

test1("test1").then(response => console.log(response));

async function test2(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir")
        }, 5000)
    });
    let response = await promise; // 5 saniye bekleyecek, await sadece aync fonksiyonlarda çalışır
    console.log(response);
    console.log("deneme");
}

test2("test2");
