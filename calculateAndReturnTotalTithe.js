/*

2. Write a function that takes an array of objects e.g 
[ {name: "grace", tithe: 40000}, 
{name: "james", tithe: 32000}] 
and returns the total tithe.


*/

const churchMembers = [
    {"name": "Emily", "tithe": 45000},
    {"name": "Daniel", "tithe": 38000},
    {"name": "Sophia", "tithe": 30000},
    {"name": "Benjamin", "tithe": 28000},
    {"name": "Olivia", "tithe": 42000}
];

const calculateAndReturnTotalTithe = (contributions) => {
    let totalTithe = 0;

    for (let person of contributions) {
        totalTithe += person.tithe;
    }

    return totalTithe;
};

console.log(calculateAndReturnTotalTithe(churchMembers));
