
// TASK 1 - STUDENT RESULT ANALYZER

console.log("TASK 1 - STUDENT RESULT ANALYZER");


let studentName = "Mithun";
let department = "MSc Electronics";

let mark1 = 85;
let mark2 = 78;
let mark3 = 92;
let mark4 = 88;
let mark5 = 75;

function calculateResult(name, dept, m1, m2, m3, m4, m5) {

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;

    let result;

    if (m1 >= 50 && m2 >= 50 && m3 >= 50 && m4 >= 50 && m5 >= 50) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    let grade;

    if (result === "FAIL") {
        grade = "Fail";
    }
    else if (average >= 90) {
        grade = "A";
    }
    else if (average >= 75) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }

    console.log("Name       :", name);
    console.log("Department :", dept);
    console.log("Mark 1     :", m1);
    console.log("Mark 2     :", m2);
    console.log("Mark 3     :", m3);
    console.log("Mark 4     :", m4);
    console.log("Mark 5     :", m5);
    console.log("Total      :", total);
    console.log("Average    :", average);
    console.log("Result     :", result);
    console.log("Grade      :", grade);
}

calculateResult(
    studentName,
    department,
    mark1,
    mark2,
    mark3,
    mark4,
    mark5
);


// TASK 2 - EMPLOYEE SALARY CALCULATOR


console.log("TASK 2 - EMPLOYEE SALARY CALCULATOR");


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
        bonus = basicSalary * 0.15;
    }
    else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name          :", employee.name);
    console.log("Role          :", employee.role);
    console.log("Basic Salary  :", basicSalary);
    console.log("Experience    :", employee.experience + " years");
    console.log("Bonus         :", bonus);
    console.log("Final Salary  :", finalSalary);

    return finalSalary;
}

calculateSalary(employee);


// TASK 3 - PRODUCT FILTER SYSTEM

console.log("TASK 3 - PRODUCT FILTER SYSTEM");

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above ₹2,000
let productsAbove2000 = products.filter(product => product.price > 2000);

console.log("Products above ₹2,000:");
console.log(productsAbove2000);


// 2. Only electronics
let electronics = products.filter(product => product.category === "electronics");

console.log("Electronics products:");
console.log(electronics);


// 3. First product below ₹1,000
let productBelow1000 = products.find(product => product.price < 1000);

console.log("First product below ₹1,000:");
console.log(productBelow1000);


// 4. Total price of all products
let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Total price of all products:", totalProductPrice);


// 5. Any product costs more than ₹50,000?
let anyAbove50000 = products.some(product => product.price > 50000);

console.log("Any product above ₹50,000:", anyAbove50000);


// 6. Every product above ₹500?
let everyAbove500 = products.every(product => product.price > 500);

console.log("Every product above ₹500:", everyAbove500);


// TASK 4 - EMPLOYEE MANAGEMENT

console.log("TASK 4 - EMPLOYEE MANAGEMENT");

let employeesTask4 = [
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
        name: "Priya",
        role: "HR Manager",
        salary: 55000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Full Stack Developer",
        salary: 65000
    },
    {
        id: 105,
        name: "Divya",
        role: "UI Designer",
        salary: 38000
    },
    {
        id: 106,
        name: "Rahul",
        role: "Software Engineer",
        salary: 50000
    }
];


// 1. Display all employee names
let employeeNames = employeesTask4.map(employee => employee.name);

console.log("All employee names:");
console.log(employeeNames);


// 2. Employees earning above ₹40,000
let employeesAbove40000 = employeesTask4.filter(
    employee => employee.salary > 40000
);

console.log("Employees earning above ₹40,000:");
console.log(employeesAbove40000);


// 3. Find employee with ID 103
let employee103 = employeesTask4.find(
    employee => employee.id === 103
);

console.log("Employee with ID 103:");
console.log(employee103);


// 4. Calculate total salary
let totalSalaryTask4 = employeesTask4.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total salary:", totalSalaryTask4);


// 5. Find highest-paid employee
let highestPaidEmployee = employeesTask4.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

console.log("Highest-paid employee:");
console.log(highestPaidEmployee);


// 6. Sort employees from highest salary to lowest
let sortedEmployees = [...employeesTask4].sort(
    (a, b) => b.salary - a.salary
);

console.log("Employees sorted from highest salary to lowest:");
console.log(sortedEmployees);


// 7. New array containing only employee names
let employeeNameArray = employeesTask4.map(
    employee => employee.name
);

console.log("Employee name array:");
console.log(employeeNameArray);


// TASK 5 - SHOPPING CART


console.log("TASK 5 - SHOPPING CART");

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    // Calculate item total
    let itemTotals = cart.map(item => {
        return {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            itemTotal: item.price * item.quantity
        };
    });

    console.log("Item totals:");
    console.log(itemTotals);

    // Calculate total cart value
    let totalCartValue = cart.reduce(
        (total, item) => total + (item.price * item.quantity),
        0
    );

    // Calculate discount
    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    // Final payable amount
    let finalAmount = totalCartValue - discount;

    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);

    return finalAmount;
}

calculateCart(cart);


// TASK 6 - STUDENT SEARCH SYSTEM


console.log("TASK 6 - STUDENT SEARCH SYSTEM");

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


// 1. Display all student names
let studentNames = students.map(student => student.name);

console.log("All student names:");
console.log(studentNames);


// 2. Students who scored above 80
let studentsAbove80 = students.filter(
    student => student.mark > 80
);

console.log("Students who scored above 80:");
console.log(studentsAbove80);


// 3. Find student named Priya
let priya = students.find(
    student => student.name === "Priya"
);

console.log("Student named Priya:");
console.log(priya);


// 4. Calculate average mark
let totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
);

let averageMark = totalMarks / students.length;

console.log("Average mark:", averageMark);


// 5. Check whether anyone failed
let anyoneFailed = students.some(
    student => student.mark < 50
);

console.log("Anyone failed:", anyoneFailed);


// 6. Check whether everyone scored above 40
let everyoneAbove40 = students.every(
    student => student.mark > 40
);

console.log("Everyone scored above 40:", everyoneAbove40);


// 7. Sort students by marks
let studentsSortedByMarks = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("Students sorted by marks:");
console.log(studentsSortedByMarks);


// TASK 7 - ARRAY TRANSFORMATION CHALLENGE

console.log("TASK 7 - ARRAY TRANSFORMATION CHALLENGE");

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Numbers × 2
let doubledNumbers = numbers.map(
    number => number * 2
);

console.log("Numbers × 2:");
console.log(doubledNumbers);


// 2. Only even numbers
let evenNumbers = numbers.filter(
    number => number % 2 === 0
);

console.log("Even numbers:");
console.log(evenNumbers);


// 3. Numbers greater than 15
let greaterThan15 = numbers.filter(
    number => number > 15
);

console.log("Numbers greater than 15:");
console.log(greaterThan15);


// 4. First number greater than 20
let firstGreaterThan20 = numbers.find(
    number => number > 20
);

console.log("First number greater than 20:");
console.log(firstGreaterThan20);


// 5. Total of all numbers
let totalNumbers = numbers.reduce(
    (total, number) => total + number,
    0
);

console.log("Total of all numbers:");
console.log(totalNumbers);


// 6. Any number greater than 40
let anyGreaterThan40 = numbers.some(
    number => number > 40
);

console.log("Any number greater than 40:");
console.log(anyGreaterThan40);


// 7. Every number is positive
let everyNumberPositive = numbers.every(
    number => number > 0
);

console.log("Every number is positive:");
console.log(everyNumberPositive);


// 8. Sort highest to lowest
let numbersHighToLow = [...numbers].sort(
    (a, b) => b - a
);

console.log("Numbers highest to lowest:");
console.log(numbersHighToLow);


// TASK 8 - STRING ANALYZER

console.log("TASK 8 - STRING ANALYZER");

let sentence = prompt("Enter a sentence:");


// Check if user entered something
if (sentence !== null && sentence.trim() !== "") {

    // Remove unnecessary spaces
    sentence = sentence.trim();

    // 1. Total characters
    console.log("Total characters:", sentence.length);


    // 2. Uppercase sentence
    console.log("Uppercase:", sentence.toUpperCase());


    // 3. Lowercase sentence
    console.log("Lowercase:", sentence.toLowerCase());


    // 4. Check whether it contains JavaScript
    console.log(
        'Contains "JavaScript":',
        sentence.includes("JavaScript")
    );


    // 5. First character
    console.log("First character:", sentence.slice(0, 1));


    // 6. Last character
    console.log("Last character:", sentence.slice(-1));


    // 7. Number of words
    let words = sentence.split(/\s+/);

    console.log("Number of words:", words.length);


    // 8. Replace JavaScript with Python
    let replacedSentence = sentence.replace(
        "JavaScript",
        "Python"
    );

    console.log("After replacement:", replacedSentence);


    // 9. Convert sentence into an array
    let sentenceArray = sentence.split(" ");

    console.log("Sentence array:");
    console.log(sentenceArray);

}
else {
    console.log("No sentence entered.");
}


// FINAL MINI PROJECT - EMPLOYEE DASHBOARD


console.log("FINAL MINI PROJECT - EMPLOYEE DASHBOARD");

let employees = [
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
// Display all employees

console.log("\n1. EMPLOYEE LIST");

employees.forEach(employee => {
    console.log(
        "ID:", employee.id,
        "| Name:", employee.name,
        "| Department:", employee.department,
        "| Salary:", employee.salary,
        "| Experience:", employee.experience + " years"
    );
});

// 2. SEARCH EMPLOYEE BY NAME

console.log("\n2. SEARCH EMPLOYEE BY NAME");

let searchName = "Priya";

let searchedEmployee = employees.find(
    employee =>
        employee.name.toLowerCase() === searchName.toLowerCase()
);

console.log("Search result:", searchedEmployee);


// 3. DEPARTMENT FILTER

console.log("\n3. DEPARTMENT FILTER");

let selectedDepartment = "IT";

let departmentEmployees = employees.filter(
    employee => employee.department === selectedDepartment
);

console.log(
    "Employees in " + selectedDepartment + " department:"
);

console.log(departmentEmployees);


// 4. SALARY FILTER
// Show employees earning more than ₹50,000

console.log("\n4. SALARY FILTER");

let highSalaryEmployees = employees.filter(
    employee => employee.salary > 50000
);

console.log("Employees earning more than ₹50,000:");
console.log(highSalaryEmployees);


// 5. SALARY CALCULATION
// Calculate total company salary

console.log("\n5. TOTAL COMPANY SALARY");

let totalCompanySalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("Total Company Salary: ₹" + totalCompanySalary);


// 6. HIGHEST SALARY

console.log("\n6. HIGHEST SALARY");

let highestSalaryEmployee = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

console.log("Highest Paid Employee:");
console.log(highestSalaryEmployee);

console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);


// 7. EXPERIENCE
// Find employees with more than 3 years experience


console.log("\n7. EMPLOYEES WITH MORE THAN 3 YEARS EXPERIENCE");

let experiencedEmployees = employees.filter(
    employee => employee.experience > 3
);

console.log(experiencedEmployees);


// 8. SORTING
// Low → High
// High → Low

console.log("\n8. SALARY SORTING");


// Low to High
let salaryLowToHigh = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Salary Low → High:");
console.log(salaryLowToHigh);


// High to Low
let salaryHighToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High → Low:");
console.log(salaryHighToLow);



// 9. STATISTICS

console.log("\n9. EMPLOYEE STATISTICS");

let totalEmployees = employees.length;

let averageSalary = totalCompanySalary / totalEmployees;

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));

// FINAL SUMMARY

console.log("ALL TASKS COMPLETED SUCCESSFULLY");
