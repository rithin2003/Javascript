// Task 1 — Student Result Analyzer

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;
    let result;
    let grade;

    if (average >= 90) {
        result = "Pass";
        grade = "A";
    }
    else if (average >= 75) {
        result = "Pass";
        grade = "B";
    }
    else if (average >= 60) {
        result = "Pass";
        grade = "C";
    }
    else if (average >= 50) {
        result = "Pass";
        grade = "D";
    }
    else {
        result = "Fail";
        grade = "Fail";
    }

    console.log("----- Student Result -----");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

studentResult("Arun", "CSE", 90, 85, 78, 92, 88);
studentResult("Ravi", "ECE", 75, 80, 70, 65, 90);



// Task 2 — Employee Salary Calculator

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};


function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    }
    else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("----- Employee Salary -----");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);



// Task 3 — Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


// 1. Products above ₹2,000
let expensiveProducts = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above ₹2,000:");
console.log(expensiveProducts);


// 2. Only electronics
let electronics = products.filter(function(product) {
    return product.category === "electronics";
});

console.log("Electronics:");
console.log(electronics);


// 3. First product below ₹1,000
let cheapProduct = products.find(function(product) {
    return product.price < 1000;
});

console.log("First product below ₹1,000:");
console.log(cheapProduct);


// 4. Total price of all products
let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total price:", totalPrice);


// 5. Check whether any product costs more than ₹50,000
let hasExpensiveProduct = products.some(function(product) {
    return product.price > 50000;
});

console.log("Any product above ₹50,000:", hasExpensiveProduct);


// 6. Check whether every product costs more than ₹500
let allAbove500 = products.every(function(product) {
    return product.price > 500;
});

console.log("Every product above ₹500:", allAbove500);



// TASK 4 — EMPLOYEE MANAGEMENT

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Rithin",
        role: "UI/UX Designer",
        salary: 55000
    },
    {
        id: 104,
        name: "Milind",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 105,
        name: "Rohit",
        role: "Software Tester",
        salary: 38000
    },
    {
        id: 106,
        name: "Shreyas",
        role: "Data Analyst",
        salary: 50000
    }
];


// 1. Display all employee names

let allEmployeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("All Employee Names:");
console.log(allEmployeeNames);


// 2. Display employees earning above ₹40,000

let employeesAbove40000 = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees earning above ₹40,000:");
console.log(employeesAbove40000);


// 3. Find employee with ID 103

let employeeWithId103 = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee with ID 103:");
console.log(employeeWithId103);


// 4. Calculate total salary

let totalEmployeeSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalEmployeeSalary);


// 5. Find highest-paid employee

let highestPaidEmployee = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    }
    return highest;
});

console.log("Highest Paid Employee:");
console.log(highestPaidEmployee);


// 6. Sort employees from highest salary to lowest

let employeesSortedBySalary = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Employees from highest salary to lowest:");
console.log(employeesSortedBySalary);


// 7. Create a new array containing only employee names

let employeeNamesOnly = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names Only:");
console.log(employeeNamesOnly);



// TASK 5 — SHOPPING CART

let shoppingCart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];


function calculateCart(cartItems) {
    let cartItemTotals = cartItems.map(function(item) {
        return item.price * item.quantity;
    });

    console.log("Item Totals:");
    console.log(cartItemTotals);

    let totalShoppingCartValue = cartItems.reduce(function(total, item) {
        return total + (item.price * item.quantity);
    }, 0);


    let shoppingDiscount = 0;
    if (totalShoppingCartValue > 50000) {
        shoppingDiscount = totalShoppingCartValue * 10 / 100;
    }


    let finalPayableAmount = totalShoppingCartValue - shoppingDiscount;

    console.log("Total Cart Value:", totalShoppingCartValue);
    console.log("Discount:", shoppingDiscount);
    console.log("Final Payable Amount:", finalPayableAmount);
}


calculateCart(shoppingCart);



// TASK 6 — STUDENT SEARCH SYSTEM

let students = [
    {
        name: "Arun",
        age: 21,
        mark: 85
    },
    {
        name: "Priya",
        age: 22,
        mark: 92
    },
    {
        name: "Karthi",
        age: 20,
        mark: 67
    },
    {
        name: "Dinesh",
        age: 23,
        mark: 45
    }
];


// 1. Display all student names

let allStudentNames = students.map(function(student) {
    return student.name;
});

console.log("All Student Names:");
console.log(allStudentNames);


// 2. Display students who scored above 80

let studentsAbove80 = students.filter(function(student) {
    return student.mark > 80;
});

console.log("Students who scored above 80:");
console.log(studentsAbove80);


// 3. Find student named Priya

let priyaStudent = students.find(function(student) {
    return student.name === "Priya";
});

console.log("Student named Priya:");
console.log(priyaStudent);


// 4. Calculate average mark

let totalStudentMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);

let studentAverageMark = totalStudentMarks / students.length;

console.log("Average Mark:", studentAverageMark);


// 5. Check whether anyone failed

let anyStudentFailed = students.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone Failed:", anyStudentFailed);


// 6. Check whether everyone scored above 40

let everyStudentAbove40 = students.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone scored above 40:", everyStudentAbove40);


// 7. Sort students by marks

let studentsSortedByMark = [...students].sort(function(a, b) {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:");
console.log(studentsSortedByMark);



// TASK 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Create a new array containing numbers × 2

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Numbers * 2:");
console.log(doubledNumbers);


// 2. Get only even numbers

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:");
console.log(evenNumbers);


// 3. Get numbers greater than 15

let numbersGreaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Numbers greater than 15:");
console.log(numbersGreaterThan15);


// 4. Find the first number greater than 20

let firstNumberGreaterThan20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First number greater than 20:");
console.log(firstNumberGreaterThan20);


// 5. Find total of all numbers

let totalOfNumbers = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Total of Numbers:", totalOfNumbers);


// 6. Check whether any number is greater than 40

let anyNumberGreaterThan40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any number greater than 40:", anyNumberGreaterThan40);


// 7. Check whether every number is positive

let everyNumberPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("Every number is positive:", everyNumberPositive);


// 8. Sort from highest to lowest

let numbersHighestToLowest = [...numbers].sort(function(a, b) {
    return b - a;
});

console.log("Numbers from highest to lowest:");
console.log(numbersHighestToLowest);



// TASK 8 — STRING ANALYZER

let sentence = prompt("Enter a sentence:");


// 1. Total characters

let totalCharacters = sentence.length;

console.log("Total Characters:", totalCharacters);


// 2. Uppercase sentence

let uppercaseSentence = sentence.toUpperCase();

console.log("Uppercase Sentence:", uppercaseSentence);


// 3. Lowercase sentence

let lowercaseSentence = sentence.toLowerCase();

console.log("Lowercase Sentence:", lowercaseSentence);


// 4. Check whether it contains "JavaScript"

let containsJavaScript = sentence.includes("JavaScript");

console.log("Contains JavaScript:", containsJavaScript);


// 5. First character

let firstCharacter = sentence.slice(0, 1);

console.log("First Character:", firstCharacter);


// 6. Last character

let lastCharacter = sentence.slice(-1);

console.log("Last Character:", lastCharacter);


// 7. Number of words

let sentenceWords = sentence.trim().split(" ");

let numberOfWords = sentenceWords.length;

console.log("Number of Words:", numberOfWords);


// 8. Replace "JavaScript" with "Python"

let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("After Replacing JavaScript:", replacedSentence);


// 9. Convert sentence into an array

let sentenceArray = sentence.split(" ");

console.log("Sentence Array:");
console.log(sentenceArray);




// FINAL MINI PROJECT — EMPLOYEE DASHBOARD


let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. EMPLOYEE LIST

console.log("Employee List:");

dashboardEmployees.forEach(function(employee) {
    console.log(
        "ID:", employee.id,
        "Name:", employee.name,
        "Department:", employee.department,
        "Salary: ₹" + employee.salary,
        "Experience:", employee.experience + " years"
    );
});



// 2. SEARCH EMPLOYEE BY NAME

let searchName = "Priya";

let searchedEmployee = dashboardEmployees.find(function(employee) {
    return employee.name.toLowerCase() === searchName.toLowerCase();
});

console.log("SEARCH RESULT ");

if (searchedEmployee) {
    console.log(searchedEmployee);
}
else {
    console.log("Employee not found");
}



// 3. DEPARTMENT FILTER

let selectedDepartment = "IT";

let departmentEmployees = dashboardEmployees.filter(function(employee) {
    return employee.department === selectedDepartment;
});

console.log("DEPARTMENT FILTER");
console.log(departmentEmployees);



// 4. SALARY FILTER

let employeesAbove50000 = dashboardEmployees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("SALARY FILTER");
console.log("Employees earning more than ₹50,000:");
console.log(employeesAbove50000);



// 5. SALARY CALCULATION

let companyTotalSalary = dashboardEmployees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("TOTAL COMPANY SALARY");
console.log("Total Salary: ₹" + companyTotalSalary);


// 6. HIGHEST SALARY

let highestSalaryEmployee = dashboardEmployees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    }
    return highest;
});

console.log("HIGHEST SALARY");
console.log(highestSalaryEmployee);



// 7. EXPERIENCE FILTER

let experiencedEmployees = dashboardEmployees.filter(function(employee) {
    return employee.experience > 3;
});

console.log("EXPERIENCE");
console.log("Employees with more than 3 years experience:");
console.log(experiencedEmployees);



// 8. SORTING


// Low → High

let salaryLowToHigh = [...dashboardEmployees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("SALARY LOW → HIGH");
console.log(salaryLowToHigh);


// High → Low

let salaryHighToLow = [...dashboardEmployees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("SALARY HIGH → LOW");
console.log(salaryHighToLow);



// 9. STATISTICS

let totalEmployees = dashboardEmployees.length;
let averageSalary = companyTotalSalary / totalEmployees;

console.log("EMPLOYEE STATISTICS");

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + companyTotalSalary);
console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));