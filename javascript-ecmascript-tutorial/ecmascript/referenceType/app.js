let a = "Mustafa";
let b = "Mustafa";

// value ve tip kontrolü yapılır
if (a === b) {
    console.log("eşit");
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

// referans kontrolü olduğundna dolayı if bloğu içine girmez
if (array1 === array2) {
    console.log("Eşit");
}

const peson1 = {
    name: "Mustafa",
    age: 25
};

const person2 = {
    name: "Mustafa",
    age: 25
};

// referans kontrolü olduğundna dolayı if bloğu içine girmez
if (peson1 === person2) {
    console.log("persom1 ve person2 eşit");
}
