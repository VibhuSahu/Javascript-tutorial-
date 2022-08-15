function checkNumber(number) {      // It help you to print even and odd number 

    for (var num = 0; num <= number; num++){
        show = (num % 2 === 0) ? 'Even Number' : 'Odd Number';
        console.log(num + ' - ' + show);
    }
    
}
// zero is an even number
// 1 is an odd number


var user = 10;
checkNumber(user);