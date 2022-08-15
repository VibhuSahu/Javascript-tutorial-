// Infinite loop
// Infinite loop can crash your computer so avoid using it

// In while loop
let i = 0;
while (i < 5) {
    console.log(i);
    // i++  --> We forgot to increment the value hence it will create infinite loop
}

while (true) {
    console.log(i);
}   // it will also create an infinite loop hence the logic is true


// In do-while loop
let x = 0;
do {
    console.log(x);
} while (true);     // it will also create an infinite loop hence the logic is true


// In for loop
for (var j = 0; j < 10; ){
    console.log(j); // In this to the i is not getting incremented so that the logic remains same
}