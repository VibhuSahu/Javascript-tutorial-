let selectedColors = ['red','blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

const cars = ["Saab","Volvo","BMW"];
var car = cars[0];      // You access an array element by referring to the index number
console.log(car);


cars[0] = "Opel";    // Changing an Array Element
console.log(cars);


console.log(cars.length);   // Returns the number of elements
cars.sort();                // Sorts the array
console.log(cars);
console.log(cars[cars.length - 1]); // Accessing the Last Array Element


const fruits = ["Banana","Orange","Apple"];
fruits[fruits.length] = "Lemon";    // Adds 'Lemon' to fruits
console.log(fruits)


// These two different statements both create a new empty array named points.
let points = new Array();   // JavaScript new Array
let Points = [];
console.log(Points);


const point = new Array(40,100,1);  // Create an array with three elements
console.log(point);
