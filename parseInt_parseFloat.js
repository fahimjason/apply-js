var number1 = "25";
var number2 = "15.5";

number2 = parseFloat(number2);
console.log(number2);


var number3 = "10.5";
number3 = parseInt(number3);
console.log(number3);


// toFixed()
var number4 = 0.1;
var number5 = 0.2;

var total = number4 + number5;
total = total.toFixed(1);
console.log(total);
