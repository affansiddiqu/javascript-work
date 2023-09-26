var surname = prompt('enter your surname');
var name = prompt('enter your name');
var age = prompt('enter your age');
var number1 = prompt('enter number1');
var number2 = prompt('enter number2');
var number3 = prompt('enter number3');
var number4 = prompt('enter number4');
var number5 = prompt('enter number5');
var obtained = parseInt (number1) + parseInt (number2) + parseInt (number3) + parseInt (number4) + parseInt (number5);
var per = (obtained*100) / 500;
var percantage = per.toFixed (0);

(alert(surname));
(alert(name));
(alert(age));
(alert(number1));
(alert(number2));
(alert(number3));
(alert(number4));
(alert(number5));

var no1 = prompt('enter no1');
var no2 = prompt('enter no2');
var no3 = prompt('enter no3');

console.log(no1);
console.log(no2);
console.log(no3);


if(percantage<50){

    document.write('you are fail');
}

else{

    document.write('you are pass');
}