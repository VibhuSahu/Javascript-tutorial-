// Exercise
// Write a function that takes two numbers and returns the maximum of the two.

// In this we used the conditional operator 
function MaxNumber(ls) {
    return (ls[0] >= ls[1]) ? ls[0] : ls[1];
}





// In this we used the if else statment 
function max(ls) {  // this function return the bigest of list
    if (ls[0] > ls[1]) {
        return ls[0];
    }
    else{
        return ls[1];
    }
}




// In this we used the biltin function "Math.max.apply"
function maxNumber(ls) {        // this function return the bigest of list
    return Math.max.apply(null,user);
    
}


var user = [1,4];



console.log(MaxNumber(user));   // 4
console.log(max(user));         // 4
console.log(maxNumber(user));   // 4