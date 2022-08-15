// JavaScript is a dynamic laguage 
// JavaScript alous to change,add,remove the property in object but cannot be 

const circle = {
    radius : 1
};

circle.color = 'Yellow';        // It will add the 'color' property in the 'circle object'.
circle.draw = function() {}     // It will add the 'draw' function in the 'circle object'.

delete circle.draw;     // It will delete the following property 'draw'
delete circle.color;    // It will delete the following property 'color'


console.log(circle);
