// For...in

var ls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var x in ls) { // it will print all the items in the ls arrays
    console.log(x);
}
// result of above loop
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9



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