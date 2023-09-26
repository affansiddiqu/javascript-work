var a = prompt('enter number1');
var b = prompt('enter number2');
var c = (a*b);

(alert(c));

if( c % 2 == 0  ){

    document.write('The number is even');
}

else{
    document.write('The number is odd');
}


temp = a;
a = b;
b = temp;

(alert)(`The value of a after swapping: ${a}`);
(alert)(`The value of b after swapping: ${b}`);
