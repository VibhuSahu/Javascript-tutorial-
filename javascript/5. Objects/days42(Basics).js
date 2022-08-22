//   Object-oriented Programming (OOPs)

//   Object oriented programming is basically a style of programming.where we see a program as a collection of
//   object that talk to each other to perform some functionality.

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    isVisible : true,
    draw : function() {  // Method if the fuction is in side the object
        console.log('draw');
    }
};

circle.draw(); // In this we calling the method of circle object.