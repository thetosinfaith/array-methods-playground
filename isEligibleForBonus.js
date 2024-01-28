/*
 4. Develop a function that accepts an array of objects representing employees 
 and their years of service (e.g., {name: "John", years: 5}) and returns a new 
 array with names and whether they are eligible for a bonus (years >= 5).
 
*/

const employees = [
    { name: "John", years: 5 },
    { name: "Alice", years: 2 },
    { name: "Bob", years: 7 }
];



const isEligibleForBonus = employees.map(employee => ({
    name: employee.name,
    years: employee.years >= 5,
}))

return console.log(isEligibleForBonus)