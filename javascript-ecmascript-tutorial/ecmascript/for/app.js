const person = {
    name: "Mustafa Murat",
    age: 25,
    salary: 3000
};

const langs = ["Python", "Java", "C++", "Php"];

const name = "Mustafa";

for (let prop in person) {
    console.log(prop, person[prop]);
}

for (let index in langs) {
    console.log(index, langs[index]);
}

for (let index in name) {
    console.log(index, name[index]);
}

/*
hatalı işlem obje üzerinde gezilemez
for (let value of person) {
    console.log(value);
}*/

for (let value of langs) {
    console.log(value);
}
