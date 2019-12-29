import {Request} from "./request";
import {UI} from "./ui";

const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();


eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
}

function getAllEmployees() {
    request.get()
        .then(employees => {
            ui.addAllEmployeeToUI(employees);
        })
        .catch(err => console.log(err));
}

function addEmployee(e) {
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === "" || employeeDepartment === "" || employeeSalary.value === "") {
        alert("Lütfen tüm alanları doldurun");
    } else {
        request.post({name: employeeName, department: employeeDepartment, salary: Number(employeeSalary)})
            .then(employee => {
                ui.addEmployeeToUI(employee);
            })
            .catch(error => console.log(error))
    }
    ui.clearInputs();
    e.preventDefault();
}



