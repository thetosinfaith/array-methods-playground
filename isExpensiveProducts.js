/*

 3. Implement a function that takes an array of objects containing
    products and their prices (e.g., {name: "Laptop", price: 1000}) 
    and returns a new array with the names of products and whether 
    they are expensive (price > 500).

    */

   const products = [

    { name: "Laptop", price: 1000 },
    { name: "Headphones", price: 80 },
    { name: "Smartphone", price: 600 }
    
   ];


   const expensiveProducts = products.map(product => ({
    name: product.name,
    price: product.price > 500,

}));

return console.log(expensiveProducts)