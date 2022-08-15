// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by both it will return the same number


function fizzBuzz(input) {
    if (Number.isInteger(input)) {
        if (input === 0) return 0;
        else if ((input % 3 == 0) && (input % 5 == 0)) return 'FizzBuzz';
        else if (input % 3 == 0) return 'Fizz';
        else if (input % 5 == 0) return 'Buzz';
        else return input;
    }
    else return 'Not a number';
}

function FizzBuzz(input) {
    if (typeof input !== 'number') return 'Not a number';
    else if (input === 0) return input;
    else if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
    else return input;
}



var user = 15;
console.log(fizzBuzz(user));
console.log(FizzBuzz(user));
