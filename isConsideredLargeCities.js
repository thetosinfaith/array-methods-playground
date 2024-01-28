/*

 5. Write a function that takes an array of objects representing cities 
 and their populations (e.g., {name: "New York", population: 8000000}) 
 and returns a new array with city names and whether they are considered 
 large cities (population > 1 million).

*/

const cities = [
    { name: "New York", population: 8000000 },
    { name: "Los Angeles", population: 4000000 },
    { name: "Chicago", population: 2700000 }
];


const isConsideredLargeCities = cities.map(city => ({
    name: city.name,
    population: city.population > 1000000
}))

return console.log(isConsideredLargeCities)