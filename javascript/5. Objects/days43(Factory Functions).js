// Simple object
const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() {
        console.log('draw');
    }
};

// Factory Functions
function createCircle(radius) {
    return {
        radius,     // radius : radius  (both are same)
        draw() {    // draw function (both are same)
            console.log('draw');
        }
    }
}


console.log(createCircle(1));
circle.draw();