// lesson 1:
export const findMinPositiveV1 = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length === 0) return undefined;

  let positive = numberList.filter((num) => num > 0);

  return positive.length ? Math.min(...positive) : undefined;
};

export const findMinPositiveV2 = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length === 0) return undefined;

  let positive = numberList.filter((num) => num > 0);
  if (positive.length === 0) return undefined;

  let minNumber = positive[0];
  for (let i = 1; i < positive.length; i++) {
    if (minNumber > positive[i]) return (minNumber = positive[i]);
  }

  return minNumber;
};

// lesson 2:
export const findLongestWord = (wordList) => {
  if (!Array.isArray(wordList)) throw new Error('Invalid input');

  return wordList.length !== 0
    ? wordList.find((words) => words.length <= 5) || 'empty string'
    : 'empty string';
};

// lesson 3:
export const findFirstPositiveEven = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');

  return numberList.length !== 0 ? numberList.find((num) => num > 0 && num % 2 === 0) : undefined;
};

// lesson 4:
export const findLastNegativeOdd = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length === 0) return undefined;

  let oddNumber = numberList.filter((num) => num < 0 && num % 2 !== 0);

  return oddNumber.reverse().find((num) => num);
};

// lesson 5:
// let numberList = [1, 5, 2, 3];
// for (let i = 0; i < numberList.length - 1; i++) {
//   for (let j = 0; j < numberList.length - i - 1; j++) {
//     if (numberList[j] < numberList[j + 1]) {
//       let temp = numberList[j];
//       numberList[j] = numberList[j + 1];
//       numberList[j + 1] = temp;
//     }
//   }
// }
// console.log(numberList);
export const findSecondLargestNumberV1 = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length <= 1) return undefined;

  return [...new Set(numberList)].sort((a, b) => b - a)[1];
};

export const findSecondLargestNumberV2 = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length <= 1) return undefined;

  let uniqueNumbers = [...new Set(numberList)];

  return uniqueNumbers.length === 1 ? undefined : uniqueNumbers.sort((a, b) => b - a)[1];
};

// lesson 6:
export const findLastPerfectSquareV1 = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let arr = [];
  for (let i = 0; i < numberList.length; i++) {
    let sqrtNumbers = Math.sqrt(numberList[i]);
    let truncNumbers = Math.trunc(sqrtNumbers);
    if (truncNumbers * truncNumbers === numberList[i] && numberList[i] > 0) {
      arr.push(numberList[i]);
    }
  }

  return arr.length > 0 ? arr[arr.length - 1] : undefined;
};

export const findLastPerfectSquareV2 = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) return;

  const perfectSquares = numberList.filter((num) => Number.isInteger(Math.sqrt(num)) && num > 0);
  return perfectSquares.length > 0 ? perfectSquares[perfectSquares.length - 1] : undefined;
};

// lesson 7:
export const findFirstEmail = (strList) => {
  if (!Array.isArray(strList) || !strList.length) return undefined;

  return strList
    .filter((email) => (email.includes('@') && email.includes('.com')) || email.includes('.vn'))
    .find((email) =>
      email.split('.')[0].split('@')[0].length >= 3 && email.split('.')[0].split('@')[1].length >= 3
        ? email
        : undefined
    );
};

// lesson 8:
export const findLastUrlV1 = (strList) => {
  if (!Array.isArray(strList) || !strList.length) return undefined;

  let result = strList
    .filter(
      (str) =>
        (str.includes('http') ||
          str.includes('https') ||
          str.includes('ws') ||
          str.includes('wss')) &&
        (str.includes('.com') || str.includes('.vn'))
    )
    .map((url) =>
      url
        .replace(/(http:\/\/|https:\/\/|ws:\/\/|wss:\/\/)/gm, '')
        .replace(/(.com|.vn|.com.vn)/gm, '')
    )
    .reduce((count, url) => {
      if (url.split('.')[0].length >= 3) return count + 1;
    }, 0);

  return result > 0 ? strList[result - 1] : undefined;
};

export const findLastUrlV2 = (strList) => {
  if (!Array.isArray(strList) || !strList.length) return;

  const result = strList
    .filter((str) => /(https?|wss?):\/\/.+(\.com|\.vn)/.test(str))
    .map((url) => url.replace(/(http:\/\/|https:\/\/|ws:\/\/|wss:\/\/)|(\.com.vn|.com|.vn)/g, ''))
    .reduce((count, url, i) => (url.split('.')[0].length >= 3 ? i + 1 : count), 0);

  return result ? strList[result - 1] : undefined;
};

// lesson 9:
export const findStudentById = (studentList, studentId) => {
  if (!Array.isArray(studentList) || !studentList.length) return -1;
  if (!Number.isInteger(studentId) || studentId <= 0) return -1;

  return studentList.findIndex((student) => student.id === studentId);
};

// lesson 10:
export const findProductByCode = (productList, code) => {
  if (!Array.isArray(productList) || !productList.length) throw new Error('Invalid input');
  if (typeof code !== 'string' || code.trim().length === 0) return -1;

  return productList.findIndex((product) => product.code === code);
};

// lesson 11:
export const findStudentHavingHighestMarkV1 = (studentList) => {
  if (!Array.isArray(studentList) || !studentList.length) throw new Error('Invalid input');

  let highMark = studentList.reduce((mark, student) => {
    if (student.math > mark) mark = student.math;
    return mark;
  }, 0);

  return studentList.find((student) => student.math === highMark);
};

export const findStudentHavingHighestMarkV2 = (studentList) => {
  if (!Array.isArray(studentList) || !studentList.length) throw new Error('Invalid input');

  const highMark = Math.max(...studentList.map((student) => student.math));
  return studentList.find((student) => student.math === highMark);
};

// lesspon 12:
export const findLastStudentHavingMinAvg = (studentList) => {
  if (!Array.isArray(studentList) || !studentList.length) throw new Error('Invalid input');

  let minGPA = Math.min(...studentList.map((student) => (student.math + student.english) / 2));
  return studentList.reverse().find((student) => (student.math + student.english) / 2 === minGPA);
};

// lesson 13:
export const findStudent = (studentList) => {
  if (!Array.isArray(studentList) || !studentList.length) throw new Error('Invalid input');

  return studentList.find((student) => {
    const totalScores = Object.values(student.marks).reduce((sum, score) => sum + score, 0);
    const mediumScoresGreate5 = totalScores.toFixed(2) / Object.keys(student.marks).length >= 5;
    return (
      mediumScoresGreate5 &&
      (student.marks.math < 5 || student.marks.english < 5 || student.marks.programming < 5)
    );
  });
};

// lesson 14:
export const findProductHavingFreeShip = (productList) => {
  if (!Array.isArray(productList) || !productList.length) throw new Error('Invalid input');

  return productList.find((product) => product.isFreeShip === true);
};

// lesson 15:
export const findFirstIphone = (productList) => {
  if (!Array.isArray(productList) || !productList.length) throw new Error('Invalid input');

  let result = productList.find((product) =>
    product.name
      .toLowerCase()
      .split(' ')
      .some((val) => val === 'iphone')
  );

  return result;
};
