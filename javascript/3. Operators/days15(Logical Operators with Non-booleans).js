// Logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true);      // true

console.log(false && true);     // false

console.log(true && false);     // false

console.log(false && false);     // false


// Is he is eligible for loan

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);       // true





// Logical OR (||)
// Returns false if both operands are false

console.log(true || true);      // true

console.log(false || true);     // true

console.log(true || false);     // true

console.log(false || false);     // false


// Is he is eligible for loan

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan);       // true





// Logical NOT(!)
// It will change the 'true value --> false value' and 'false value --> true value'

console.log(!(true || true));       // false
console.log(!(true && true));       // false

console.log(!(false || true));      // false
console.log(!(false && true));      // true

console.log(!(true || false));      // false
console.log(!(true && false));      // true

console.log(!(false || false));     // true
console.log(!(false && false));     // true


// Is he is eligible for loan

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;

let applicationRefused = !eligibleForLoan;      // Not is used (!)

console.log(applicationRefused); 