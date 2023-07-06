// iterator protocals
function createIterator(n) {
  let i = 0;

  return {
    next() {
      const result = {
        value: i,
        done: i >= n,
      };

      i += 1;
      return result;
    },
  };
}

const iterator = createIterator(10);
let result = iterator.next();
while (!result.done) {
  console.log(result.value);

  result = iterator.next();
}

// iterable protocals
function createIterable(n) {
  let i = 0;

  return {
    [Symbol.iterator]() {
      return {
        next() {
          const result = {
            value: [i, i * 2],
            done: i >= n,
          };

          i += 5;
          return result;
        },
      };
    },
  };
}

const iterable = createIterable(20);
for (let [number, numberX2] of iterable) {
  console.log(number, numberX2);
}

for (let number of [10, 20, 30]) {
  console.log(number);
}
