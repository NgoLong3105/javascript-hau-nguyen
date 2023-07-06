// ARRAY-CD-01:
export const insertV1 = (arr, newItem, k) => {
  if (!Array.isArray(arr) || !arr.length || !Number.isInteger(newItem) || !Number.isInteger(k))
    throw new Error('Invalid input');

  if (k < 0) k = 0;
  let myArray = [...arr];
  myArray.splice(k, 0, newItem);

  return myArray;
};

export const insertV2 = (arr, newItem, k) => {
  if (!Array.isArray(arr) || !arr.length || !Number.isInteger(newItem) || !Number.isInteger(k))
    throw new Error('Invalid input');
  if (k < 0) k = 0;
  return [...arr.slice(0, k), newItem, ...arr.slice(k)];
};

// ARRAY-CD-02:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.splice(4, 11)
// console.log(arr); // [ 1, 2, 3, 4 ]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.splice(4, 11)); //[ 5, 6, 7, 8, 9, 10 ]
export const remove = (arr, k, n) => {
  if (!Array.isArray(arr) || !arr.length || !Number.isInteger(k)) throw new Error('Invalid input');
  if (k < 0 || k >= arr.length) return arr;

  let result = [...arr];
  n === undefined ? result.splice(0) : result.splice(k, n);

  return result;
};

// ARRAY-CD-03:
export const removeStudentById = (studentList, studentId) => {
  if (!Array.isArray(studentList) || !studentList.length || !Number.isInteger(studentId))
    throw new Error('Invalid input');

  return studentList.filter((student) => student.id !== studentId);
};

// ARRAY-CD-04:
export const insertIncreasing = (numberList, newNumber) => {
  if (!Array.isArray(numberList) || !Number.isInteger(newNumber)) throw new Error('Invalid input');

  return [...numberList, newNumber].sort((a, b) => a - b);
};

// ARRAY-CD-05:
export const removeDuplicatedNumbers = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');

  return numberList.filter((num) => numberList.indexOf(num) === numberList.lastIndexOf(num));
};

// ARRAY-CD-06:
export const uniqueArray = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');

  return [...new Set(numberList)];
};
