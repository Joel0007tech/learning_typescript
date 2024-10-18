const greeting33 : string = "Hello, TypeScript!";
console.log(greeting33);

function printMessage(message: any) {
    if (typeof message === "string") {
      // If the value is a string, print the message in uppercase.
        console.log("Message is: " + message.toUpperCase());
    } else {
      // If the value is not a string, alert the user.
        console.log("Provided value is not a string.");
    }
}

printMessage("Hello!");  // Output: Message is: HELLO!
printMessage(123);       // Output: Provided value is not a string.

function add(a: number, b: number) {
    return a - b; // TypeScript infers the return type as 'number'
  }

  let result = add(10, 20); // result is inferred as 'number'
  console.log("The answer is " + result );
  
  let messageDet: string 
  messageDet = "Hi"
  console.log(messageDet);
  
  function createId(id: number | string) {
    if (typeof id === "string") {
      // Here, TypeScript knows 'id' is a string
      return id.length;
    } else {
      // Here, TypeScript knows 'id' is a number
      console.log(id);
    }
  }

  type Age = number | string;  // Age can be a number or a string
  type FirstName = string;
  type LastName = string;

  // Now Let’s use type aliases to describe the structure of object
  type Employee = {
    x: Age,
    y: FirstName,
    z: LastName
  };

  // Let’s use the Employee type alias to create an actual employee object:

  const age: Age = 24;  // Age can be a number or string
  const firstname: FirstName = "Samson";
  const lastname: LastName = "Nebeolisa";

  const employee: Employee = {
    x: age,      // x represents the age (number or string)
    y: firstname, // y is the first name
    z: lastname   // z is the last name
  };

  const createEmployee = (user: Employee) => {
    console.log("The employee's age is " + user.x);
    console.log("The employee's first name is " + user.y);
    console.log("The employee's last name is " + user.z);
  };

  createEmployee({ x: 24, y: "Samson", z: "Nebeolisa" }); // function call

  // output:
  // The employee's age is 24
  // The employee's first name is Samson
  // The employee's last name is Nebeolisa

  type IsTrue = boolean;
  type Ages = string | number;

  type Details = {
    a: IsTrue
    b: Ages
  }

  const isTrue: IsTrue = true;
  const ages: Ages = 23;

  const details: Details = {
    a: isTrue,
    b: ages
  }

  const myDetails = (me: Details) => {
    console.log("My age is " + me.a);
    console.log("I am " + me.b); 
  };

  myDetails({ a:isTrue, b:ages})

  const number1: number[] = [1, 2, 3]
  number1.push(4);
  console.log(number1);
  
  const numbers: any= [1, 2, 4]
  numbers.push('Joel');

  console.log(numbers);

  const mixed: number[] =[1, 5, 2, 6, 10, 30]
  const break1 = mixed.slice(2,4)
  console.log(break1);

  const functionArray: Array<() => void> = [
    () => console.log("First function"),
    () => console.log("Second function")
  ];

  functionArray.forEach(func => func());  // This will call both functions.

  let myActivities: [string, boolean];
  myActivities = ["Joel", true];

  console.log(myActivities);

  let tuple: [number, ...string[]];
   type StringNumberBooleans = [string, number, ...boolean[]];
   type StringBooleanNumber = [string, boolean, ...number[]]

  
   const user1: StringNumberBooleans = ["Joel", 7];
   const user2: StringNumberBooleans = ["Dorcas", 22, true];
   const user3: StringNumberBooleans = ["Hello",  99, false, true]
   const user4: StringBooleanNumber = ["World", true, 30, 45]

  const change = user4.slice(0,2)

  console.log(user1);
  console.log(user2);
  console.log(user3);
  console.log(user4);
  console.log(change);
  
  
  
  
  
  