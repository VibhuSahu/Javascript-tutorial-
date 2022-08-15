// Break and Continue


// Break
// the 'break' statement "jumps out" of a loop.
var i = 0;

while (i <= 10) {
    if (i === 5) break;
    console.log(i);
    i++;
}

// continue
// the 'continue' statement "jumps over" next iteration in the loop
var x = 0;
while (x <= 10) {
    if (x % 2 === 0) {
        x++;
        continue;
    }
    console.log(x);
    x++;
    
}