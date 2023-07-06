// ARRAY-FILTER-01:
export const generateNumberInRange = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error('Invalid input');

  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
};

// ARRAY-FILTER-02:
export const findNumbers = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  let arr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] < numberList[i + 1]) {
      arr.push(numberList[i + 1]);
    }
  }
  return arr;
};

// ARRAY-FILTER-03:
export const generateFibonaci = (n) => {
  if (!Number.isInteger(n) || n <= 0) throw new Error('Invalid input');

  let num = [0, 1];

  while (num[num.length - 1] < n) {
    num.push(num[num.length - 1] + num[num.length - 2]);
  }

  return num.splice(0, num.length - 1);
};

// ARRAY-FILTER-04:
export const generatePrimeNumbers = (n) => {
  if (!Number.isInteger(n) || n <= 0) throw new Error('Invalid input');

  const prime = [2, 3];
  for (let i = 2; i < n; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) prime.push(i);
  }
  return prime;
};

// ARRAY-FILTER-05: Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
export const findAllNumbers = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  let firstNumber = numberList.find((num) => num % 2 === 0 && num > 0);
  let result = numberList.filter((num) => num === firstNumber);

  return result.length > 0 ? result.splice(1, result.length - 1) : [];
};

// ARRAY-FILTER-06: Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
export const filterAllNumber = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  return numberList.filter((num) => Math.abs(num).toString().charAt(0) % 2 !== 0);
};

// ARRAY-FILTER-07:
export const findAllStudents = (studentList) => {
  if (!Array.isArray(studentList) || !studentList.length) throw new Error('Invalid input');

  let result = studentList.filter((student) => student.math < 5);

  return result.length > 0 ? result : [];
};

// ARRAY-FILTER-08:
export const findAllProducts = (productList) => {
  if (!Array.isArray(productList) || !productList.length) throw new Error('Invalid input');

  let result = productList.filter((product) => product.isFreeShip === true);

  return result.length > 0 ? result : [];
};

// ARRAY-FILTER-09:
export const findAllIphones = (productList) => {
  if (!Array.isArray(productList) || !productList.length) throw new Error('Invalid input');

  let result = productList.filter(
    (product) =>
      product.name
        .toLowerCase()
        .split(' ')
        .find((value) => value === 'iphone') && product.amount > 0
  );

  return result.length > 0 ? result : [];
};
