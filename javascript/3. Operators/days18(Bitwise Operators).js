// Bitwise 'OR'

// 1 = 00000001
// 2 = 00000010
// R = 00000011  -> 3

console.log(1 | 2);


// Bitwise 'AND'

// 1 = 00000001
// 2 = 00000010
// R = 00000000  -> 0

console.log(1 & 2);



// Practical Use
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission |executePermission;

let message = (myPermission & readPermission) ? 'Yes' : 'No';

console.log(message);