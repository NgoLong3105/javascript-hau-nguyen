// 1. Default parameter value --> Giá trị tham số mặc định
function sum(a = 5, b = 10) {
  return a + b;
}
sum(); // 15
sum(10); // 20
sum(10, 20); // 30
sum(undefined, undefined); // 15
sum(undefined, null); // 5 as null is converted to 0

// 2. Rest parameter --> gom lại thành 1 nhóm
function sum(...numberList) {
  return numberList.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));

// 3. Spread operator --> tách ra từng cái
function sum(...numberList) {
  return numberList.reduce((total, num) => total + num, 0);
}

const numberList = [1, 2, 3];
console.log(sum(...numberList));

// 4. Arrow function
function sum() {} // function declaration
const sum = function () {}; // function expression
const sum = () => {}; // arrow function

const sum = (a, b) => {
  return a + b;
};
// shorthand
const sum = (a, b) => a + b;

// 5. Constructor function
function Student(id, name) {
  this.id = id;
  this.name = name;
  this.sayHello = function () {
    console.log('My name is', this.name);
  };
}

const alice = new Student(1, 'Alice');
alice.sayHello(); // My name is Alice

const bob = new Student(2, 'Bob');
bob.sayHello(); // My name is Bob

// 6. Curry function --> 1 function gọi 1 function khác
// Curry function / Higher Order Function (HOF)
function sum(x) {
  return function (y) {
    return x + y;
  };
}
console.log(sum(5)(10)); // 15

// generate increase id
function createIdGenerator(startId = 1) {
  let id = startId;
  return function () {
    return id++;
  };
}

//
const getNextId = createIdGenerator(10);
getNextId(); // 10
getNextId(); // 11
getNextId(); // 12

let a = { name: 'Long' };
let b = { age: 20 };
let c = Object.assign({}, a, b);
console.log(a === c);
