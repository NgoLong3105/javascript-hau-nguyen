// LOGIC-01: Tìm 2 số có tổng bằng số cho trước
export const findSumPairV1 = (numberList, targetSum) => {
  if (!Array.isArray(numberList) || !numberList.length) return [];
  if (!Number.isInteger(targetSum) || targetSum < 0) return [];

  let arr = [];
  for (let i = 0; i < numberList.length; i++) {
    let temparr = targetSum - numberList[i];
    if (numberList.find((el) => el === temparr)) {
      arr.push(numberList[i]);
    }
  }

  return arr.length === 2 ? arr.sort((a, b) => a - b) : [];
};

export const findSumPairV2 = (numberList, targetSum) => {
  if (!Array.isArray(numberList) || !numberList.length) return [];
  if (!Number.isInteger(targetSum) || targetSum < 0) return [];

  const numMap = {};

  return numberList.reduce((result, currentNum, index) => {
    const complement = targetSum - currentNum;
    if (numMap[complement] !== undefined) {
      result = [Math.min(currentNum, complement), Math.max(currentNum, complement)];
    }
    numMap[currentNum] = index;
    return result;
  }, []);
};

// LOGIC-02: Tìm số bị thiếu cho trong một mảng từ [5..n]
export const findMissingNumber = (numberList, n) => {
  if (!Array.isArray(numberList) || !numberList.length) return [];
  if (!Number.isInteger(n) || n < 5) return [];

  for (let i = 5; i <= n; i++) {
    if (!numberList.includes(i)) return i;
  }
};

// LOGIC-03: Thống kê số lần xuất hiện của các số trong mảng
export const statisticsNumbers = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) return {};

  return numberList.reduce((obj, num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    return obj;
  }, {});
};

// LOGIC-04: Tìm số có số lần xuất hiện nhiều nhất
export const findMostFrequentNumberV1 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  let countObj = numberList.reduce((obj, num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    return obj;
  }, {});

  return Number(
    Object.keys(countObj).reduce((a, b) => {
      return countObj[a] >= countObj[b] ? a : b;
    })
  );
};

export const findMostFrequentNumberV2 = (numberList) => {
  if (!Array.isArray(numberList) || !numberList.length) throw new Error('Invalid input');

  let statistics = {};
  let maxKey = undefined;

  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];

    statistics[number] = statistics[number] ? statistics[number] + 1 : 1;

    if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
      maxKey = number;
    }
  }

  return Number.parseInt(maxKey);
};
