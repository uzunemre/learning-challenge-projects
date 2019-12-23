document.getElementById("btn").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText;
        }
    };
    xhr.open("GET", "example.txt", true);
    xhr.send();
});

document.getElementById("btn2").addEventListener("click", function () {
    getAllEmployees();
});

function getAllEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employee.json");
    xhr.onload = function () {
        if (this.status === 200) {
            const employees = JSON.parse(this.responseText);
            employees.forEach(function (employee) {
                console.log(employee.name + " " + employee.department + " " + employee.salary);
            });
        }
    };
    xhr.send();
}
