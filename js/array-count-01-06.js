// ARRAY-COUNT-01:
export const countPositiveEvenNumbers = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  return numberList.filter((num) => num % 2 === 0 && num > 0).length;
};

// ARRAY-COUNT-02:
export const countNumbers = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  let arr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] > numberList[i + 1]) {
      arr.push(numberList[i + 1]);
    }
  }

  return arr.length;
};

// ARRAY-COUNT-03:
export const countWords = (wordList, n) => {
  if (!Array.isArray(wordList) || !wordList.length) throw new Error('Invalid input');
  if (!Number.isInteger(n) || n <= 0) return 0;

  return wordList.filter((word) => word.toString().length >= n).length;
};

// ARRAY-COUNT-04:
export const countUniqueNumbers = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (!numberList.length) return 0;

  let result = [...new Set(numberList)].filter((num) => num > 0);

  return result.length > 0 ? result.length : 0;
};

// ARRAY-COUNT-05:
export const countNumbersNotInBV1 = (a, b) => {
  if (!Array.isArray(a) || !a.length) throw new Error('Invalid input');
  if (!Array.isArray(b) || !b.length) throw new Error('Invalid input');

  let arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) arr.push(a[i]);
    }
  }

  return a.length - [...new Set(arr)].length;
};

export const countNumbersNotInBV2 = (a, b) => {
  if (!Array.isArray(a) || !a.length || !Array.isArray(b) || !b.length)
    throw new Error('Invalid input');

  return a.filter((x) => !b.includes(x)).length;
};

// ARRAY-COUNT-06:
export const countStudents = (studentList, avgMark) => {
  if (!Array.isArray(studentList) || !studentList.length) throw new Error('Invalid input');
  if (!Number.isInteger(avgMark) || avgMark < 0 || avgMark > 10)
    throw new Error('Please enter a number from 0 to 10');

  let result = studentList.filter(
    (student) =>
      Object.values(student.marks).reduce((total, score) => total + score, 0) /
        Object.keys(student.marks).length >=
      avgMark
  );

  return result.length;
};
