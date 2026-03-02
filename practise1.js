 
// todo-app 1st code js

// const input = document.getElementById("taskInput");
// const button = document.getElementById("addBtn");
// const list = document.getElementById("taskList");

// button.addEventListener("click", function () {
//   const taskText = input.value;

//   if (taskText === "") return;

//   const li = document.createElement("li");
//   li.textContent = taskText;

//   list.appendChild(li);
//   input.value = "";
// });

// console.log("Hello JavaScript");

// let city = "Bhopal";
// console.log(city);

// let name = "Anshu";   
// let age = 20;         
// let isStudent = true;
// let x = null;         
// let y;      

// console.log(typeof name);
// console.log(typeof age);

// let a = 10;
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);



// let age = 18;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }



// loops

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }


// // while loop

// let i = 1;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }




//Datatypes

// let isStudent = true;
// let city = null;
// let marks;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof city);
// console.log(typeof marks);


// Operators

// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a % b);
// console.log(a > b);
// console.log(a === b);




// Condition

// let number = 7;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }





// loop practise 


// let number = 7;

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }




// simple age calculator

let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Your age is:", age);




// grade checker

// let marks = 82;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 50) {
//   console.log("Grade C");
// } else {
//   console.log("Fail");
// }




// mini challenge


// let number = -5;  // can change this value 

// if (number > 0) {
//   console.log("Positive Number");
// } else if (number < 0) {
//   console.log("Negative Number");
// } else {
//   console.log("Number is Zero");
// }



// function call

function greet() {
  console.log("Hello Anshu");
}

greet();



// function with parameter
// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Anshu");
// greet("Rahul");




// function with return value
// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 3);
// console.log("Sum is:", result);




// practise ques

// function checkEvenOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log(checkEvenOdd(10));
// console.log(checkEvenOdd(7));




// ARRAYS 
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits[0]);
// console.log(fruits[2]); 




//  Array modifiying
let marks = [70, 80, 90];

marks[1] = 85;

console.log(marks);




//  Array methods
// let numbers = [1, 2, 3];

// numbers.push(4);

// console.log(numbers);


// // Pop
// numbers.pop();
// console.log(numbers);


// loop through Array
// let numbers = [10, 20, 30, 40];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }


// Real example
// let numbers = [5, 10, 15];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Total Sum:", sum); 




// Object

// let student = {
//   name: "Anshu",
//   age: 20,
//   branch: "CSE"
// };

// console.log(student);




// object + function
// let person = {
//   name: "Anshu",
//   greet: function () {
//     console.log("Hello " + this.name);
//   }
// };

// person.greet();




// Arrays of object 
// let students = [
//   { name: "Anshu", marks: 80 },
//   { name: "Rahul", marks: 75 },
//   { name: "Priya", marks: 90 }
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].name, students[i].marks);
// } 




// //Global Scope
// let name = "Anshu";

// function greet() {
//   console.log(name);
// }

// greet();




// Block scope
if (true) {
  let age = 20;
  console.log(age);
}

console.log(age);




// // var pblm
// if (true) {
//   var city = "Bhopal";
// }

// console.log(city); 




// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i); 




// for (var j = 0; j < 3; j++) {
//   console.log(j);
// }

// console.log(j); // 3




//  for (var j = 0; j < 4; j++){
//   console.log(j);
//   }

// console.log(j);




// // Arrow function 
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3));




// // Arrow function
// const add = (a, b) => {
//   return a + b;
// };



// // short arrow
// console.log(add(2, 3));


// const multiply = (a, b) => a * b;

// console.log(multiply(4, 5));




// // single parameter
// const square = num => num * num;

// console.log(square(6));




// // no parameter function
// const greet = () => {
//   console.log("Hello Anshu");
// };

// greet();



// Arriw funtion with array
// let numbers = [1, 2, 3, 4];

// numbers.forEach(num => {
//   console.log(num);
// });




// let numbers = [1, 2, 3, 4];

// let doubled = numbers.map(num => num * 2);

// console.log(doubled);




// let numbers = [1, 2, 3, 4, 5, 6];

// let evens = numbers.filter(num => num % 2 === 0);

// console.log(evens);




// let numbers = [10, 20, 30];

// let total = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(total);



// Example 
// let students = [
//   { name: "Anshu", marks: 80 },
//   { name: "Rahul", marks: 45 },
//   { name: "Priya", marks: 90 }
// ];

// // only passed students
// let passed = students.filter(s => s.marks >= 50);

// console.log(passed);

// // Total marks
// let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);

// console.log("Total Marks:", totalMarks);








// // 
// let { name: studentName } = student;

// console.log(studentName);




// real example
let student = {
  name: "Anshu",
  marks: 85
};

let updatedStudent = {
  ...student,
  marks: 90
};

console.log(updatedStudent);