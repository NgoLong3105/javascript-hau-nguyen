import {
  findSumPairV1,
  findSumPairV2,
  findMissingNumber,
  statisticsNumbers,
  findMostFrequentNumberV1,
  findMostFrequentNumberV2,
} from './logic-01-04';

// LOGIC-01: Tìm 2 số có tổng bằng số cho trước
describe('findSumPairV1(numberList, targetSum)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Should return array empty when numberList not an array', (input) => {
      expect(findSumPairV1(input, 5)).toEqual([]);
    });

    it('Shold return array empty when numberList is empty', () => {
      expect(findSumPairV1([], 5)).toEqual([]);
    });

    it.each(invalidInput)('Should return array empty when targetSum not an number', () => {
      expect(findSumPairV1([1, 2, 3], invalidInput)).toEqual([]);
    });

    it('Shold return array empty when targetSum is less than 0', () => {
      expect(findSumPairV1([], -5)).toEqual([]);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 2],
        targetSum: 2,
        expected: [],
      },
    ])(
      'Should return array empty when no two numbers in numberList are equal to the sum targetSum',
      ({ numberList, targetSum, expected }) => {
        expect(findSumPairV1(numberList, targetSum)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [3, 2, 1],
        targetSum: 5,
        expected: [2, 3],
      },
    ])(
      'Should return two numbers in ascending order when two numbers in numberList are equal to the sum targetSum',
      ({ numberList, targetSum, expected }) => {
        expect(findSumPairV1(numberList, targetSum)).toEqual(expected);
      }
    );
  });
});

describe('findSumPairV2(numberList, targetSum)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)('Should return array empty when numberList not an array', (input) => {
      expect(findSumPairV2(input, 5)).toEqual([]);
    });

    it('Shold return array empty when numberList is empty', () => {
      expect(findSumPairV2([], 5)).toEqual([]);
    });

    it.each(invalidInput)('Should return array empty when targetSum not an number', () => {
      expect(findSumPairV2([1, 2, 3], invalidInput)).toEqual([]);
    });

    it('Shold return array empty when targetSum is less than 0', () => {
      expect(findSumPairV2([], -5)).toEqual([]);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 2],
        targetSum: 2,
        expected: [],
      },
    ])(
      'Should return array empty when no two numbers in numberList are equal to the sum targetSum',
      ({ numberList, targetSum, expected }) => {
        expect(findSumPairV2(numberList, targetSum)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [3, 2, 1],
        targetSum: 5,
        expected: [2, 3],
      },
    ])(
      'Should return two numbers in ascending order when two numbers in numberList are equal to the sum targetSum',
      ({ numberList, targetSum, expected }) => {
        expect(findSumPairV2(numberList, targetSum)).toEqual(expected);
      }
    );
  });
});

// LOGIC-02: Tìm số bị thiếu cho trong một mảng từ [5..n]
describe('findMissingNumber(numberList, n)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)('Should return array empty when numberList not an array', (input) => {
      expect(findMissingNumber(input, 5)).toEqual([]);
    });

    it('Shold return array empty when numberList is empty', () => {
      expect(findMissingNumber([], 5)).toEqual([]);
    });

    it.each(invalidInput)('Should return array empty when n not an number', () => {
      expect(findMissingNumber([1, 2, 3], invalidInput)).toEqual([]);
    });

    it('Shold return array empty when n is less than 0', () => {
      expect(findMissingNumber([], -5)).toEqual([]);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [5, 6, 8, 9, 10],
        n: 10,
        expected: 7,
      },
    ])(
      'Should return missing number in sequence [5..n] when each number appears only once in the array',
      ({ numberList, n, expected }) => {
        expect(findMissingNumber(numberList, n)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [5],
        n: 6,
        expected: 6,
      },
    ])(
      'Should return missing number in sequence [5..n] when each number appears only once in the array',
      ({ numberList, n, expected }) => {
        expect(findMissingNumber(numberList, n)).toEqual(expected);
      }
    );
  });
});

// LOGIC-03: Thống kê số lần xuất hiện của các số trong mảng
describe('statisticsNumbers(numberList)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)('Should return array empty when numberList not an array', (input) => {
      expect(statisticsNumbers(input)).toEqual({});
    });

    it('Shold return array empty when numberList is empty', () => {
      expect(statisticsNumbers([])).toEqual({});
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 1, 1, 2, 2, 3],
        expected: { 1: 3, 2: 2, 3: 1 },
      },
    ])(
      'Should return count the number of occurrences of the number in the array numberList',
      ({ numberList, expected }) => {
        expect(statisticsNumbers(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [123, 456, 456, 1000, 2000, 600],
        expected: { 123: 1, 456: 2, 1000: 1, 2000: 1, 600: 1 },
      },
    ])(
      'Should return count the number of occurrences of the number in the array numberList',
      ({ numberList, expected }) => {
        expect(statisticsNumbers(numberList)).toEqual(expected);
      }
    );
  });
});

// LOGIC-04: Tìm số có số lần xuất hiện nhiều nhất
describe('findMostFrequentNumberV1(numberList)', () => {
  describe('Throw new Error("Invalid input")', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList is not an array', (input) => {
      expect(() => findMostFrequentNumberV1(input)).toThrowError('Invalid input');
    });

    it('Throw new error when numberList is empty', () => {
      expect(() => findMostFrequentNumberV1([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1],
        expected: 1,
      },
      {
        numberList: [1, 2, 3, 2],
        expected: 2,
      },
      {
        numberList: [1, 2, 3, 2, 3, 4],
        expected: 2,
      },
    ])(
      'Should return the number of the most frequent first occurrences in the array numberList',
      ({ numberList, expected }) => {
        expect(findMostFrequentNumberV1(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3, 2],
        expected: 2,
      },
    ])(
      'Should return the number of the most frequent first occurrences in the array numberList',
      ({ numberList, expected }) => {
        expect(findMostFrequentNumberV1(numberList)).toEqual(expected);
      }
    );
  });
});

describe('findMostFrequentNumberV2(numberList)', () => {
  describe('Throw new Error("Invalid input")', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList is not an array', (input) => {
      expect(() => findMostFrequentNumberV2(input)).toThrowError('Invalid input');
    });

    it('Throw new error when numberList is empty', () => {
      expect(() => findMostFrequentNumberV2([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1],
        expected: 1,
      },
      {
        numberList: [1, 2, 3, 2],
        expected: 2,
      },
      {
        numberList: [1, 2, 3, 2, 3, 4],
        expected: 2,
      },
    ])(
      'Should return the number of the most frequent first occurrences in the array numberList',
      ({ numberList, expected }) => {
        expect(findMostFrequentNumberV2(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3, 2],
        expected: 2,
      },
    ])(
      'Should return the number of the most frequent first occurrences in the array numberList',
      ({ numberList, expected }) => {
        expect(findMostFrequentNumberV2(numberList)).toEqual(expected);
      }
    );
  });
});
