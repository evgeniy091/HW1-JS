console.log("My first debug");

let age = 18;
console.log("Chaki:",age);

let newAge = 20;
console.log("Chaki:",newAge);

console.log(typeof age);
const numberPen = null;
console.log(typeof "numberPen");
let isApple = true
let isPlum = false
console.log(typeof isApple);
console.log(typeof String);
console.log(typeof "text")
let number = 12n;
console.log(typeof number);

const student = {name: "{Evgeniy}", surname: "{Omelchenko}", isActive: true}
console.log (student.isActive)
console.log(typeof student['isActive']);

const fruits = ["plum","orange","melon","apple","mandarin"]
console.log( fruits);
const sixLessonNumbers = [1, 2, 3, 4, 5]
console.log(sixLessonNumbers);

const students =[{surname : "Ivanov",age : 27, profession : "developer", },
{surname : "Smirnov", age : 25, profession : "FrontEnd",},
{surname : "Smirnov",age : 25,profession : "FrontEnd",},
{surname : "Sobolev",age : 23,profession : "managemer",},
{surname : "Antonov",age : 17,profession : "web-disigner",},
{surname : "Ribikov",age : 30,profession : "developer",}]

console.log(students)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers[0])
console.log(numbers[9])

const student1 = {name: "Evgeniy", surname: "Omelchenko",isActive : "true" }

alert( `Студент ${student1.name} ${student1.surname} сейчас активен: ${student1.isActive}!` ) 
