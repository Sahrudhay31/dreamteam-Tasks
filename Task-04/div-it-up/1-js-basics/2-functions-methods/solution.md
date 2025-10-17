// 1. Function that doesn't return anything
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// 2. Function that returns something
function square(number) {
    return number * number;
}

// 3. Function with multiple parameters
function addNumbers(a, b) {
    return a + b;
}

// 4. Function with default parameter
function introduce(name, country = "India") {
    console.log(`My name is ${name}, and I’m from ${country}.`);
}

// 5. Function with a mix of required and default parameters
function makeSandwich(bread, filling = "cheese", sauce = "mayo") {
    console.log(`Here’s your ${bread} sandwich with ${filling} and ${sauce}.`);
}

// 6. Function returning multiple values (using an object)
function mathOperations(x, y) {
    return {
        add: x + y,
        sub: x - y,
        mul: x * y,
        div: y !== 0 ? x / y : null
    };
}


// -------------------------------
// 👨‍💻 Let's test them
greet("Sahrudhay");

console.log("Square of 5:", square(5));
console.log("Sum of 3 and 7:", addNumbers(3, 7));

introduce("Vishnu");
introduce("Cutie"UK");

makeSandwich("brown bread");
makeSandwich("white bread", "chicken", "mustard");

const results = mathOperations(10, 2);
console.log("Results →", results);


# OUTPUT
Hello, Sahrudhay!
Square of 5: 25
Sum of 3 and 7: 10
My name is Vishnu, and I’m from India.
My name is Cutie, and I’m from UK.
Here’s your brown bread sandwich with cheese and mayo.
Here’s your white bread sandwich with chicken and mustard.
Results → Add: 12 Sub: 8 Mul: 20 Div: 5.0


