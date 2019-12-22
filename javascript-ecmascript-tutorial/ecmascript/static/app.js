class Matematik {

    sqrt(x) {
        console.log(Math.sqrt(x));
    }

    static cube(x) {
        console.log(x * x * x);
    }
}

Matematik.cube(3);
//Matematik.sqrt(3); // statik olmadığından erişlemez. sqrt is not a function hatası verir.

const math = new Matematik();
math.cube(7); // obje üzerinden statik methoda erişilemez. nesnenin prototipine yazılmadığı için