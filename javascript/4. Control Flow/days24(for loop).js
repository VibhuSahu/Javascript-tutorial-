// Types of Loops
// 1. for
// 2. while
// 3. Do while
// 4. for of


// for loops

// for (initialExpression; condition; incrementExpression){
//     staments
// }

for (let i = 0; i < 5; i++) {
    console.log('Hello World',i);   
}

// result of above for loop
// Hello World 0
// Hello World 1
// Hello World 2
// Hello World 3
// Hello World 4

for (let i = 0; i <= 5; i++) {
    console.log('Hello World',i);   
}
// result of above for loop
// Hello World 0
// Hello World 1
// Hello World 2
// Hello World 3
// Hello World 4
// Hello World 5




// ways, how we print odd numbers
for (var i = 0; i <=5; i++) {
    if (i % 2 !== 0) console.log(i);
}
// result of above for loop
// 1
// 3
// 5


for (var i = 1; i <= 5; i += 2) {
    console.log(i);
}
// result of above for loop
// 1
// 3
// 5


// how to print number in revers order
for (var i = 5; i > 0; i--) {
    console.log(i);
}
// result of above for loop
// 1
// 2
// 3
// 4
// 5