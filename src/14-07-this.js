// ---------- non-strict mode ----------
// (function () {
//   console.log(this); // --> window or global
// })();

// [1, 2, 3].forEach(function (number) {
//   console.log(this); // -->  window or global
// });

// ---------- 'use strict' ----------
// (function () {
//   console.log(this); // --> undefined
// })();

// [1, 2, 3].forEach(function (number) {
//   console.log(this); // -->  undefined
// });

'use strict';

function studentHello(a, b) {
  console.log(this.name, a + b);
}

const student = {
  name: 'long',
  age: 20,
};

studentHello.apply(student, [1, 2]);
studentHello.call(student, 3, 5);
const hello = studentHello.bind(student);
hello(10, 30);
