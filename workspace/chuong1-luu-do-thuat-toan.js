// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n
const sumAllNum = (n) => {
  if (!Number.isInteger(n) || n < 0) return -1;

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }

  return total;
};
console.log(sumAllNum(4));

// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2
const sumAllPowNum = (n) => {
  if (!Number.isInteger(n) || n < 0) return -1;

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += Math.pow(i, 2);
  }

  return total;
};
console.log(sumAllPowNum(4));

// Bài 3: Tính S(n) = 1 + ½ + 1/3 + … + 1/n
const sumAllDecimal = (n) => {
  if (!Number.isInteger(n) || n < 0) return -1;

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += n;
  }

  return total;
};
console.log(sumAllDecimal(1));

console.log(1 / 4);
console.log(Math);
