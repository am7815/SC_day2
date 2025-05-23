
// task 1
console.log("Task 1");
var name = "John";
console.log(name);

//task2
console.log("Task 2");
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);

//task3
console.log("Task 3");
var city ;
console.log("value of city before assignment "+ city);
city = "Cairo";
console.log("value of city after assignment "+city);

// task4
alert("Welcome to our website!");

task5
var isDelated = confirm("Are you sure you want to delete this item?");
console.log(isDelated);

// task6
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;

var birthDate = prompt("Enter your birth date in this format dd/mm/yyyy");
var yeardate = birthDate.split("/");
var age = 2025 - yeardate[2];
console.log("Welcome " + fullName + " you are " + age + " years old");

// task7
alert(" it’s the first release of a calculator that only has a summation feature.");
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
var sum = parseInt(num1) + parseInt(num2);
alert("The summation result : " + sum);


// task8
var salary = 100;
console.log(typeof(salary));

// task9

// method 1

var x = 10 ; 
var y = 20;
console.log("before swap");
console.log("x = "+x);
console.log("y = "+y);


var x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log("after swap");
console.log("x = "+x);
console.log("y = "+y);

// method 2

var x = 10 ;
var y = 20;
console.log("before swap");
console.log("x = "+x);
console.log("y = "+y);
[x,y] = [y,x];
console.log("after swap");
console.log("x = "+x);
console.log("y = "+y);
