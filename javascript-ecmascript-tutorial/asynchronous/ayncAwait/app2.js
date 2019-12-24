class Request {

    async get(url) {
        const response = await fetch(url);
        return await response.json();
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
        });
        return await response.json();
    }

}

const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => {
        console.log(albums);
    })
    .catch(err => console.log(err));

const request2 = new Request();
request2.post("https://jsonplaceholder.typicode.com/albums", {userId: 1, title: "Thriller"})
    .then(newAlbum => {
        console.log(newAlbum);
    })
    .catch(err => console.log(err));

