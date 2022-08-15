

// Performing a task 
function greet(name,lastName) {   // 'name' is parameter
    console.log("Hello World " + name + " " + lastName);

}


// Calculating a value
function sqare(number) {
    return number * number;
}




greet("Vibhu","sahu");    // 'Vibhu Sahu' is Argument

let number = sqare(2);
console.log(number);


// In this how many function call is there.
console.log(sqare(3)) // In this line there are two function calls 1. console.log()
                                                               //  2. sqare()