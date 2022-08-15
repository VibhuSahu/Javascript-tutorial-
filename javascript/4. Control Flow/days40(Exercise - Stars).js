function Stars(num) {       // It will print Pyramid prattern of star's
    var star = ''
    for (var x = 0; x < num; x++) {
        star += '*';
        console.log(star);
    }
}


var number = 7;
Stars(number);