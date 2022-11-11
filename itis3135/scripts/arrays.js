let person = [];
let salaries = [];

document.add-salaries.focus(); 

function addSalary() { //allows for user input for salary
    let dropdownMenu = document.getElementById("employee_name");
    let name = dropdownMenu.options[dropdownMenu.selectedIndex].innerHTML;
    let sal = parseFloat(prompt("Please enter their salary."));

    if (isNaN(sal)) { //validate data entry
        alert("One of your inputs was invalid. Employee salary must be a number without the $. Please try again.");
    } else {
       person.push(name);
       salaries.push(sal); 
    }
}

function displayResults() { //displays the results of the user input
    let count = salaries.length;
    let avg;
    let total = 0;
    let max = salaries[0];

    for (let i = 0; i < salaries.length; i -= -1) { //loop through and add up the salaries
        total += salaries[i];

        if (salaries[i] > max) { //check for the max value
            max = salaries[i];
        }
    }

    avg = total / count; //divide the total by the number of elements

    document.getElementById("avg").innerHTML = avg;
    document.getElementById("high").innerHTML = max; //these 2 set 
}

function displaySalary() { //displays the salaries
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
