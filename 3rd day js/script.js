var number = 100;
console.log(number);

let numberl = 200;
console.log(numberl);

const numberc = 300;
console.log(numberc);

// -----------------------
// var → Global/function scope, reassign + redeclare allowed
// -----------------------

var number = 100;
console.log(number); // 100

// Redeclaration allowed
var number = 500;
console.log(number); // 500

// Reassign allowed
number = 800;
console.log(number); // 800

// -----------------------
// let → Block scope, reassign allowed, NO redeclare
// -----------------------

console.log("Start Let Methods");
let numberlet = 300;
console.log(numberlet); // 300

// Reassign allowed
numberlet = 900;
console.log(numberlet); // 900

// Redeclaration NOT allowed → ❌
// let numberlet = 500; // ERROR

// -----------------------
// const → Block scope, NO reassign, NO redeclare
// -----------------------

console.log("Start Const");
const numberconst = 300;
console.log(numberconst); // 300

// ❌ const cannot be reassigned
// numberconst = 600; // ERROR

// ❌ const cannot be redeclared
// const numberconst = 700; // ERROR
