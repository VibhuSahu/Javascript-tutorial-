function isLandscape(width,height) {    // finding is it Landscape by if and else statement 
    if (width > height) {
        return 'Landscape';
    }
    else if (width < height) {
        return 'Portrait';
    }
    else {
        return 'Square';
    }
}

function IsLandscape(width,height) {     // finding is it Landscape by conditional statement
    return (width > height) ? 'Landscape' : 'Portrait';
}




var userWidth = 10;
var userHeight = 20;

console.log(isLandscape(userWidth,userHeight));
console.log(IsLandscape(userWidth,userHeight));