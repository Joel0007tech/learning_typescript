"use strict";
const greeting33 = "Hello, TypeScript!";
console.log(greeting33);
function printMessage(message) {
    if (typeof message === "string") {
        console.log("Message is: " + message.toUpperCase());
    }
    else {
        console.log("Provided value is not a string.");
    }
}
printMessage("Hello!");
printMessage(123);
function add(a, b) {
    return a - b;
}
let result = add(10, 20);
console.log("The answer is " + result);
let messageDet;
messageDet = "Hi";
console.log(messageDet);
function createId(id) {
    if (typeof id === "string") {
        return id.length;
    }
    else {
        console.log(id);
    }
}
const age = 24;
const firstname = "Samson";
const lastname = "Nebeolisa";
const employee = {
    x: age,
    y: firstname,
    z: lastname
};
const createEmployee = (user) => {
    console.log("The employee's age is " + user.x);
    console.log("The employee's first name is " + user.y);
    console.log("The employee's last name is " + user.z);
};
createEmployee({ x: 24, y: "Samson", z: "Nebeolisa" });
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
const number1 = [1, 2, 3];
number1.push(4);
console.log(number1);
const numbers = [1, 2, 4];
numbers.push('Joel');
console.log(numbers);
const mixed = [1, 5, 2, 6, 10, 30];
const break1 = mixed.slice(2, 4);
console.log(break1);
const functionArray = [
    () => console.log("First function"),
    () => console.log("Second function")
];
functionArray.forEach(func => func());
//# sourceMappingURL=script.js.map