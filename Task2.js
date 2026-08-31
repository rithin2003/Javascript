// Task 1: var, let, const

// 1. Create three variables
var studentName = "Rithin";
let studentAge = 23;
const collegeName = "MITM";
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);


// 2. Change the var value
studentName = "Rahul";
console.log("Changed Student Name:", studentName);


// 3. Change the let value
studentAge = 20;
console.log("Changed Student Age:", studentAge);


// 4. Try changing the const value
// Error


// 5. Try redeclaring the var variable
var studentName = "Rithin";
console.log("Redeclared Student Name:", studentName);


// 6. Try redeclaring the let variable
// Error



// Task 2 — User Information
var userName = prompt("Enter your name:");
var userAge = prompt("Enter your age:");
var userCity = prompt("Enter your city:");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("City:", userCity);



// Task 3 — Welcome Message
var welcome = prompt("Enter your name:");

alert("Welcome " + welcome + "!");



// Task 4 — Age Calculator
var birthYear = prompt("Enter your birth year:");

var currentYear = 2026;
var Age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", Age);



//Task 5 — Identify Data Types
var text = "Hello";
var integer = 100;
var decimal = 25.5;
var t = true;
var f = false;
var undefined = undefined;
var n = null;

console.log("Hello--", typeof text);
console.log("100--", typeof integer);
console.log("25.5--", typeof decimal);
console.log("true--", typeof t);
console.log("false--", typeof f);
console.log("undefined--", typeof undefined);
console.log("null--", typeof n);



//Task 6 — Student Data
var studentData = {
    name: "Milind",
    age: 22,
    city: "Mysore",
    qualification: "B.E CSE",
    isStudent: true
};


console.log("Complete Object:", studentData);
console.log("Name:", studentData.name);
console.log("Age:", studentData.age);
console.log("Qualification:", studentData.qualification);
console.log("isStudent:", studentData.isStudent);



//Task 7 — Fruit Array
var fruitList = ["Watermelon","Apple","Orange","Mango","Lichi","Kiwi"];

console.log("First Fruit:", fruitList[0]);
console.log("Second Fruit:", fruitList[1]);
console.log("Last Fruit:", fruitList[fruitList.length - 1]);
console.log("Total Number of Fruits:", fruitList.length);



//Task 8 — Basic Calculator
let a = 8;
let b = 7;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);



//Task 9 — Shopping Bill
var shirtPrice = 999;
var pantPrice = 1499;
var shoesPrice = 1999;

var totalPrice = shirtPrice + pantPrice + shoesPrice;

console.log("Total =", totalPrice);



//Task 10 — Simple Marks Calculation
var tamil = 80;
var english = 75;
var maths = 90;

var totalMarks = tamil + english + maths;
var averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);



//Task 11 — Post Increment
let postA = 10;
let postB = postA++;

console.log(postA);
console.log(postB);
//Expected Output: postA = 11, postB = 10



//Task 12 — Pre Increment
let preA = 10;
let preB = ++preA;  

console.log(preA);
console.log(preB);
//Expected Output: preA = 11, preB = 11     



//Task 13 — Post Decrement
let postC = 20;
let postD = postC--;

console.log(postC);
console.log(postD);
//Expected Output: postC = 19, postD = 20  



//Task 14 — Pre Decrement
let preC = 20;
let preD = --preC;            

console.log(preC);
console.log(preD);
//Expected Output: preC = 19, preD = 19



//Task 15 — Find the Final Values
let finalValueA = 5;
let finalValueB = finalValueA++;
let finalValueC = ++finalValueA;
let finalValueD = finalValueB--;

console.log(finalValueA);
console.log(finalValueB);
console.log(finalValueC);
console.log(finalValueD);
// Output: finalValueA = 7, finalValueB = 4, finalValueC = 7, finalValueD = 5



//Task 16 — Assignment Operators
let assignmentNum = 10;
console.log("After += 5:", assignmentNum += 5);

assignmentNum = 10;
console.log("After -= 5:", assignmentNum -= 5);

assignmentNum = 10;
console.log("After *= 5:", assignmentNum *= 5);

assignmentNum = 10;
console.log("After /= 5:", assignmentNum /= 5);

assignmentNum = 10;
console.log("After %= 5:", assignmentNum %= 5);

assignmentNum = 10;
console.log("After **= 5:", assignmentNum **= 5);



//Task 17 — Mini Student Profile

var profileName = "Dhoni";
var profileAge = 7;
var profileCity = "Chennai";
var profileCollege = "CSK College";
var favoriteSubjects = ["JavaScript","Java","Python", "SQL","HTML"];


var studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: favoriteSubjects,
    isStudent: true
};


console.log("Student Name:", studentProfile.name);

console.log("Student Age:", studentProfile.age);

console.log("City:", studentProfile.city);

console.log("First Subject:", studentProfile.subjects[0]);

console.log("Last Subject:", studentProfile.subjects[studentProfile.subjects.length - 1]);

console.log("Total Subjects:", studentProfile.subjects.length);

console.log("Complete Object:", studentProfile);




//Final Challenge — User + Calculator

var FirstNumber = prompt("Enter the first number:");
var SecondNumber = prompt("Enter the second number:");


FirstNumber = Number(FirstNumber);
SecondNumber = Number(SecondNumber);


var addition = FirstNumber + SecondNumber;
var subtraction = FirstNumber - SecondNumber;
var multiplication = FirstNumber * SecondNumber;
var division = FirstNumber / SecondNumber;
var modulus = FirstNumber % SecondNumber;
var power = FirstNumber ** SecondNumber;


console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Power:", power);
