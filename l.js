const database = [
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
    let highestAge = -Infinity;
    let personWithHighestAge = null;

    for (const person of people) {
        if (person.age > highestAge) {
            highestAge = person.age;
            personWithHighestAge = person.name;
        }
    }

    return personWithHighestAge;
}

console.log(returnNameOfPersonWithHighestAge(database));
