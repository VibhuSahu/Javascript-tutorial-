function sumMultiples(number) {     // Sum of multiples 3 and 5 in the range 0 to number.
    sum = 0

    for (var x = 0; x <= number; x++) {
        if ((x % 3 === 0) && (x % 5 === 0)) sum = sum + x + x;
        else if (x % 3 === 0) sum += x;
        else if (x % 5 === 0) sum += x;
        else continue;
    }

    return 'Sum of Multiples of 3 and 5 : ' + sum;
}


var num = 5;
console.log(sumMultiples(num));