// Tính S(n) = 1 + 2 + ... + n
function total(n) {
  if (n <= 0) return 0;
  return n + total(n - 1);
}

console.log(total(5)); // 15

// s(5) = 5 + s(4);
// s(4) = 4 + s(3);
// s(3) = 3 + s(2);
// s(2) = 2 + s(1);
// s(1) = 1 + s(0);
// s(0) = 0 BASE CASE / TERMINATION

// ==========================================================

// Dãy số Fibonacci là: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function fibomacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibomacci(n - 1) + fibomacci(n - 2);
}

// f(10) = f(9) + f(8)    // 34 + 21 = 55
// f(9) = f(8) + f(7)     // 21 + 13 = 34
// f(8) = f(7) + f(6)     // 13 + 8 = 21
// f(7) = f(6) + f(5)     // 8 + 5 = 13
// f(6) = f(5) + f(4)     // 5 + 3 = 8
// f(5) = f(4) + f(3)     // 3 + 2 = 5
// f(4) = f(3) + f(2)     // 2 + 1 = 3
// f(3) = f(2) + f(1)     // 1 + 1 = 2
// f(2) = f(1) + f(0)     // 1 + 0 = 1
// f(1) = 1
// f(0) = 0

function fibomacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  let next = 1;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;

    [prev, curr] = [curr, next];
  }

  return next;
}

console.log(fibomacci(10));
