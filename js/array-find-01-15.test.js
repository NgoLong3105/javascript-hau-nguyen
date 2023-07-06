import {
  findMinPositiveV1,
  findMinPositiveV2,
  findLongestWord,
  findFirstPositiveEven,
  findLastNegativeOdd,
  findSecondLargestNumberV1,
  findSecondLargestNumberV2,
  findLastPerfectSquareV1,
  findLastPerfectSquareV2,
  findFirstEmail,
  findLastUrlV1,
  findLastUrlV2,
  findStudentById,
  findProductByCode,
  findStudentHavingHighestMarkV1,
  findStudentHavingHighestMarkV2,
  findLastStudentHavingMinAvg,
  findStudent,
  findProductHavingFreeShip,
  findFirstIphone,
} from './array-find-01-15';

// lesson 1:
describe('findMinPositiveV1(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => findMinPositiveV1(input)).toThrowError('Invalid input');
    });
  });

  describe('Return undefined', () => {
    it('throw an error when numberList is empty', () => {
      expect(findMinPositiveV1([])).toBe(undefined);
    });

    it.each([
      {
        numberList: [-1, -5],
        expected: undefined,
      },
      {
        numberList: [-3, -1, 0],
        expected: undefined,
      },
    ])(
      'should return undefined when numberList has no minimum positive value: %p',
      ({ numberList, expected }) => {
        expect(findMinPositiveV1(numberList)).toBe(expected);
      }
    );
  });
  describe('Return result', () => {
    it.each([
      {
        numberList: [-5, -3, 0, 2, 6],
        expected: 2,
      },
      {
        numberList: [8, 14, 3, 31, 5],
        expected: 3,
      },
    ])(
      'should returns the smallest positive integer in the array: %p',
      ({ numberList, expected }) => {
        expect(findMinPositiveV1(numberList)).toBe(expected);
      }
    );
  });
});

describe('findMinPositiveV2(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => findMinPositiveV2(input)).toThrowError('Invalid input');
    });
  });

  describe('Return undefined', () => {
    it('throw an error when numberList is empty', () => {
      expect(findMinPositiveV2([])).toBe(undefined);
    });

    it.each([
      {
        numberList: [-1, -5],
        expected: undefined,
      },
      {
        numberList: [-3, -1, 0],
        expected: undefined,
      },
    ])(
      'should return undefined when numberList has no minimum positive value: %p',
      ({ numberList, expected }) => {
        expect(findMinPositiveV2(numberList)).toBe(expected);
      }
    );
  });
  describe('Return result', () => {
    it.each([
      {
        numberList: [-5, -3, 0, 2, 6],
        expected: 2,
      },
      {
        numberList: [8, 14, 3, 31, 5],
        expected: 3,
      },
    ])(
      'should returns the smallest positive integer in the array: %p',
      ({ numberList, expected }) => {
        expect(findMinPositiveV2(numberList)).toBe(expected);
      }
    );
  });
});

// lesson 2:
describe('findLongestWord(wordList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when wordList is not an array: %p', (input) => {
      expect(() => findLongestWord(input)).toThrowError('Invalid input');
    });
  });

  describe('Return empty string', () => {
    it("Should return 'empty string' when wordList is empty", () => {
      expect(findLongestWord([])).toBe('empty string');
    });

    it.each([{ wordList: ['supe r', 'super cool'] }, { wordList: ['fontend', 'development'] }])(
      "Should return 'empty string' when wordList not has longs word less than 5 characters and there is a distance",
      ({ wordList }) => {
        expect(findLongestWord(wordList)).toBe('empty string');
      }
    );
  });
  describe('Return result', () => {
    it.each([
      {
        wordList: ['super', 'cool'],
        expected: 'super',
      },
      {
        wordList: ['easys', 'super cool'],
        expected: 'easys',
      },
    ])(
      'should returns result when wordList have longs word word less than 5 characters and no distance: %p',
      ({ wordList, expected }) => {
        expect(findLongestWord(wordList)).toBe(expected);
      }
    );
  });
});

// lesson 3:
describe('findFirstPositiveEven(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => findFirstPositiveEven(input)).toThrowError('Invalid input');
    });
  });

  describe('Return undefined', () => {
    it('Should return undefined when numberList is empty', () => {
      expect(findFirstPositiveEven([])).toBe(undefined);
    });

    it.each([{ numberList: [1, 3, 5] }, { numberList: [-2, -1, 0, 3, 5] }])(
      'Should return undefined when numberList has no even positive number: %p',
      ({ numberList }) => {
        expect(findFirstPositiveEven(numberList)).toBe(undefined);
      }
    );
  });
  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 4, 5],
        expected: 4,
      },
      {
        numberList: [4, 2, 6],
        expected: 4,
      },
    ])(
      'Should return result when numberList find first even positive number: %p',
      ({ numberList, expected }) => {
        expect(findFirstPositiveEven(numberList)).toBe(expected);
      }
    );
  });
});

// lesson 4:
describe('findLastNegativeOdd(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => findLastNegativeOdd(input)).toThrowError('Invalid input');
    });
  });

  describe('Return undefined', () => {
    it('Should return undefined when numberList is empty', () => {
      expect(findLastNegativeOdd([])).toBe(undefined);
    });

    it.each([
      { numberList: [1, 3, 5] },
      { numberList: [0, 2, 4, 5, 6] },
      { numberList: [-2, -4, -6] },
    ])(
      'Should return undefined when numberList has no odd negative number: %p',
      ({ numberList }) => {
        expect(findLastNegativeOdd(numberList)).toBe(undefined);
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [-1, -3, -5],
        expected: -5,
      },
      {
        numberList: [-5, 2, -1],
        expected: -1,
      },
      {
        numberList: [-1],
        expected: -1,
      },
    ])(
      'Should return result when numberList find last odd negative number: %p',
      ({ numberList, expected }) => {
        expect(findLastNegativeOdd(numberList)).toBe(expected);
      }
    );
  });
});

// lesson 5:
describe('findSecondLargestNumberV1(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should return undefined when numberList is not an array: %p',
      (input) => {
        expect(findSecondLargestNumberV1(input)).toBeUndefined();
      }
    );

    it.each([{ numberList: [1], expected: undefined }])(
      'Should return undefined when numberList has no second larges number: %p',
      ({ numberList, expected }) => {
        expect(findSecondLargestNumberV1(numberList)).toBe(expected);
      }
    );

    it('Should return undefined when numberList is empty', () => {
      expect(findSecondLargestNumberV1([])).toBe(undefined);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 2],
        expected: 1,
      },
      {
        numberList: [1, 2, 3, 2, 3],
        expected: 2,
      },
      {
        numberList: [-8, -5, 0, 1],
        expected: 0,
      },
    ])(
      'Should return result when numberList find second largest number: %p',
      ({ numberList, expected }) => {
        expect(findSecondLargestNumberV1(numberList)).toBe(expected);
      }
    );
  });
});

describe('findSecondLargestNumberV2(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => findSecondLargestNumberV2(input)).toThrowError('Invalid input');
    });
  });

  describe('Return undefined', () => {
    it('Should return undefined when numberList is empty', () => {
      expect(findSecondLargestNumberV2([])).toBe(undefined);
    });

    it.each([{ numberList: [1], expected: undefined }])(
      'Should return undefined when numberList has no second larges number: %p',
      ({ numberList, expected }) => {
        expect(findSecondLargestNumberV2(numberList)).toBe(expected);
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 2],
        expected: 1,
      },
      {
        numberList: [1, 2, 3, 2, 3],
        expected: 2,
      },
      {
        numberList: [-8, -5, 0, 1],
        expected: 0,
      },
    ])(
      'Should return result when numberList find second largest number: %p',
      ({ numberList, expected }) => {
        expect(findSecondLargestNumberV2(numberList)).toBe(expected);
      }
    );
  });
});

// lesson 6:
describe('findLastPerfectSquareV1(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should return undefined when numberList is not an array: %p',
      (input) => {
        expect(findLastPerfectSquareV1(input)).toBeUndefined();
      }
    );

    it.each([
      { numberList: [2, 3, 5], expected: undefined },
      { numberList: [-5, -3, -2, 0], expected: undefined },
    ])(
      'Should return undefined when numberList has no perfect square number: %p',
      ({ numberList, expected }) => {
        expect(findLastPerfectSquareV1(numberList)).toBe(expected);
      }
    );

    it('Should return undefined when numberList is empty', () => {
      expect(findLastPerfectSquareV1([])).toBe(undefined);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [9, 25],
        expected: 25,
      },
      {
        numberList: [4, 16, 25, 36, 40],
        expected: 36,
      },
    ])(
      'Should return result when numberList find pecfect square number: %p',
      ({ numberList, expected }) => {
        expect(findLastPerfectSquareV1(numberList)).toBe(expected);
      }
    );
  });
});

describe('findLastPerfectSquareV2(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should return undefined when numberList is not an array: %p',
      (input) => {
        expect(findLastPerfectSquareV2(input)).toBeUndefined();
      }
    );

    it.each([
      { numberList: [2, 3, 5], expected: undefined },
      { numberList: [-5, -3, -2, 0], expected: undefined },
    ])(
      'Should return undefined when numberList has no perfect square number: %p',
      ({ numberList, expected }) => {
        expect(findLastPerfectSquareV2(numberList)).toBe(expected);
      }
    );

    it('Should return undefined when numberList is empty', () => {
      expect(findLastPerfectSquareV2([])).toBe(undefined);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [9, 25],
        expected: 25,
      },
      {
        numberList: [4, 16, 25, 36, 40],
        expected: 36,
      },
    ])(
      'Should return result when numberList find pecfect square number: %p',
      ({ numberList, expected }) => {
        expect(findLastPerfectSquareV2(numberList)).toBe(expected);
      }
    );
  });
});

// lesson 7:
describe('findFirstEmail(strList)', () => {
  describe('Return undefined', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Should return undefined when strList is not an array: %p', (input) => {
      expect(findFirstEmail(input)).toBeUndefined();
    });

    it.each([
      { strList: ['abc@easy.gmail'], expected: undefined },
      { strList: ['ab@cd.gmail.com'], expected: undefined },
      { strList: ['abc@easy.frontend'], expected: undefined },
    ])('Should return undefined when strList has no find email: %p', ({ strList, expected }) => {
      expect(findFirstEmail(strList)).toBe(expected);
    });

    it('Should return undefined when strList is empty', () => {
      expect(findFirstEmail([])).toBe(undefined);
    });
  });

  describe('Return first email', () => {
    it.each([
      {
        strList: ['abc@easy.frontend', 'abc@gmail.com'],
        expected: 'abc@gmail.com',
      },
      {
        strList: ['abc@easy.frontend.vn', 'abcd@gmail.com.vn'],
        expected: 'abc@easy.frontend.vn',
      },
    ])('Should return first email when strList find first email: %p', ({ strList, expected }) => {
      expect(findFirstEmail(strList)).toBe(expected);
    });
  });
});

// lesson 8:
describe('findLastUrlV1(strList)', () => {
  describe('Return undefined', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Should return undefined when strList is not an array: %p', (input) => {
      expect(findLastUrlV1(input)).toBeUndefined();
    });

    it('Should return undefined when strList is empty', () => {
      expect(findLastUrlV1([])).toBe(undefined);
    });

    it.each([
      { strList: ['https://go.com'], expected: undefined },
      { strList: ['ht://google.com'], expected: undefined },
      { strList: ['https://google.c'], expected: undefined },
    ])('Should return undefined when strList has no valid url: %p', ({ strList, expected }) => {
      expect(findLastUrlV1(strList)).toBe(expected);
    });
  });

  describe('Return last url', () => {
    it.each([
      {
        strList: ['https://google.com', 'wss://chat.sample.com'],
        expected: 'wss://chat.sample.com',
      },
      {
        strList: ['ws://chat.sample.com', 'wss://chat.sample.com', 'https://google.com'],
        expected: 'https://google.com',
      },
    ])('Should return url when strList find last url: %p', ({ strList, expected }) => {
      expect(findLastUrlV1(strList)).toBe(expected);
    });
  });
});

describe('findLastUrlV2(strList)', () => {
  describe('Return undefined', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Should return undefined when strList is not an array: %p', (input) => {
      expect(findLastUrlV2(input)).toBeUndefined();
    });

    it('Should return undefined when strList is empty', () => {
      expect(findLastUrlV2([])).toBe(undefined);
    });

    it.each([
      { strList: ['https://go.com'], expected: undefined },
      { strList: ['ht://google.com'], expected: undefined },
      { strList: ['https://google.c'], expected: undefined },
    ])('Should return undefined when strList has no valid url: %p', ({ strList, expected }) => {
      expect(findLastUrlV2(strList)).toBe(expected);
    });
  });

  describe('Return last url', () => {
    it.each([
      {
        strList: ['https://google.com', 'wss://chat.sample.com'],
        expected: 'wss://chat.sample.com',
      },
      {
        strList: ['ws://chat.sample.com', 'wss://chat.sample.com', 'https://google.com'],
        expected: 'https://google.com',
      },
    ])('Should return url when strList find last url: %p', ({ strList, expected }) => {
      expect(findLastUrlV2(strList)).toBe(expected);
    });
  });
});

// lesson 9:
describe('findStudentById(studentList, studentId)', () => {
  describe('Return -1', () => {
    const invalidInputs = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should return -1 when studentList is not an array: %p',
      (studentList) => {
        expect(findStudentById(studentList, 1)).toBe(-1);
      }
    );

    it('Should return -1 when studentList is empty', () => {
      expect(findStudentById([], 1)).toBe(-1);
    });

    it.each(invalidInputs)('Should return -1 when studentId is not an number: %p', (studentId) => {
      expect(findStudentById([{ id: 1 }], studentId)).toBe(-1);
    });

    it('Should return -1 when studentId less than 0', () => {
      expect(findStudentById([{ id: 1 }], -1)).toBe(-1);
    });
  });

  describe('Return last url', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        studentId: 1,
        expected: 0,
      },
      {
        studentList: [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        studentId: 2,
        expected: 1,
      },
    ])(
      "Should return find student's location when id equals to studentId: %p",
      ({ studentList, studentId, expected }) => {
        expect(findStudentById(studentList, studentId)).toBe(expected);
      }
    );
  });
});

// lesson 10:
describe('findProductByCode(productList, code)', () => {
  describe('Return -1', () => {
    const invalidInputs = [NaN, null, undefined, 0, {}, () => {}];
    it.each(invalidInputs)(
      'Should return -1 when productList is not an array: %p',
      (productList) => {
        expect(() => findProductByCode(productList, 'ip01')).toThrowError('Invalid input');
      }
    );

    it('Should return -1 when productList is empty', () => {
      expect(() => findProductByCode([], 'ip01')).toThrowError('Invalid input');
    });

    it.each(invalidInputs.map((input) => ({ input: { code: input } })))(
      'Should return -1 when productList is not an array: %p',
      ({ input }) => {
        expect(findProductByCode([{ id: 1 }], input.code || '')).toBe(-1);
      }
    );

    it('Should return -1 when code is string empty', () => {
      expect(findProductByCode([{ id: 1 }], '')).toBe(-1);
    });

    it('Should return -1 when code is whitespace', () => {
      expect(findProductByCode([{ id: 1 }], '   ')).toBe(-1);
    });

    it.each([
      {
        productList: [
          { id: 1, code: 'ip01', name: 'IPhone 16' },
          { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
        ],
        code: 'ip03',
        expected: -1,
      },
      {
        productList: [
          { id: 1, code: 'ip01', name: 'IPhone 16' },
          { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
        ],
        code: 2,
        expected: -1,
      },
    ])(
      'Should return -1 when productList has no id in array: %p',
      ({ productList, code, expected }) => {
        expect(findProductByCode(productList, code)).toBe(expected);
      }
    );
  });

  describe('Return find index product', () => {
    it.each([
      {
        productList: [
          { id: 1, code: 'ip01', name: 'IPhone 16' },
          { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
        ],
        code: 'ip01',
        expected: 0,
      },
      {
        productList: [
          { id: 1, code: 'ip01', name: 'IPhone 16' },
          { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
        ],
        code: 'ip02',
        expected: 1,
      },
    ])(
      'Should return find index product when code equals to code: %p',
      ({ productList, code, expected }) => {
        expect(findProductByCode(productList, code)).toBe(expected);
      }
    );
  });
});

// lesson 11:
describe('findStudentHavingHighestMarkV1(studentList)', () => {
  describe('Return Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Throw new error when studentList is not an array: %p', (input) => {
      expect(() => findStudentHavingHighestMarkV1(input)).toThrowError('Invalid input');
    });

    it('Throw new error when studentList is empty', () => {
      expect(() => findStudentHavingHighestMarkV1([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { studentList: [{ id: 1 }], expected: undefined },
      { studentList: [{ id: 1, name: 'Alice' }], expected: undefined },
    ])('Should return undefined when studentList has no math: %p', ({ studentList, expected }) => {
      expect(findStudentHavingHighestMarkV1(studentList)).toBe(expected);
    });

    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', math: 9 },
          { id: 2, name: 'Bob', math: 10 },
          { id: 3, name: 'John', math: 10 },
        ],
        expected: { id: 2, name: 'Bob', math: 10 },
      },
      {
        studentList: [
          { id: 1, name: 'Alice', math: 9 },
          { id: 3, name: 'John', math: 10 },
        ],
        expected: { id: 3, name: 'John', math: 10 },
      },
    ])(
      'Should return studentList when find first student having highes mark: %p',
      ({ studentList, expected }) => {
        expect(findStudentHavingHighestMarkV1(studentList)).toStrictEqual(expected);
      }
    );
  });
});

describe('findStudentHavingHighestMarkV2(studentList)', () => {
  describe('Return Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Throw new error when studentList is not an array: %p', (input) => {
      expect(() => findStudentHavingHighestMarkV2(input)).toThrowError('Invalid input');
    });

    it('Throw new error when studentList is empty', () => {
      expect(() => findStudentHavingHighestMarkV2([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { studentList: [{ id: 1 }], expected: undefined },
      { studentList: [{ id: 1, name: 'Alice' }], expected: undefined },
    ])('Should return undefined when studentList has no math: %p', ({ studentList, expected }) => {
      expect(findStudentHavingHighestMarkV2(studentList)).toBe(expected);
    });

    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', math: 9 },
          { id: 2, name: 'Bob', math: 10 },
          { id: 3, name: 'John', math: 10 },
        ],
        expected: { id: 2, name: 'Bob', math: 10 },
      },
      {
        studentList: [
          { id: 1, name: 'Alice', math: 9 },
          { id: 3, name: 'John', math: 10 },
        ],
        expected: { id: 3, name: 'John', math: 10 },
      },
    ])(
      'Should return studentList when find first student having highes mark: %p',
      ({ studentList, expected }) => {
        expect(findStudentHavingHighestMarkV2(studentList)).toStrictEqual(expected);
      }
    );
  });
});

// lesspon 12:
describe('findLastStudentHavingMinAvg(studentList)', () => {
  describe('Return Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Throw new error when studentList is not an array: %p', (input) => {
      expect(() => findLastStudentHavingMinAvg(input)).toThrowError('Invalid input');
    });

    it('Throw new error when studentList is empty', () => {
      expect(() => findLastStudentHavingMinAvg([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { studentList: [{ id: 1 }], expected: undefined },
      { studentList: [{ id: 1, name: 'Alice' }], expected: undefined },
    ])('Should return undefined when studentList has no score: %p', ({ studentList, expected }) => {
      expect(findLastStudentHavingMinAvg(studentList)).toBe(expected);
    });

    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', math: 9, english: 9 },
          { id: 2, name: 'Bob', math: 5, english: 5 },
          { id: 3, name: 'John', math: 5, english: 5 },
        ],
        expected: { id: 3, name: 'John', math: 5, english: 5 },
      },
      {
        studentList: [
          { id: 1, name: 'Alice', math: 9, english: 9 },
          { id: 2, name: 'Bob', math: 3, english: 5 },
          { id: 3, name: 'John', math: 5, english: 5 },
        ],
        expected: { id: 2, name: 'Bob', math: 3, english: 5 },
      },
    ])(
      'Should return studentList when find first student having high GPA: %p',
      ({ studentList, expected }) => {
        expect(findLastStudentHavingMinAvg(studentList)).toStrictEqual(expected);
      }
    );
  });
});

// lesson 13:
describe('findStudent(studentList)', () => {
  describe('Return Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Throw new error when studentList is not an array: %p', (input) => {
      expect(() => findStudent(input)).toThrowError('Invalid input');
    });

    it('Throw new error when studentList is empty', () => {
      expect(() => findStudent([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    // it.each([
    //   { studentList: [{ id: 1 }], expected: undefined },
    //   { studentList: [{ id: 1, name: 'Alice' }], expected: undefined },
    // ])('Should return undefined when studentList has no score: %p', ({ studentList, expected }) => {
    //   expect(findStudent(studentList)).toBe(expected);
    // });

    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
          { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
          { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
          { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
        ],
        expected: { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
      },
      {
        studentList: [
          { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
          { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
          { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
        ],
        expected: { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
      },
    ])(
      'Should finds the first student in the array whose all score are greater than or equal to 5, but on subject is less than 5: %p',
      ({ studentList, expected }) => {
        expect(findStudent(studentList)).toStrictEqual(expected);
      }
    );
  });
});

// lesson 14:
describe('findProductHavingFreeShip(ProductList)', () => {
  describe('Should throw new error', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('Should throw new error when productList is not an array', (input) => {
      expect(() => findProductHavingFreeShip(input)).toThrowError('Invalid input');
    });

    it('Should throw new error when productList is empty', () => {
      expect(() => findProductHavingFreeShip([])).toThrowError('Invalid input');
    });
  });

  describe('Should return result', () => {
    it.each([
      {
        productList: [
          { id: 1, name: 'Iphone 5', isFreeShip: false },
          { id: 2, name: 'Iphone X', isFreeShip: false },
          { id: 3, name: 'Iphone 12 Pro', isFreeShip: false },
        ],
        expected: undefined,
      },
    ])(
      'Should return undefined when productList without isFreeShip is true',
      ({ productList, expected }) => {
        expect(findProductHavingFreeShip(productList)).toBe(expected);
      }
    );

    it.each([
      {
        productList: [
          { id: 1, name: 'Iphon 5', isFreeShip: false },
          { id: 2, name: 'Iphone X', isFreeShip: true },
          { id: 3, name: 'Iphone 12 Pro', isFreeShip: true },
        ],
        expected: { id: 2, name: 'Iphone X', isFreeShip: true },
      },
    ])(
      'Should return product when productList has product with freeship is true',
      ({ productList, expected }) => {
        expect(findProductHavingFreeShip(productList)).toEqual(expected);
      }
    );
  });
});

// lesson 15:
describe('findFirstIphone(productList', () => {
  describe("Throw new Error('Invalid input')", () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Throw new Error when productList is not an array', (input) => {
      expect(() => findFirstIphone(input)).toThrowError('Invalid input');
    });

    it('Throw new Error when productList is empty', () => {
      expect(() => findFirstIphone([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        productList: [
          { id: 1, name: 'Samsung' },
          { id: 2, name: 'nokia X' },
          { id: 3, name: 'oppo 12 Pro' },
        ],
        expected: undefined,
      },
    ])(
      'Should return undefined when productList without product is name iphone',
      ({ productList, expected }) => {
        expect(findFirstIphone(productList)).toBe(expected);
      }
    );

    it.each([
      {
        productList: [
          { id: 1, name: 'Samsung' },
          { id: 2, name: 'IPHONE X' },
          { id: 3, name: 'iphone 12 Pro' },
        ],
        expected: { id: 2, name: 'IPHONE X' },
      },
    ])(
      'Should return product when productList has product is name iphone regardless of flower case',
      ({ productList, expected }) => {
        expect(findFirstIphone(productList)).toEqual(expected);
      }
    );
  });
});
