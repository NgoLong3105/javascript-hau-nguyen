// Viết hàm hasEvenNumberGreaterThanN(numberList, n)
// Kiểm tra có số chẵn lớn hơn n trong mảng không

// lesson 1:
export const hasEvenNumberGreaterThanN = (numberList, n) => {
  if (!Array.isArray(numberList) || numberList.length === 0) throw new Error('Invalid input');
  if (!Number.isInteger(n) || n <= 0) throw new Error('Invalid input');

  let result = false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      if (numberList[i] > n) {
        result = true;
        break;
      }
    }
  }

  return result;
};

export const hasEvenNumberGreaterThanNv1 = (numberList, n) => {
  if (!Array.isArray(numberList) || numberList.length === 0) throw new Error('Invalid input');
  if (!Number.isInteger(n) || n <= 0) throw new Error('Invalid input');

  let result = false;
  numberList.forEach((number) => {
    if (number % 2 === 0) if (number > n) result = true;
  });

  return result;
};

// lesson 2:
export const hasOddNumberDivisibleBy3 = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) throw new Error('Invalid input');

  let result = false;
  numberList.forEach((number) => {
    if (number % 2 !== 0) {
      if (number % 3 === 0) result = true;
    }
  });

  return result;
};

export const hasOddNumberDivisibleBy3V1 = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) throw new Error('Invalid input');

  return numberList.some((number) => number % 2 !== 0 && number % 3 === 0);
};

// lesson 3:
// check wordList có chứa easy và frontend
export const hasEasyFrontendV1 = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) throw new Error('Invalid input');

  return (
    wordList.includes('easy fontend') || (wordList.includes('easy') && wordList.includes('fontend'))
  );
};

export const hasEasyFrontendV2 = (wordList) => {
  if (!Array.isArray(wordList) || wordList.length === 0) throw new Error('Invalid input');

  let result = wordList.reduce((str, word) => {
    word === 'easy fontend' || word === 'easy' || word === 'fontend' ? (str += `${word} `) : '';
    return str;
  }, '');

  return result.trim() === 'easy fontend';
};

// lesson 4:
export const hasTruthy = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Invalid input');

  return arr.some(Boolean);
};

export const hasTruthyAll = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Invalid input');

  return arr.length > 0 && arr.every(Boolean);
};

// lesson 5:
export const hasFalsy = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Invalid input');

  return arr.some((val) => !val || val.length === 0);
};

export const hasFalsyAll = (arr) => {
  if (!Array.isArray(arr)) throw new Error('Invalid input');

  return arr.every((val) => !val || val.length === 0);
};

// lesson 6:
// check studentList có student nào có id là studentId không?
export const hasStudent = (studentList, studentId) => {
  if (!Number.isInteger(studentId) || !Array.isArray(studentList) || studentList.length === 0)
    throw new Error('Invalid input');

  return studentList.find((student) => student.id === studentId) !== undefined;
};

// lesson 7:
// check studentList có student nữ nào có tên là Alice không? (không phân biệt hoa thường)
export const hasAlice = (studentList) => {
  if (!Array.isArray(studentList) || studentList.length === 0) throw new Error('Invalid input');

  return !!studentList.find(
    (student) => student.name.toLowerCase() === 'alice' && student.gender === 'female'
  );
};

// lesson 8:
// check productList nào freeship và giá nhỏ hơn price không?
export const hasFreeShip = (productList, price) => {
  if (!Number.isInteger(price) || !Array.isArray(productList) || productList.length === 0)
    throw new Error('Invalid input');

  return productList.some((product) => product.isFreeShip === true && product.price <= price);
};

// lesson 9:
export const isIncreasingNumberList = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length === 0) throw new Error('Invalid input');

  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] >= numberList[i + 1]) return false;
  }
  return true;
};

// lesson 10:
export const isDecreasingNumberList = (numberList) => {
  if (!Array.isArray(numberList) || numberList.length <= 1) throw new Error('Invalid input');

  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] <= numberList[i + 1]) return false;
  }
  return true;
};

// lesson 11:
export const isSymmetricList = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length === 0) return false;

  return numberList.join() === [...numberList].reverse().join();
};

// lesson 12:
// check array numberList contains number fibonacci less than 100?
export const hasFibonaciNumber = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length === 0) return false;

  let a = 0,
    b = 1,
    result = 0,
    arr = [];
  for (let i = 0; i < 100; i++) {
    if (result < 100) arr.push((result = a + b));
    a = b;
    b = result;
  }

  return numberList.some((number) => arr.includes(number));
};

export const hasFibonaciNumberV1 = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (numberList.length === 0) return false;

  const n = [0, 1];
  while (n[n.length - 1] < 100) {
    n.push(n[n.length - 1] + n[n.length - 2]);
  }

  return numberList.some((number) => n.includes(number));
};
