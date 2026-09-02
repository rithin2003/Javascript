//Task 1 — Variables

var name = "Rithin";
let age = 23;
const city = "Bangalore";
const college = "MITM";

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("College:", college);

// Change var value
name = "Kumar";
console.log("Changed var value:", name);

// Change let value
age = 22;
console.log("Changed let value:", age);

// Try changing const value
// city = "Mysore";
// Error

// Try redeclaring variables

// var can be redeclared
var name = "Rahul";
console.log("Redeclared var:", name);

// let cannot be redeclared
// let age = 25;
// Error

// const cannot be redeclared
// const city = "Mumbai";
// Error



//Task 2 — Printing Statements

// console.log()
console.log("Hello JavaScript");

// alert()
alert("Welcome to JavaScript");

// confirm()
confirm("Do you like JavaScript?");

// prompt()
let userName = prompt("Enter your name:");
console.log("User Name:", userName);

// document.writeln()
document.writeln("<h2>Hello from JavaScript</h2>");



// Task 3 — User Details

let studentName = prompt("Enter your name:");
let studentAge = prompt("Enter your age:");
let studentCity = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");

console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("City:", studentCity);
console.log("Qualification:", qualification);



// Task 4 — Find Data Types

let language = "JavaScript";
let number = 76;
let decimal = 0.08;
let valueTrue = true;
let valueFalse = false;
let valueUndefined;
let valueNull = null;

console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(valueTrue, typeof valueTrue);
console.log(valueFalse, typeof valueFalse);
console.log(valueUndefined, typeof valueUndefined);
console.log(valueNull, typeof valueNull);



// Task 5 — Student Array

let students = ["Rithin", "Nishanth", "Milind", "Rohith", "Rahul"];

console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);



// Task 6 — Employee Object

let employee = {
    name: "Rithin",
    age: 23,
    role: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.Tech", "M.Tech"]
};

console.log("Employee Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log("Last Qualification:",employee.qualification[employee.qualification.length - 1]);
console.log("Working Status:", employee.isWorking);



// Task 7 — Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);



// Task 8 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Total Price:", totalPrice);



// Task 9 — Increment & Decrement

// A — Post Increment
let a1 = 10;
let b1 = a1++;

console.log(a1); // 11
console.log(b1); // 10


// B — Pre Increment
let a2 = 10;
let b2 = ++a2;

console.log(a2); // 11
console.log(b2); // 11


// C — Post Decrement
let a3 = 10;
let b3 = a3--;

console.log(a3); // 9
console.log(b3); // 10


// D — Pre Decrement
let a4 = 10;
let b4 = --a4;

console.log(a4); // 9
console.log(b4); // 9



// Task 10 — Assignment Operators

// +=
let num1 = 10;
num1 += 5;
console.log("num += 5:", num1);


// -=
let num2 = 10;
num2 -= 3;
console.log("num -= 3:", num2);


// *=
let num3 = 10;
num3 *= 2;
console.log("num *= 2:", num3);


// /=
let num4 = 10;
num4 /= 4;
console.log("num /= 4:", num4);


// %=
let num5 = 10;
num5 %= 3;
console.log("num %= 3:", num5);


// **=
let num6 = 10;
num6 **= 2;
console.log("num **= 2:", num6);



// Task 11 — Find Output

console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(10 <= 9);      // false

console.log(5 == "5");     // true
console.log(5 === "5");    // false

console.log(10 != "10");   // false
console.log(10 !== "10");  // true



// Task 12 — AND Operator

console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && true);    // false
console.log(false && false);   // false



// Task 13 — OR Operator

console.log(true || true);     // true
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false



// Task 14 — NOT Operator

console.log(!true);             // false
console.log(!false);            // true
console.log(!(5 > 10));         // true
console.log(!(10 > 5));         // false



// Task 15 — Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);
// false

console.log(10 > 5 && 8 < 12 || 4 === "4");
// true

console.log(7 === 7 && 10 != "10" || 5 >= 5);
// true

console.log(15 < 10 || 20 > 15 && 5 == "5");
// true



// Task 16 — Voting

let votingAge = 20;

let votingResult = votingAge >= 18 ? "Eligible to vote" : "Not eligible";

console.log(votingResult);



// Task 17 — Password

let password = true;

let loginResult = password ? "Login successful" : "Wrong password";

console.log(loginResult);



// Task 18 — User Introduction

let name2 = "Naveen";
let age2 = 25;
let city2 = "Trichy";

// Using +
console.log(
    "My name is " + name2 + ". I am " + age2 + " years old. I live in " + city2 + ".");

// Using Template Literals
console.log(`My name is ${name2}. I am ${age2} years old. I live in ${city2}.`);



// Task 19 — String Conversion

let stringNumber = String(100);
let stringTrue = String(true);
let stringUndefined = String(undefined);
let stringNull = String(null);
let stringArray = String([1, 2]);

console.log(stringNumber, typeof stringNumber);
console.log(stringTrue, typeof stringTrue);
console.log(stringUndefined, typeof stringUndefined);
console.log(stringNull, typeof stringNull);
console.log(stringArray, typeof stringArray);



// Task 20 — Number Conversion

console.log(Number());           // 0
console.log(Number(""));         // 0
console.log(Number("123"));      // 123
console.log(Number("a1"));       // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(undefined));  // NaN
console.log(Number(null));       // 0



// Task 21 — Boolean Conversion

console.log(Boolean());          // false
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean(123));       // true
console.log(Boolean(true));      // true
console.log(Boolean(false));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true



// Task 22 — Voting Eligibility

let voteAge = Number(prompt("Enter your age:"));

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}



// Task 23 — Positive or Negative

let checkNumber = Number(prompt("Enter a number:"));

if (checkNumber > 0) {
    console.log("Positive");
} else if (checkNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



// Task 24 — Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks <= 89) {
    console.log("B Grade");
} else if (marks >= 70 && marks <= 79) {
    console.log("C Grade");
} else if (marks >= 60 && marks <= 69) {
    console.log("D Grade");
} else if (marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}



// Task 25 — Job Eligibility

let jobAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (jobAge >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because your weight is below 60 kg");
        }
    } else {
        console.log("You are not selected because your height is below 160 cm");
    }
} else {
    console.log("You are not selected because your age is below 18");
}



// Task 26 — Traffic Light

let trafficColor = prompt("Enter traffic light color:");

switch (trafficColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}



// Task 27 — Day

let day = Number(prompt("Enter day number (1-7):"));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}




// Task 28 — Student Result System

// Step 1 — Get user details

let resultName = prompt("Enter your name:");
let resultAge = Number(prompt("Enter your age:"));
let resultCity = prompt("Enter your city:");


// Step 2 — Get marks

let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));


// Step 3 — Calculate Total and Average

let total = tamil + english + maths;
let average = total / 3;


// Step 4 — Check Grade

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}


// Step 5 — Check Voting Eligibility

let voting;

if (resultAge >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}


// Step 6 — Display Result

console.log(`
Name: ${resultName}
Age: ${resultAge}
City: ${resultCity}
Total: ${total}
Average: ${average}
Grade: ${grade}
Voting: ${voting}`);