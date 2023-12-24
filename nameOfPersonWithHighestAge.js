/*1. Write a function that takes an array of objects 
e.g [{name: "mike", age: 40},{ name: "gift", age: 32}] 
and returns the name of the person with the highest age.
 */


const people = [
    {name: 'Adesuwa Okafor', age: 28},
    {name: 'Chinedu Obi', age: 30},
    {name: 'Ifunanya Okoye', age: 25},
    {name: 'Oluwatobi Adeyemi', age: 32},
    {name: 'Ngozi Eze', age: 27},
    {name: 'Emeka Nwachukwu', age: 29},
    {name: 'Aisha Ibrahim', age: 26},
    {name: 'Ayodele Ogunleye', age: 31},
    {name: 'Chidinma Onyejekwe', age: 24},
    {name: 'Jide Oladele', age: 33},
];

const returnNameOfPersonWithHighestAge = (people) => {
    let highestAge = 0;
    let nameOfPersonWithHighestAge = ' ';

    for(let person of people){
        if (person.age > highestAge){
            nameOfPersonWithHighestAge = person.age;


        }
    }

    return nameOfPersonWithHighestAge;
    
}

console.log(returnNameOfPersonWithHighestAge(people))

































// const returnNameOfPersonWithHighestAge = (people) => {
//     let highestAge = -Infinity;
//     let personWithHighestAge = null;

//     for (const person of people) {
//         if (person.age > highestAge) {
//             highestAge = person.age;
//             personWithHighestAge = person.name;
//         }
//     }

//     return personWithHighestAge;
// }

// console.log(returnNameOfPersonWithHighestAge(database));
