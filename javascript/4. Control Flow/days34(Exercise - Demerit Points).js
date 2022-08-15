// Speed Limit = 70
// s -> 1 point
// Math.floor(1.3)
// 12 points -> License suspeended

function checkSpeed(speed) {    // It help you to checkSpeed and return appropiate result
    point = 0
    if (speed < 75) return 'Ok';

    for (let x = 75; x <= speed; x += 5) {
        point += 1;
    }
    if (point >= 12) return 'License \nsuspeended'
    return 'Point : ' + point;
}

function CheckSpeed(speed) {     // It help you to checkSpeed and return appropiate result
    var speedLimit = 70;
    var speedPoint = 5;

    if (speed < speedLimit + speedPoint) return 'Ok';

    const point = Math.floor((speed - speedLimit)/speedPoint);
    if (point >= 12) return 'License \nsuspeended';
    return 'point : ' + point;
}


var user = 75;

console.log(checkSpeed(user));
console.log(CheckSpeed(user))