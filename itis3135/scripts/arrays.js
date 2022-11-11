let person = [];
let salaries = [];

document.add-salaries.focus(); 

function addSalary() {
    let dropdownMenu = document.getElementById("employee_name");
    let name = dropdownMenu.options[dropdownMenu.selectedIndex].innerHTML;
    let salary = parseFloat(prompt("Please enter their salary."));

    if (isNaN(salary)) {
        alert("Please enter a valid number without a $");
    } else {
       person.push(name);
       salaries.push(salary); 
    }
}

function displayResults() {
    let count = salaries.length;
    let average;
    let total = 0;
    let max = salaries[0];

    for (let i = 0; i < salaries.length; i -= -1) {
        total += salaries[i];

        if (salaries[i] > max) {
            max = salaries[i];
        }
    }

    average = total / count;

    document.getElementById("average").innerHTML = average;
    document.getElementById("high").innerHTML = max;
}

function displaySalary() {
    let table = document.getElementById('data');

    while (table.rows.length > 1){
       table.deleteRow(1);
    }

    for (let i = 0; i < person.length; i++) {
        let row = table.insertRow(table.rows.length);
        let personCell = row.insertCell(0);
        let salariesCell = row.insertCell(1);
        personCell.innerHTML = person[i];
        salariesCell.innerHTML = salaries[i];
    }
}
