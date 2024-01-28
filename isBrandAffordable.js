/*

 6. Create a function that receives an array of objects
  representing cars and their prices (e.g., {brand: 
 "Toyota", price: 25000}) and returns a new array with 
 the brands and whether they are affordable (price < 30000).


*/

const cars = [
    { brand: "Toyota", price: 25000 },
    { brand: "BMW", price: 40000 },
    { brand: "Honda", price: 20000 }
];


const isBrandAffordable = cars.map(car => ({

    brand: car.brand,
    price: car.price < 30000,

}));

return console.log(isBrandAffordable);