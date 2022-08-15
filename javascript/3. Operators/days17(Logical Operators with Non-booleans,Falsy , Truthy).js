console.log(false || true);
console.log(false || 'Mosh');
console.log(false || 1);

console.log(true || true);
console.log(true || 'Mosh');
console.log(true || 0);

// Falsy (false)
// undefined
// null
// 0
// false
// ''
//NaN

// Anything that is not Falsy --> Truthy

//  Short-circuiting ( false || 1 || 2  )
// In this beside false || 1 how many nodes you put can't matter


let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;


console.log(currentColor);






let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);