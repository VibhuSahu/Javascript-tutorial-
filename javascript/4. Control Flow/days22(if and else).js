// CONDITIONAL STATEMENTS
// There are two types of conditional statements -> 1. if and else      2. Switch and case


// greeting user good morning and good night
// If the hour is btween 5am and 12am : good morning
// if it is between 12pm to 5pm(17) : good afternoom
// if it is between 5pm(17) to 10pm(20) : good evening


// if (condition) {
//   statement
// }
// else if (anotherCondition) {
//    statement 
// }
// else
//     statement

var hour = 15;


if (hour >= 6 && hour < 12) {
    console.log(' Good\n morning');
}
else if (hour >= 12 && hour < 17) {
    console.log(' Good\n Afternoon');
}
else {
    console.log(' Good\n Evening');
}