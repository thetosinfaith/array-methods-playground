/* 

1. Write a function that takes an array of objects representing students with their grades 
(e.g., {name: "Alice", grade: 85}) and returns a new array with their names and whether they passed (grade >= 60).

*/

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 45 },
    { name: "Charlie", grade: 75 },
    { name: "Raphael", grade: 59 }
];

const passedStudents = students.map(student => ({
    name: student.name,
    passed: student.grade >= 60
}))


console.log(passedStudents);