function countTruthy(array) {       // It will return the number of Truthy values
    point = 0
    for (element of array) {
        if (element) point += 1;
    }
    return 'Point : ' + point;
}


var arr = [null,undefined,3];
console.log(countTruthy(arr));