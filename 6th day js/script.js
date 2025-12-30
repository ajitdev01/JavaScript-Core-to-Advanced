let num1 = 1500;
let num2 = 400;

// addition
let add = num1 + num2;

// long way
document.writeln("Number 1 = ");
document.writeln(num1);
document.writeln("<br>");

document.writeln("Number 2 = ");
document.writeln(num2);
document.writeln("<br>");

document.writeln("Sum of both numbers = ");
document.writeln(add);
document.writeln("<br><br>");

// short way 1
document.writeln("Number 1 = " + num1 + ", Number 2 = " + num2 + ", Sum = " + add);
document.writeln("<br><br>");

// short way using template literals
document.writeln(`Number 1 = ${num1}, Number 2 = ${num2}, Sum = ${add}`);
document.writeln("<br><br>");

// subtraction
let sub = num1 - num2;
document.writeln(`Number 1 = ${num1}, Number 2 = ${num2}, Sub = ${sub}`);
document.writeln("<br><br>");

// multiplication
let mul = num1 * num2;
document.writeln(`Number 1 = ${num1}, Number 2 = ${num2}, Mul = ${mul}`);
document.writeln("<br><br>");

// division
let div = num1 / num2;
document.writeln(`Number 1 = ${num1}, Number 2 = ${num2}, Div = ${div}`);
document.writeln("<br><br>");
