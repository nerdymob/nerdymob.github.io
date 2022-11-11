let person = [];
let salaries = [];

document.add-salaries.focus(); 

function addSalary() {
    let dropdownMenu = document.getElementById("employee_name");
    let name = dropdownMenu.options[dropdownMenu.selectedIndex].innerHTML;
    let sal = parseFloat(prompt("Please enter their salary."));

    if (isNaN(sal)) {
        alert("Please enter a valid number without a $");
    } else {
       person.push(name);
       salaries.push(sal); 
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
    let salariesTable = document.getElementById('data');

    while (salariesTable.rows.length > 1){
       salariesTable.deleteRow(1);
    }

    for (let i = 0; i < person.length; i++) {
        let row = salariesTable.insertRow(salariesTable.rows.length);
        let personCell = row.insertCell(0);
        let salariesCell = row.insertCell(1);
        personCell.innerHTML = person[i];
        salariesCell.innerHTML = salaries[i];
    }
}
