import {
  countPositiveEvenNumbers,
  countNumbers,
  countWords,
  countUniqueNumbers,
  countNumbersNotInBV1,
  countNumbersNotInBV2,
  countStudents,
} from './array-count-01-06';

// ARRAY-COUNT-01:
describe('countPositiveEvenNumbers(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => countPositiveEvenNumbers(numberList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when numberList is empty', () => {
      expect(() => countPositiveEvenNumbers([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [-2, -1],
        expected: 0,
      },
    ])('Should return 0 when no even positive number', ({ numberList, expected }) => {
      expect(countPositiveEvenNumbers(numberList)).toStrictEqual(expected);
    });

    it.each([
      {
        numberList: [-2, -1, 1, 2, 4],
        expected: 2,
      },
    ])('Should return count positive even numbers', ({ numberList, expected }) => {
      expect(countPositiveEvenNumbers(numberList)).toStrictEqual(expected);
    });
  });
});

// ARRAY-COUNT-02:
describe('countNumbers(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => countNumbers(numberList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when numberList is empty', () => {
      expect(() => countNumbers([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 2, 3],
        expected: 0,
      },
      {
        numberList: [-3, -2, -1],
        expected: 0,
      },
    ])(
      'Should return 0 when there is no number before the smaller number',
      ({ numberList, expected }) => {
        expect(countNumbers(numberList)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3, 10, 9, 8],
        expected: 2,
      },
    ])('Should return count number before the smaller numer', ({ numberList, expected }) => {
      expect(countNumbers(numberList)).toStrictEqual(expected);
    });
  });
});

// ARRAY-COUNT-03:
describe('countWords(wordList, n)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when wordList not an array',
      (wordList) => {
        expect(() => countWords(wordList, 1)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when wordList is empty', () => {
      expect(() => countWords([], 1)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        wordList: ['easy', 'frontend'],
        n: -2,
        expected: 0,
      },
      {
        wordList: ['easy', 'frontend'],
        n: 10,
        expected: 0,
      },
    ])('Should return 0 when no word is longer than or equal to n', ({ wordList, n, expected }) => {
      expect(countWords(wordList, n)).toStrictEqual(expected);
    });

    it.each([
      {
        wordList: ['easy', 'frontend'],
        n: 4,
        expected: 2,
      },
      {
        wordList: ['easy', 'frontend'],
        n: 5,
        expected: 1,
      },
    ])(
      'Should return count works when is there any word with length greater than or equal to n .?',
      ({ wordList, n, expected }) => {
        expect(countWords(wordList, n)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-COUNT-04:
describe('countUniqueNumbers(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => countUniqueNumbers(numberList)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [],
        expected: 0,
      },
      {
        numberList: [-3, -2, -1],
        expected: 0,
      },
    ])(
      'Should return 0 when numberList empty or odd negative number',
      ({ numberList, expected }) => {
        expect(countUniqueNumbers(numberList)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 1, 1],
        expected: 1,
      },
      {
        numberList: [1, 2, 3],
        expected: 3,
      },
      {
        numberList: [1, 2, 2, 3, 1],
        expected: 3,
      },
    ])('Should return count number different in array', ({ numberList, expected }) => {
      expect(countUniqueNumbers(numberList)).toStrictEqual(expected);
    });
  });
});

// ARRAY-COUNT-05: Ðếm số lượng các số có trong mảng a mà không có trong mảng b
describe('countNumbersNotInBV1(a, b)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)('Throw new error "Invalid input" when a not an array', (a) => {
      expect(() => countNumbersNotInBV1(a, [1, 2])).toThrowError('Invalid input');
    });

    it.each(invalidInput)('Throw new error "Invalid input" when a not an array', (b) => {
      expect(() => countNumbersNotInBV1([1, 2], b)).toThrowError('Invalid input');
    });

    it('Throw new error "Invalid input" when a is empty', () => {
      expect(() => countNumbersNotInBV1([], [1, 2])).toThrowError('Invalid input');
    });

    it('Throw new error "Invalid input" when b is empty', () => {
      expect(() => countNumbersNotInBV1([1, 2], [])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        a: [1, 2, 3],
        b: [1, 2, 3],
        expected: 0,
      },
    ])(
      'Should return 0 when no number appears in array a, but not in array b',
      ({ a, b, expected }) => {
        expect(countNumbersNotInBV1(a, b)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        a: [1, 2, 3],
        b: [4, 5],
        expected: 3,
      },
      {
        a: [1, 2, 3],
        b: [3, 4, 5],
        expected: 2,
      },
    ])(
      'Should return count the number that appear in array a but not in array b',
      ({ a, b, expected }) => {
        expect(countNumbersNotInBV1(a, b)).toStrictEqual(expected);
      }
    );
  });
});

describe('countNumbersNotInBV2(a, b)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)('Throw new error "Invalid input" when a not an array', (a) => {
      expect(() => countNumbersNotInBV2(a, [1, 2])).toThrowError('Invalid input');
    });

    it.each(invalidInput)('Throw new error "Invalid input" when a not an array', (b) => {
      expect(() => countNumbersNotInBV2([1, 2], b)).toThrowError('Invalid input');
    });

    it('Throw new error "Invalid input" when a is empty', () => {
      expect(() => countNumbersNotInBV2([], [1, 2])).toThrowError('Invalid input');
    });

    it('Throw new error "Invalid input" when b is empty', () => {
      expect(() => countNumbersNotInBV2([1, 2], [])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        a: [1, 2, 3],
        b: [1, 2, 3],
        expected: 0,
      },
    ])(
      'Should return 0 when no number appears in array a, but not in array b',
      ({ a, b, expected }) => {
        expect(countNumbersNotInBV2(a, b)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        a: [1, 2, 3],
        b: [4, 5],
        expected: 3,
      },
      {
        a: [1, 2, 3],
        b: [3, 4, 5],
        expected: 2,
      },
    ])(
      'Should return count the number that appear in array a but not in array b',
      ({ a, b, expected }) => {
        expect(countNumbersNotInBV2(a, b)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-COUNT-06: Ðếm số lượng students có điểm trung bình lớn hơn hoặc bằng avgMark
describe('countStudents(studentList, avgMark)', () => {
  describe('Invalid input', () => {
    it.each([NaN, null, undefined, '', 0, {}, () => {}])(
      'Throw new error "Invalid input" when studentList not an array',
      (studentList) => {
        expect(() => countStudents(studentList, 7)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when studentList is empty', () => {
      expect(() => countStudents([], 7)).toThrowError('Invalid input');
    });
  });

  describe('Please enter a number from 1 to 10', () => {
    it.each([NaN, null, undefined, '', [], {}, () => {}])(
      'Throw new error "Please enter a number from 0 to 10" when avgMark not an number',
      (avgMark) => {
        expect(() => countStudents(['array', 'arr'], avgMark)).toThrowError(
          'Please enter a number from 0 to 10'
        );
      }
    );

    it('Throw new error "Please enter a number from 0 to 10" when avgMark less than 0 or greate than 10', () => {
      expect(() => countStudents(['array', 'arr'], -1)).toThrowError(
        'Please enter a number from 0 to 10'
      );
      expect(() => countStudents(['array', 'arr'], 11)).toThrowError(
        'Please enter a number from 0 to 10'
      );
    });
  });

  describe('Return result', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', marks: { math: 8 } },
          { id: 2, name: 'Bob', marks: { math: 9 } },
        ],
        avgMark: 7,
        expected: 2,
      },
      {
        studentList: [
          { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
          { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
        ],
        avgMark: 7,
        expected: 1,
      },
    ])(
      'Should return count the numbers of students whose GPA is greate than or equal to avaMark',
      ({ studentList, avgMark, expected }) => {
        expect(countStudents(studentList, avgMark)).toStrictEqual(expected);
      }
    );
  });
});
