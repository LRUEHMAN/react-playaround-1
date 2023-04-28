// var a = 5

// block scope
let b = 7;

const c = "Hello";

const x = true;

const y = null;
const z = undefined;

const myArr = [1, 2, 3];

console.log(myArr);

const myObj = { name: "Lutz", color: "red" };
console.log(myObj);

console.log("OBJ", myObj["name"]);

if (y == null) {
  console.log("Y is null or undefined.");
} else {
  console.log("Y is NOT null or undefined.");
}

// Functions
//
const myFunc = (input = "def") => {
  console.log("Input is: ", input);
};

let lala = myFunc;

lala("HelloLa");
lala();

lala = Lu1;

lala();

// stric comparison ===
if (b === "7") {
  console.log("B is === 7");
} else {
  console.log("B is NOT === 7");
}

console.log("Type of b: ", typeof b);

if (typeof b === "number") {
  console.log("b is number");
}

if (b) {
  console.log("b eval to truethy");
}

let x2 = (a, b) => {
  console.log(a, b);
};

let arr = [1, 2, 3, 4];

let arr2 = [...arr, 5, 6, 6];

const myObj2 = { name: "Lutz", color: "red" };

const { name } = myObj2;

console.log("Name: ", myObj2.name);
console.log("Name: ", myObj2["name"]);

myHelpFunc();

myHelpFunc2();
