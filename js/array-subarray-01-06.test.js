// ARRAY-SUBARR-01: Tìm các mảng con tăng dần
import {
  findAllIncreasingSubArr,
  findAllDecreasingSubArr,
  isSubArrayV1,
  isSubArrayV2,
  findAllPositiveEvenSubArrV1,
  findAllPositiveEvenSubArrV2,
  findMaxSumArray,
  findMaxSumSubArray,
} from './array-subarray-01-06';

describe('findAllIncreasingSubArr(numberList)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList not an array', (input) => {
      expect(() => findAllIncreasingSubArr(input)).toThrowError('Invalid input');
    });

    it('Throw new error when numberList is empty', () => {
      expect(() => findAllIncreasingSubArr([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1],
        expected: [],
      },
    ])('Return array empty', ({ numberList, expected }) => {
      expect(findAllIncreasingSubArr(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [1, 2, 3, -5],
        expected: [[1, 2, 3]],
      },
    ])(
      'Returns an incrementing subarray when there are at least 2 elements and the element in any position is always greater than its adjacent word',
      ({ numberList, expected }) => {
        expect(findAllIncreasingSubArr(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3, -5, -10, 5, 10],
        expected: [
          [1, 2, 3],
          [-10, 5, 10],
        ],
      },
    ])(
      'Returns an incrementing subarray when there are at least 2 elements and the element in any position is always greater than its adjacent word',
      ({ numberList, expected }) => {
        expect(findAllIncreasingSubArr(numberList)).toEqual(expected);
      }
    );
  });
});

// ARRAY-SUBARR-02: Tìm các mảng con giảm dần có ít nhất 3 phần tử
describe('findAllDecreasingSubArr(numberList)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList not an array', (input) => {
      expect(() => findAllDecreasingSubArr(input)).toThrowError('Invalid input');
    });

    it('Throw new error when numberList is empty', () => {
      expect(() => findAllDecreasingSubArr([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1],
        expected: [],
      },
    ])(
      'Should return array empty when numberList no decreasing subarrays of at least 3 element',
      ({ numberList, expected }) => {
        expect(findAllDecreasingSubArr(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [3, 2, 1, 15, 10, 20],
        expected: [[3, 2, 1]],
      },
    ])(
      'Should return all decreasing subarrays of minium length 3 element',
      ({ numberList, expected }) => {
        expect(findAllDecreasingSubArr(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [3, 2, 1, 15, 10, 5],
        expected: [
          [3, 2, 1],
          [15, 10, 5],
        ],
      },
    ])(
      'Should return all decreasing subarrays of minium length 3 element',
      ({ numberList, expected }) => {
        expect(findAllDecreasingSubArr(numberList)).toEqual(expected);
      }
    );
  });
});

// ARRAY-SUBARR-03: Kiểm tra mảng a có phải là mảng con của mảng b
describe('isSubArrayV1(a, b)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when a not an array', (input) => {
      expect(() => isSubArrayV1(input, [1, 2, 3])).toThrowError('Invalid input');
    });

    it.each(invalidInput)('Throw new error when b not an array', (input) => {
      expect(() => isSubArrayV1([1], input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        a: [1, 2],
        b: [1],
      },
    ])('Should return false when length b less than length a', ({ a, b }) => {
      expect(isSubArrayV1(a, b)).toEqual(false);
    });

    it.each([
      {
        a: [1, 2],
        b: [2, 3, 4],
      },
    ])('Should return false when a is not a subarray of b', ({ a, b }) => {
      expect(isSubArrayV1(a, b)).toEqual(false);
    });

    it.each([
      {
        a: [1, 2],
        b: [4, 10, 2, 1, 3],
      },
    ])(
      'Should return false when a is a subarray of b but not in the order of each array element a',
      ({ a, b }) => {
        expect(isSubArrayV1(a, b)).toEqual(false);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      {
        a: [],
        b: [1],
      },
    ])('Should return true when a is array empty', ({ a, b }) => {
      expect(isSubArrayV1(a, b)).toEqual(true);
    });

    it.each([
      {
        a: [1],
        b: [1, 2],
      },
    ])(
      'Should return true when a is a subarray of b and in the order of each array element a',
      ({ a, b }) => {
        expect(isSubArrayV1(a, b)).toEqual(true);
      }
    );

    it.each([
      {
        a: [1, 2],
        b: [4, 10, 1, 2, 3],
      },
    ])(
      'Should return true when a is a subarray of b and in the order of each array element a',
      ({ a, b }) => {
        expect(isSubArrayV1(a, b)).toEqual(true);
      }
    );
  });
});

describe('isSubArrayV2(a, b)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when a not an array', (input) => {
      expect(() => isSubArrayV2(input, [1, 2, 3])).toThrowError('Invalid input');
    });

    it.each(invalidInput)('Throw new error when b not an array', (input) => {
      expect(() => isSubArrayV2([1], input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        a: [1, 2],
        b: [1],
      },
    ])('Should return false when length b less than length a', ({ a, b }) => {
      expect(isSubArrayV2(a, b)).toEqual(false);
    });

    it.each([
      {
        a: [1, 2],
        b: [2, 3, 4],
      },
    ])('Should return false when a is not a subarray of b', ({ a, b }) => {
      expect(isSubArrayV2(a, b)).toEqual(false);
    });

    it.each([
      {
        a: [1, 2],
        b: [4, 10, 1, 3, 2],
      },
    ])(
      'Should return false when a is a subarray of b but not in the order of each array element a',
      ({ a, b }) => {
        expect(isSubArrayV2(a, b)).toEqual(false);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      {
        a: [],
        b: [1],
      },
    ])('Should return true when a is array empty', ({ a, b }) => {
      expect(isSubArrayV2(a, b)).toEqual(true);
    });

    it.each([
      {
        a: [1],
        b: [1, 2],
      },
    ])(
      'Should return true when a is a subarray of b and in the order of each array element a',
      ({ a, b }) => {
        expect(isSubArrayV2(a, b)).toEqual(true);
      }
    );

    it.each([
      {
        a: [1, 2],
        b: [4, 10, 1, 2, 3],
      },
    ])(
      'Should return true when a is a subarray of b and in the order of each array element a',
      ({ a, b }) => {
        expect(isSubArrayV2(a, b)).toEqual(true);
      }
    );
  });
});

// ARRAY-SUBARR-04: Tìm các mảng con có chứa số dương chẳn liên tiếp
describe('findAllPositiveEvenSubArrV1(numberList)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList not an array', (input) => {
      expect(() => findAllPositiveEvenSubArrV1(input)).toThrowError('Invalid input');
    });

    it('Throw new error when numberList is empty', () => {
      expect(() => findAllPositiveEvenSubArrV1([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1],
        expected: [],
      },
    ])(
      'Should return array empty when no subarrays containing consecutive position even number',
      ({ numberList, expected }) => {
        expect(findAllPositiveEvenSubArrV1(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 4, 3, 5, 10, 20, 2],
        expected: [
          [2, 4],
          [10, 20, 2],
        ],
      },
    ])(
      'Should return all subarrays containing consecutive position even number',
      ({ numberList, expected }) => {
        expect(findAllPositiveEvenSubArrV1(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 4, 8, 3, 5, 20],
        expected: [[2, 4, 8]],
      },
    ])(
      'Should return all subarrays containing consecutive position even number',
      ({ numberList, expected }) => {
        expect(findAllPositiveEvenSubArrV1(numberList)).toEqual(expected);
      }
    );
  });
});

describe('findAllPositiveEvenSubArrV2(numberList)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList not an array', (input) => {
      expect(() => findAllPositiveEvenSubArrV2(input)).toThrowError('Invalid input');
    });

    it('Throw new error when numberList is empty', () => {
      expect(() => findAllPositiveEvenSubArrV2([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1],
        expected: [],
      },
    ])(
      'Should return array empty when no subarrays containing consecutive position even number',
      ({ numberList, expected }) => {
        expect(findAllPositiveEvenSubArrV2(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 4, 3, 5, 10, 20],
        expected: [
          [2, 4],
          [10, 20],
        ],
      },
    ])(
      'Should return all subarrays containing consecutive position even number',
      ({ numberList, expected }) => {
        expect(findAllPositiveEvenSubArrV2(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 4, 8, 3, 5, 20],
        expected: [[2, 4, 8]],
      },
    ])(
      'Should return all subarrays containing consecutive position even number',
      ({ numberList, expected }) => {
        expect(findAllPositiveEvenSubArrV2(numberList)).toEqual(expected);
      }
    );
  });
});

// ARRAY-SUBARR-05: Tìm mảng con tăng dần có tổng lớn nhất, trả về con số tổng
describe('findMaxSumArray(numberList)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList not an array', (input) => {
      expect(() => findMaxSumArray(input)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [],
        expected: 0,
      },
    ])('Should return 0 when array empty', ({ numberList, expected }) => {
      expect(findMaxSumArray(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [1, 2, 3],
        expected: 6,
      },
    ])('Should return ascending subarray with maximum sum', ({ numberList, expected }) => {
      expect(findMaxSumArray(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [1, 2, 3, 0, 10, 20],
        expected: 30,
      },
    ])('Should return ascending subarray with maximum sum', ({ numberList, expected }) => {
      expect(findMaxSumArray(numberList)).toEqual(expected);
    });
  });
});

// ARRAY-SUBARR-06: Tìm mảng con tăng dần có tổng lớn nhất, trả về mảng con đầu tiên
describe('findMaxSumSubArray(numberList)', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInput)('Throw new error when numberList not an array', (input) => {
      expect(() => findMaxSumSubArray(input)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [],
        expected: [],
      },
    ])('Should return array empty when numberList empty', ({ numberList, expected }) => {
      expect(findMaxSumSubArray(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [1, 2, 3],
        expected: [1, 2, 3],
      },
    ])(
      'Should return a subarray that is an ascending array with maximum sum ',
      ({ numberList, expected }) => {
        expect(findMaxSumSubArray(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3, 0, 2, 4],
        expected: [1, 2, 3],
      },
    ])(
      'Should return a subarray that is an ascending array with maximum sum ',
      ({ numberList, expected }) => {
        expect(findMaxSumSubArray(numberList)).toEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3, 0, 10, 20],
        expected: [0, 10, 20],
      },
    ])(
      'Should return a subarray that is an ascending array with maximum sum ',
      ({ numberList, expected }) => {
        expect(findMaxSumSubArray(numberList)).toEqual(expected);
      }
    );
  });
});
