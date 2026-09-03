// Task 1 — For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2 — Reverse Number

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Task 3 — Even Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// Task 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// Task 5 — Multiplication Table

let tableNumber = Number(prompt("Enter a number for Multiplication Table"));

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));

}


// While Loop
// Task 6 — Countdown

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Task 7 — Sum of Numbers

let number = 1;
let sum = 0;

while (number <= 10) {
    sum = sum + number;
    number++;
}
console.log("Sum:", sum);



// Task 8 — Print Numbers

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// Task 9 — Do While Understanding

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

// Output:
// 10

// Why?
// The dowhile loop executes the code at least one time before checking the condition.
// First:
// a = 10
// console.log(a) -> 10
// Then:
// a++ -> 11
// Condition:
// 11 <= 5 -> false
// So the loop stops.



// Task 10 — String Characters

let name = "javascript";

for (let character of name) {
    console.log(character);
}


// Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


// Task 12 — Student Names

let students = ["Arun","Priya","Rithin","Milind","Rohith"];

for (let student of students) {
    console.log("Student:", student);
}



// Task 13 — Employee Object

let employee = {
    name: "Rithin",
    age: 23,
    role: "Developer",
    city: "Mysore"
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// Task 14 — Product Object

let product = {
    productName: "Mobile",
    price: 50000,
    brand: "Oppo",
    category: "Electronics",
    stock: 8
};

for (let key in product) {
    console.log(key, product[key]);
}



// Task 15 — Simple Function

function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();


// Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello " + name);

}
greet("Naveen");
greet("Arun");
greet("Priya");


// Task 17 — Multiple Parameters

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Rithin", 23, "IT");
student("Milind", 23, "CSE");
student("Rohith", 22, "ECE");



// Task 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);


// Task 19 — Salary

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);
console.log("Salary:", employeeSalary);


// Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);
console.log("Total Salary:", totalSalary);



// Task 21

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");



// Task 22 — Named Function

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(15));
console.log(square(20));


// Task 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// Task 24 — Arrow Function

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));



// Task 25 — Predict the Output

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    // console.log(b); // Error
    // console.log(c); // Error
}

test();

// Output:

// 10
// 20
// 30
// 10



// Task 26 — Predict

console.log(hoistA);
var hoistA = 10;

// Output: undefined
// Because var is hoisted


// Task 27

// console.log(b);
// let b = 20;

// Output: ReferenceError
// The variable exists but cannot be accessed before its declaration.


// Task 28

// console.log(c);
// const c = 30;

// Output: ReferenceError
// const also cannot be accessed before declaration.



// Task 29 — Self Invoking Function

// IIFE1

(function () {
    console.log("Welcome to JavaScript");
})();

// IIFE2

(function (product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);



// Task 30

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

// welcomeMessage = Callback function
// execute = Higher-order function



// Task 31 — Cashback

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackResult = cashback();
for (let value of cashbackResult) {
    console.log(value);
}



// Task 32 — Employee Management Console

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];

// 1. for...of
for (let employee of employees) {
    console.log(employee);
}

// 2. for...in

for (let employee of employees) {
    for (let key in employee) {
        console.log(key, employee[key]);
    }
    console.log("--------------------");
}

// 3. Function

function displayEmployee(employee) {
    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}

console.log("----- Display Employee -----");
displayEmployee(employees[0]);
displayEmployee(employees[1]);

// 4. Function parameters

function showEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

console.log("----- Function Parameters -----");
showEmployee("Arun",25,"IT","Developer",40000);

// 5. Return

function getSalary(employee) {
    return employee.salary;
}

let salaryResult = getSalary(employees[0]);
console.log("Employee Salary:", salaryResult);

// 6. Condition

console.log("----- Salary Check -----");

for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } 
    else {
        console.log(employee.name + " has salary below 40000");
    }
}

// 7. Arrow function

let salaryWithBonus = (salary, bonus) => {
    return salary + bonus;
};
console.log("Salary + Bonus:",salaryWithBonus(40000, 5000));

// 8. Generator

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();
console.log("----- Employee Benefits -----");
for (let benefit of employeeBenefits) {
    console.log(benefit);
}