/* 3. Write a function that takes an array of objects 
e.g [ {name: "dan", salary: 30000, bonus: 5000}, 
{ name: "linda", salary: 36000, bonus: 8000}] 
and returns a new array with their names and their salary 
plus their bonus as newSalary.*/




const workers = [
    {name: "Emeka", salary: 30000, bonus: 5000},
    {name: "Chioma", salary: 36000, bonus: 8000},
    {name: "Adebayo", salary: 40000, bonus: 6000},
    {name: "Nkechi", salary: 32000, bonus: 7000},
    {name: "Oluwaseun", salary: 38000, bonus: 9000}
];


const calculateNewSalaries = () => {
    return workers.map(workers => ({
        name: workers.name,
        newSalary: workers.salary + workers.bonus
}));

}

console.log(calculateNewSalaries(workers));
