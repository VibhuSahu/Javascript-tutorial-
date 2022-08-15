// Prime (whose factors are only 1 and itself)
// Composite

function showPrimes(numbers) {
    function isPrime(number) {
        for (let factor = 2; factor < number; factor++){
            if (number % factor === 0) return false;
        }
        return true;
    }
    

    for (var num = 2; num <= numbers ; num++) {
        if (isPrime(num)) console.log(num);
    }
}


showPrimes(100);



function showPrimes(numbers) {
    for (var num = 2; num <= numbers ; num++) {
        if (isPrime(num)) console.log(num);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++){
        if (number % factor === 0) return false;
    }
    return true;
}


showPrimes(100);