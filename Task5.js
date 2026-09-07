// Variables & Data Types (Questions 1-8)

// Q1: What is the difference between var, let, and const?
// Answer: var is function-scoped and can be redeclared and reassigned.
// let is block-scoped and can be reassigned but cannot be redeclared.
// const is block-scoped and cannot be reassigned or redeclared.



// Q2: Can you re-declare a variable with var? What about let and const?
// Answer: Yes, var can be redeclared.
// let and const cannot be redeclared in the same scope.



// Q3: What is the output of this code?
// Answer: The code gives an error because a const variable cannot be reassigned.
// const z = 15;
// z = 30;
// To get the output, comment the above reassignment.
var x = 5;
let y = 10;
const z = 15;
x = 20;
y = 25;
// z = 30;
console.log(x, y, z);
// Output: 20 25 15



// Q4: What is the difference between declaring and initializing a variable?
// Answer: Declaration means creating a variable without assigning a value.
// Initialization means assigning a value to a variable.
let studentName;
studentName = "John";



// Q5: What will be the output?
// Answer: undefined, because the variable is declared but no value is assigned.
let a;
console.log(a);
// Output: undefined



// Q6: What is hoisting? Give an example.
// Answer: Hoisting is JavaScript's behavior of processing variable and function declarations before executing the code.
// var variables are hoisted and have an initial value of undefined.
console.log(hoistedVariable);
var hoistedVariable = 10;
// Output: undefined



// Q7: What is the difference between null and undefined?
// Answer: undefined means a variable is declared but no value is assigned.
// null means an intentional absence of a value.
let value1;
let value2 = null;
console.log(value1);
console.log(value2);
// Output:
// undefined
// null



// Q8: What will be the output?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
// Output:
// object
// undefined
// object
// object



// Operators (Questions 9-14)

// Q9: What is the difference between == and ===?
// Answer: == compares values after type conversion.
// === compares both value and data type without type conversion.
console.log(5 == "5");
console.log(5 === "5");
// Output:
// true
// false



// Q10: What is the difference between ++i and i++?
// Answer: ++i is pre-increment. It increases the value first and then returns it.
// i++ is post-increment. It returns the value first and then increases it.
let i = 5;
console.log(++i);
let j = 5;
console.log(j++);
console.log(j);
// Output:
// 6
// 5
// 6



// Q11: What will be the output?
// Answer:
// 10 + "5" → "105"
// 10 - "5" → 5
// 10 * "5" → 50
// 10 / "5" → 2
let num1 = 10;
let num2 = "5";
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// Output:
// 105
// 5
// 50
// 2



// Q12: What are logical operators? Explain with examples.
// Answer: Logical operators are used to combine or reverse conditions.
// && means AND and returns true when both conditions are true.
// || means OR and returns true when at least one condition is true.
// ! means NOT and reverses the result.
console.log(true && true);
console.log(true || false);
console.log(!true);
// Output:
// true
// true
// false



// Q13: What will be the output?
// Answer:
// true && true → true
// false || true → true
// !(true) → false
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));
// Output:
// true
// true
// false



// Q14: What is the ternary operator? Give an example.
// Answer: The ternary operator is a short form of if-else.
// Syntax: condition ? valueIfTrue : valueIfFalse;
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
// Output: Adult



// Type Casting (Questions 15-17)

// Q15: What is the difference between implicit and explicit type casting?
// Answer: Implicit type casting is automatically performed by JavaScript.
// Explicit type casting is manually performed by the programmer.
console.log("10" - 5);
console.log(Number("10") + 5);
// Output:
// 5
// 15



// Q16: What will be the output?
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
// Output:
// 123
// NaN
// 1
// 0
// false
// true



// Q17: What is NaN? Give an example.
// Answer: NaN means Not a Number. It occurs when an operation cannot produce a valid number.
console.log("hello" * 5);
// Output: NaN



// Conditional Statements (Questions 18-21)

// Q18: What is the difference between if-else and switch?
// Answer: if-else is used for conditions, comparisons, ranges, and complex expressions.
// switch is mainly used to compare one expression with multiple fixed values.

// if-else

// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// switch

// let day = 2;
// switch(day) {
//     case 1:
//         console.log("Saturday");
//         break;

//     case 2:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day");
// }


// Q19: What will be the output?
let age2 = 20;
if(age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Output: Adult



// Q20: What is nested if? Give an example.
// Answer: A nested if is an if statement placed inside another if statement.
let age3 = 20;
let hasID = true;
if(age3 >= 18) {
    if(hasID) {
        console.log("Eligible");
    } else {
        console.log("ID Required");
    }
} else {
    console.log("Not Eligible");
}
// Output: Eligible



// Q21: Write a program to check if a number is even or odd using ternary operator.
let number = 7;
let evenOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOdd);
// Output: Odd



// Loops (Questions 22-25)

// Q22: What is the difference between while and do-while?
// Answer: while checks the condition before executing the loop.
// do-while executes the loop at least once before checking the condition.

// while loop

//let i = 1;

// while(i <= 3) {
//     console.log(i);
//     i++;
// }

// do-while loop

// let i = 10;

// do {
//     console.log(i);
// } 
//while (i < 5);



// Q23: What will be the output?
for(let k = 1; k <= 5; k++) {
    console.log(k);
}
// Output:
// 1
// 2
// 3
// 4
// 5



// Q24: What is the difference between for-of and for-in?
// Answer: for-of is used to iterate over the values of an iterable such as an array.
// for-in is used to iterate over the keys or indexes of an object or array.
let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Mango

for(let index in fruits) {
    console.log(index);
}
// Output:
// 0
// 1
// 2



// Q25: Write a program to find sum of numbers from 1 to 100.
let sum = 0;
for(let n = 1; n <= 100; n++) {
    sum = sum + n;
}
console.log(sum);
// Output: 5050


// Arrays (Questions 26-27)

// Q26: What is the difference between slice and splice?
// Answer: slice() returns a portion of an array without changing the original array.
// splice() adds, removes, or replaces elements and changes the original array.
let array1 = [1, 2, 3, 4, 5];
console.log(array1.slice(1, 4));
// Output: [2, 3, 4]

let array2 = [1, 2, 3, 4, 5];
array2.splice(1, 2);
console.log(array2);
// Output: [1, 4, 5]



// Q27: What will be the output?
// Answer: push adds 4, pop removes 4, unshift adds 0, and shift removes 0.
// The final array is [1, 2, 3].
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);
// Output: [1, 2, 3]


// Functions (Questions 28-30)

// Q28: What is the difference between function declaration and function expression?
// Answer: A function declaration is created using the function keyword and is hoisted.
// A function expression stores a function inside a variable and cannot be called before initialization.

// Function Declaration
function greet1() {
    return "Hello";
}       
greet1(); // Can be called before declaration

// Function Expression  
let greet2 = function() {
    return "Hello";
}   
greet2(); // Cannot be called before initialization



// Q29: What is an arrow function? Give an example.
// Answer: An arrow function is a shorter syntax for writing a function.
let add = (a, b) => a + b;
console.log(add(10, 20));
// Output: 30



// Q30: What will be the output?
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
// Output: Hello