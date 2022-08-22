// Camel Notation : oneTwoThreeFour         (Convention for 'Factory Functions')
// Pascal Notation : OneTwoThreeFour        (Convention for 'Constructor Functions')

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }

    return this;
}

const circle = new Circle(1);
console.log(circle)
console.log(circle.radius);
console.log(circle.draw());