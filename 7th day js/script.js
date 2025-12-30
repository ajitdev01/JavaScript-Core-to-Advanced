let num1 = 20;
let num2 = 4;

// divide 
let div = num1 / num2;
document.writeln(`<br> Division result = ${div}`);

// remainder 
let rem = num1 % num2;
document.writeln(`<br> Remainder result = ${rem}`);

// exponents 
let expo = num1 ** num2;
document.writeln(`<br> Exponent result = ${expo}`);

// increment 
let inc = num1++;  // post-increment
document.writeln(`<br> Increment result (before increment) = ${inc}`);
document.writeln(`<br> num1 after increment = ${num1}`);

// decrement 
let dec = --num2;  // pre-decrement
document.writeln(`<br> Decrement result = ${dec}`);
document.writeln(`<br> num2 after decrement = ${num2}`);
