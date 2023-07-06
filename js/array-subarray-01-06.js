import { number } from 'yargs';

// ARRAY-SUBARR-01: Tìm các mảng con tăng dần có ít nhât 2 phần tử
export const findAllIncreasingSubArr = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  const result = [];
  let temparr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0 || numberList[i] > numberList[i - 1]) {
      temparr.push(numberList[i]);
    } else {
      if (temparr.length > 1) result.push(temparr);
      temparr = [numberList[i]];
    }
  }
  if (temparr.length > 1) result.push(temparr);

  return result;
};

// ARRAY-SUBARR-02: Tìm các mảng con giảm dần có ít nhất 3 phần tử
export const findAllDecreasingSubArr = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  const result = [];
  let temparr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0 || numberList[i] < numberList[i - 1]) {
      temparr.push(numberList[i]);
    } else {
      if (temparr.length >= 3) result.push(temparr);
      temparr = [numberList[i]];
    }
  }

  if (temparr.length >= 3) result.push(temparr);

  return result;
};

// ARRAY-SUBARR-03: Kiểm tra mảng a có phải là mảng con của mảng b
export const isSubArrayV1 = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) throw new Error('Invalid input');
  if (a.length === 0) return true;

  let arr = [];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) arr.push(b[j]);
    }
  }

  let count = [];
  for (let i = 0; i < arr.length; i++) {
    count.push(b.indexOf(arr[i]));
  }

  for (let i = 1; i < count.length; i++) {
    if (count[i] - count[i - 1] !== 1) {
      return false;
    }
  }

  return a.length == arr.length;
};

export const isSubArrayV2 = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Invalid input');
  }

  const lastIndex = b.lastIndexOf(a[0]);
  let result = a.length === 0 || (lastIndex !== -1 && a.every((el, i) => el === b[lastIndex + i]));

  return result;
};

// ARRAY-SUBARR-04: Tìm các mảng con có chứa số dương chẳn liên tiếp
export const findAllPositiveEvenSubArrV1 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  const result = [];
  let temparr = [];
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) temparr.push(number);

    if (temparr.length > 1 && (number % 2 === 1 || i === numberList.length - 1)) {
      result.push(temparr);
      temparr = [];
    }
  }

  return result;
};

export const findAllPositiveEvenSubArrV2 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  const result = [];
  let temparr = [];
  numberList.forEach((number, index) => {
    if (number % 2 === 0) temparr.push(number);
    if (temparr.length > 1 && (number % 2 === 1 || index === numberList.length - 1)) {
      result.push(temparr);
      temparr = [];
    }
  });

  return result;
};

// ARRAY-SUBARR-05: Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
export const findMaxSumArray = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');

  let arr = [];
  let temparr = [];
  for (let i = 0; i < numberList.length; i++) {
    if (i === 0 || numberList[i] > numberList[i - 1]) temparr.push(numberList[i]);
    if ((temparr.length > 0 && numberList[i] > numberList[i + 1]) || i === numberList.length - 1) {
      if (temparr.length > 1) arr.push(temparr);
      temparr = [];
    }
  }

  return arr.reduce((maxArr, subArr) => {
    let totalSubArr = subArr.reduce((total, num) => total + num, 0);
    maxArr > totalSubArr ? maxArr : (maxArr = totalSubArr);
    return maxArr;
  }, 0);
};

// ARRAY-SUBARR-06: Tìm mảng con tăng dần có tổng lớn nhất, trả về mảng con đầu tiên
export const findMaxSumSubArray = (numberList) => {
  if (!Array.isArray(numberList)) throw new Error('Invalid input');
  if (!numberList.length) return [];

  const arr = [];
  let temparr = [];
  numberList.forEach((num, i) => {
    if (i === 0 || num > numberList[i - 1]) {
      temparr.push(num);
    } else {
      if (temparr.length >= 2) arr.push(temparr);
      temparr = [num];
    }
  });
  if (temparr.length >= 2) arr.push(temparr);

  let totalNumbers = arr.reduce((subArr, max) => {
    let total = max.reduce((total, num) => total + num, 0);
    return subArr < total ? (subArr = total) : subArr;
  }, 0);

  let result = arr.find((el) => {
    return el.reduce((total, num) => total + num, 0) === totalNumbers;
  });

  return result;
};
