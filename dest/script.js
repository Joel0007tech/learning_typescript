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
let myActivities;
myActivities = ["Joel", true];
console.log(myActivities);
let tuple;
const user1 = ["Joel", 7];
const user2 = ["Dorcas", 22, true];
const user3 = ["Hello", 99, false, true];
const user4 = ["World", true, 30, 45];
const change = user4.slice(0, 2);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(change);
const response = [200, "Success", "Failure"];
if (response[0] === 200) {
    console.log(`Response: ${response[2]}`);
}
function logMessage(logLevel) {
    const [level, ...messageParts] = logLevel;
    console.log(`Level ${level}:`, messageParts.join(" "));
}
logMessage([1, "System", "Error", "occurred"]);
logMessage([2, "User", "logged", "in"]);
//# sourceMappingURL=script.js.map