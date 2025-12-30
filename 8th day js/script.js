let num1 = 500;
let num2 = 500;

document.writeln(`<br> Initial Result: ${num1}`);

// +=
num1 += num2; // num1 = 500 + 500 = 1000
document.writeln(`<br> After += : ${num1}`);

// -=
num1 -= num2; // num1 = 1000 - 500 = 500
document.writeln(`<br> After -= : ${num1}`);

// *=
num1 *= num2; // num1 = 500 * 500 = 250000
document.writeln(`<br> After *= : ${num1}`);

// /=
num1 /= num2; // num1 = 250000 / 500 = 500
document.writeln(`<br> After /= : ${num1}`);

// Comparison
document.writeln(`<br> num1 == num2 : ${num1 == num2}`);
document.writeln(`<br> num1 != num2 : ${num1 != num2}`);
document.writeln(`<br> num1 > num2 : ${num1 > num2}`);
document.writeln(`<br> num1 < num2 : ${num1 < num2}`);

let num3 = 501;
let num4 = "500";

document.writeln(`<br> num3 == num4 : ${num3 == num4}`);  // loose compare
document.writeln(`<br> num3 === num4 : ${num3 === num4}`); // strict compare
document.writeln(`<br> num3 !== num4 : ${num3 !== num4}`);

// Logical (AND)
document.writeln(`<br> Logical AND : ${num1 == num2 && num2 == num3}`);

// Ternary Operator
let age = 18;
document.writeln(`<br> Voting Check : ${age >= 18 ? "You Can Vote" : "You Can't Vote"}`);
