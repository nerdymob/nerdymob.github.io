var prevCalc = 0;
var calc = "";

window.onload = function() {

    document.getElementById("button1").onclick = showNum;
    document.getElementById("button2").onclick = showNum;
    document.getElementById("button3").onclick = showNum;
    document.getElementById("button4").onclick = showNum;
    document.getElementById("button5").onclick = showNum;
    document.getElementById("button6").onclick = showNum;
    document.getElementById("button7").onclick = showNum;
    document.getElementById("button8").onclick = showNum;
    document.getElementById("button9").onclick = showNum;
    document.getElementById("button0").onclick = showNum;

    document.getElementById("buttonSubtract").onclick = subtract;
    document.getElementById("buttonAdd").onclick = add;
    document.getElementById("buttonMultiply").onclick = time;
    document.getElementById("buttonDivide").onclick = divide;

    document.getElementById("buttonSquared").onclick = power2;

    document.getElementById("buttonDecimal").onclick = showNum;

    document.getElementById("buttonClear").onclick = clear;
    document.getElementById("buttonCalculate").onclick = calculate;
}

function showNum() {
    document.frmCalc.txtNumber.value += this.value;
}
    
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}

function time() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiple";
    }
}

function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num = Math.pow(num,2);
        document.frmCalc.txtNumber.value = num;
    }
}
       
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add") {
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc == "Subtract") {
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc == "Multiple") {
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc == "Divide") {
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            } else if (calc == "Power") {
                var total = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total;
            }
        }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}
