"use strict";
const greeting33 = "Hello, TypeScript!";
console.log(greeting33);
function printMessage(message) {
    if (typeof message === "string") {
        // If the value is a string, print the message in uppercase.
        console.log("Message is: " + message.toUpperCase());
    }
    else {
        // If the value is not a string, alert the user.
        console.log("Provided value is not a string.");
    }
}
printMessage("Hello!"); // Output: Message is: HELLO!
printMessage(123); // Output: Provided value is not a string.
function add(a, b) {
    return a - b; // TypeScript infers the return type as 'number'
}
let result = add(10, 20); // result is inferred as 'number'
console.log("The answer is " + result);
let messageDet;
messageDet = "Hi";
console.log(messageDet);
function createId(id) {
    if (typeof id === "string") {
        // Here, TypeScript knows 'id' is a string
        return id.length;
    }
    else {
        // Here, TypeScript knows 'id' is a number
        console.log(id);
    }
}
// Let’s use the Employee type alias to create an actual employee object:
const age = 24; // Age can be a number or string
const firstname = "Samson";
const lastname = "Nebeolisa";
const employee = {
    x: age, // x represents the age (number or string)
    y: firstname, // y is the first name
    z: lastname // z is the last name
};
const createEmployee = (user) => {
    console.log("The employee's age is " + user.x);
    console.log("The employee's first name is " + user.y);
    console.log("The employee's last name is " + user.z);
};
createEmployee({ x: 24, y: "Samson", z: "Nebeolisa" }); // function call
const isTrue = true;
const ages = 23;
const details = {
    a: isTrue,
    b: ages
};
const myDetails = (me) => {
    console.log("My age is " + me.a);
    console.log("I am " + me.b);
};
myDetails({ a: isTrue, b: ages });
