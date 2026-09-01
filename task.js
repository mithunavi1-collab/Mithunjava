

let studentName = "Mithun";
let age = 26;
let mark = 87;

console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Mark:", mark);

let userName = prompt("Enter your name:");
alert("Hello, " + userName);


let userAge = prompt("Enter your age:");
console.log("User Age:", userAge);


let answer = confirm("Do you like JavaScript?");
console.log("User selected:", answer);


let name = prompt("Enter your name:");
document.writeln("Your name is: " + name);



// TASK-1
var studentName = "Mithun";
let studentAge = 26;
const collegeName = "Mount Carmel College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Mithun";
console.log(studentName);

studentAge = 26;
console.log(studentAge);

var studentName = "Mithun";
console.log(studentName);

//TASK2
let name1 = prompt("Enter your name");
let age1 = prompt("Enter your age");
let city1 = prompt("Enter your city");

console.log("Name:", name1);
console.log("Age:", age1);
console.log("City:", city1);

//TASK3
let name01 = prompt("Enter your name");

alert("Welcome " + name01 + "!");

//TASK4
let birthYear = prompt("Enter your birth year");

let currentYear = 2026;

let agee = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", agee);

//TASK5
let value1 = "Hello";
let value2 = 100;
let value3 = 28.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);

//TASK6
let student = {
    name: "Mithun",
    age: 26,
    city: "Bangalore",
    qualification: "MSc Electronics",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);


//TASK7
let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First fruit:", fruits[0]);

console.log("Second fruit:", fruits[1]);

console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("Total number of fruits:", fruits.length);

//TASK8
let a = 20;
let b = 5;

console.log("Addition:", a + b);

console.log("Subtraction:", a - b);

console.log("Multiplication:", a * b);

console.log("Division:", a / b);

console.log("Modulus:", a % b);

console.log("Exponentiation:", a ** b);

//TASK9
let shirt = 1500;
let pant = 1300;
let shoes = 1700;

let total = shirt + pant + shoes;

console.log("Total:", total);

//TASK10
let tamil = 95;
let english = 95;
let maths = 95;

let total1 = tamil + english + maths;

let average = total1 / 3;

console.log("Total marks:", total1);
console.log("Average marks:", average);

//TASK11
let aa = 10;

let bb = aa++;

console.log(aa);
console.log(bb);

//TASK12
let a1 = 10;

let b1 = ++a1;

console.log(a1);
console.log(b1);

// TASK13
let a2 = 20;

let b2 = a2--;

console.log(a2);
console.log(b2);

//TASK14
let a3 = 20;

let b3 = --a3;

console.log(a3);
console.log(b3);

//TASK15
let a4 = 5;

let b4 = a4++;

let c4 = ++a4;

let d4 = b4--;

console.log(a4);
console.log(b4);
console.log(c4);
console.log(d4);

//TASK16
let num = 10;

num += 5;

console.log(num);

let num1 = 10;

num1 -= 5;

console.log(num1);

let num2 = 10;

num2 *= 5;

console.log(num2);

let num3 = 10;

num3 /= 5;

console.log(num3);

let num4 = 10;

num4 %= 3;

console.log(num4);

let num5 = 10;

num5 **= 2;

console.log(num5);

//TASK17
let name = "Mithun";
let age = 26;
let city = "Bangalore";
let college = "Mount Carmel College";

let subjects = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL"
];

let student1 = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Student name:", student1.name);

console.log("Student age:", student1.age);

console.log("City:", student1.city);

console.log("First subject:", student1.subjects[0]);

console.log(
    "Last subject:",
    student1.subjects[student1.subjects.length - 1]
);

console.log(
    "Total subjects:",
    student1.subjects.length
);

console.log("Complete object:", student1);

//Final
let num10 = prompt("Enter first number:");
let num20 = prompt("Enter second number:");

console.log("Addition:", Number(num10) + Number(num20));
console.log("Subtraction:", Number(num10) - Number(num20));
console.log("Multiplication:", Number(num10) * Number(num20));
console.log("Division:", Number(num10) / Number(num20));
console.log("Modulus:", Number(num10) % Number(num20));
console.log("Power:", Number(num10) ** Number(num20));

