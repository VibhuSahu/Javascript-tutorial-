// for-in loop
// it iterates over the keys 

const person = {
    name : 'Mosh',
    age : 30
};

for (var key in person) { // it will print all key and there values  of object 'person'
    console.log(key,person[key]);
}
// result of above loop
// name Mosh
// age 30


const colors = ['red','green','blue'];

for (let index in colors) {  // it will print all the elements of array and there index of 'colors'
    console.log(index, colors[index]);
}
// result of above loop
// 0 red
// 1 green
// 2 blue


// for-of
// it iterates over values
for (var color of colors) {
    console.log(color);
}