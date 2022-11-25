let sum = "";
let operator = document.getElementById("butt");

function addToSum(operator){
document.getElementById("output").innerHTML += operator
};

function evaluateSum() {
sum = eval(sum);
document.getElementById("output").innerHTML = operator;
}

function clearSum() {
sum = "";
document.getElementById("output").innerHTML = operator;
}
