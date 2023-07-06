import {
  hasEvenNumberGreaterThanN,
  hasEvenNumberGreaterThanNv1,
  hasOddNumberDivisibleBy3,
  hasOddNumberDivisibleBy3V1,
  hasEasyFrontendV1,
  hasEasyFrontendV2,
  hasTruthy,
  hasTruthyAll,
  hasFalsy,
  hasFalsyAll,
  hasStudent,
  hasFreeShip,
  hasAlice,
  isIncreasingNumberList,
  isDecreasingNumberList,
  isSymmetricList,
  hasFibonaciNumber,
  hasFibonaciNumberV1,
} from './array-check-01-12';

// lesson 1:
describe('hasEvenNumberGreaterThanN(numberList, n)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should throw an error when numberList is not an array: %p',
      (numberList) => {
        expect(() => hasEvenNumberGreaterThanN(numberList, 2)).toThrowError('Invalid input');
      }
    );

    it('Should throw an error when numberList is array empty', () => {
      expect(() => hasEvenNumberGreaterThanN([], 2)).toThrowError('Invalid input');
    });

    it.each(invalidInputs)('Should throw an error when n is not a number: %p', (n) => {
      expect(() => hasEvenNumberGreaterThanN([1, 2, 3], n)).toThrowError('Invalid input');
    });

    it('Should throw an error when n is less than or equal to 0', () => {
      expect(() => hasEvenNumberGreaterThanN([1, 2, 3], 0)).toThrowError('Invalid input');
      expect(() => hasEvenNumberGreaterThanN([1, 2, 3], -1)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    const inputFalse = [
      { numberList: [2], n: 3, expected: false },
      { numberList: [2, 3, 4, 9], n: 8, expected: false },
      { numberList: [1, 2, 3, 4, 7], n: 5, expected: false },
    ];

    it.each(inputFalse)(
      'Should return false when invalid resutl',
      ({ numberList, n, expected }) => {
        expect(hasEvenNumberGreaterThanN(numberList, n)).toEqual(expected);
      }
    );
  });

  describe('Retuen true', () => {
    const inputTrue = [
      { numberList: [4], n: 3, expected: true },
      { numberList: [2, 3, 4, 10], n: 8, expected: true },
      { numberList: [1, 2, 3, 4, 6], n: 5, expected: true },
    ];

    it.each(inputTrue)('Should return true when input value', ({ numberList, n, expected }) => {
      expect(hasEvenNumberGreaterThanN(numberList, n)).toEqual(expected);
    });
  });
});

describe('hasEvenNumberGreaterThanNv1(numberList, n)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should throw an error when numberList is not an array: %p',
      (numberList) => {
        expect(() => hasEvenNumberGreaterThanNv1(numberList, 2)).toThrowError('Invalid input');
      }
    );

    it('Should throw an error when numberList is array empty', () => {
      expect(() => hasEvenNumberGreaterThanNv1([], 2)).toThrowError('Invalid input');
    });

    it.each(invalidInputs)('Should throw an error when n is not a number: %p', (n) => {
      expect(() => hasEvenNumberGreaterThanNv1([1, 2, 3], n)).toThrowError('Invalid input');
    });

    it('Should throw an error when n is less than or equal to 0', () => {
      expect(() => hasEvenNumberGreaterThanNv1([1, 2, 3], 0)).toThrowError('Invalid input');
      expect(() => hasEvenNumberGreaterThanNv1([1, 2, 3], -1)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    const inputFalse = [
      { numberList: [2], n: 3, expected: false },
      { numberList: [2, 3, 4, 9], n: 8, expected: false },
      { numberList: [1, 2, 3, 4, 7], n: 5, expected: false },
    ];

    it.each(inputFalse)('Should return true when invalid result', ({ numberList, n, expected }) => {
      expect(hasEvenNumberGreaterThanNv1(numberList, n)).toEqual(expected);
    });
  });

  describe('Retuen true', () => {
    const inputTrue = [
      { numberList: [4], n: 3, expected: true },
      { numberList: [2, 3, 4, 10], n: 8, expected: true },
      { numberList: [1, 2, 3, 4, 6], n: 5, expected: true },
    ];

    it.each(inputTrue)('Should return true when input value', ({ numberList, n, expected }) => {
      expect(hasEvenNumberGreaterThanNv1(numberList, n)).toEqual(expected);
    });
  });
});

// lessnon 2:
describe('hasOddNumberDivisibleBy3(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should throw an error when numberList is not an array: %p',
      (numberList) => {
        expect(() => hasOddNumberDivisibleBy3(numberList)).toThrowError('Invalid input');
      }
    );

    it('Should throw an error when numberList is array empty', () => {
      expect(() => hasOddNumberDivisibleBy3([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    const inputFalse = [
      { numberList: [1], expected: false },
      { numberList: [1, 5, 6], expected: false },
      { numberList: [1, 2, 5, 7, 8], expected: false },
    ];

    it.each(inputFalse)('Should return false when input value', ({ numberList, expected }) => {
      expect(hasOddNumberDivisibleBy3(numberList)).toEqual(expected);
    });
  });

  describe('Retuen true', () => {
    const inputTrue = [
      { numberList: [3], expected: true },
      { numberList: [1, 2, 9], expected: true },
      { numberList: [1, 2, 3, 4, 9], expected: true },
    ];

    it.each(inputTrue)('Should return true when input value', ({ numberList, expected }) => {
      expect(hasOddNumberDivisibleBy3(numberList)).toEqual(expected);
    });
  });
});

describe('hasOddNumberDivisibleBy3V1(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should throw an error when numberList is not an array: %p',
      (numberList) => {
        expect(() => hasOddNumberDivisibleBy3V1(numberList)).toThrowError('Invalid input');
      }
    );

    it('Should throw an error when numberList is array empty', () => {
      expect(() => hasOddNumberDivisibleBy3V1([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    const inputFalse = [
      { numberList: [1], expected: false },
      { numberList: [1, 5, 6], expected: false },
      { numberList: [1, 2, 5, 7, 8], expected: false },
    ];

    it.each(inputFalse)('Should return false when input value', ({ numberList, expected }) => {
      expect(hasOddNumberDivisibleBy3V1(numberList)).toEqual(expected);
    });
  });

  describe('Retuen true', () => {
    const inputTrue = [
      { numberList: [3], expected: true },
      { numberList: [1, 2, 9], expected: true },
      { numberList: [1, 2, 3, 4, 9], expected: true },
    ];

    it.each(inputTrue)('Should return true when input value', ({ numberList, expected }) => {
      expect(hasOddNumberDivisibleBy3V1(numberList)).toEqual(expected);
    });
  });
});

// lessnon 3:
describe('hasEasyFrontendV1(wordList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should throw an error when wordList is not an array: %p',
      (numberList) => {
        expect(() => hasEasyFrontendV1(numberList)).toThrowError('Invalid input');
      }
    );

    it('Should throw an error when wordList is array empty', () => {
      expect(() => hasEasyFrontendV1([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    const inputFalse = [
      { works: ['easy', ''], expected: false },
      { works: ['', 'fontend'], expected: false },
    ];

    it.each(inputFalse)('Should return false when invalid input', ({ works, expected }) => {
      expect(hasEasyFrontendV1(works)).toEqual(expected);
    });
  });

  describe('Retuen true', () => {
    const inputTrue = [
      { works: ['easy', 'fontend'], expected: true },
      { works: ['easy fontend', ''], expected: true },
    ];

    it.each(inputTrue)('Should return true when input value', ({ works, expected }) => {
      expect(hasEasyFrontendV1(works)).toEqual(expected);
    });
  });
});

describe('hasEasyFrontendV2(wordList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)(
      'Should throw an error when wordList is not an array: %p',
      (numberList) => {
        expect(() => hasEasyFrontendV2(numberList)).toThrowError('Invalid input');
      }
    );

    it('Should throw an error when wordList is array empty', () => {
      expect(() => hasEasyFrontendV2([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    const inputFalse = [
      { works: ['easy', ''], expected: false },
      { works: ['', 'fontend'], expected: false },
    ];

    it.each(inputFalse)('Should return false when invalid input', ({ works, expected }) => {
      expect(hasEasyFrontendV2(works)).toEqual(expected);
    });
  });

  describe('Retuen true', () => {
    const inputTrue = [
      { works: ['easy', 'fontend'], expected: true },
      { works: ['easy fontend', ''], expected: true },
    ];

    it.each(inputTrue)('Should return true when input value', ({ works, expected }) => {
      expect(hasEasyFrontendV2(works)).toEqual(expected);
    });
  });
});
// lessnon 4:
describe('hasTruthy(arr)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when arr is not an array: %p', (input) => {
      expect(() => hasTruthy(input)).toThrow('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      { arr: [], expected: false },
      { arr: [false, ''], expected: false },
    ])('returns false when arr contains only falsy values: %p', ({ arr, expected }) => {
      expect(hasTruthy(arr)).toBe(expected);
    });
  });

  describe('Return true', () => {
    it.each([
      { arr: [false, '', 1], expected: true },
      { arr: [null, [], 'abc'], expected: true },
    ])('returns true when arr contains at least one truthy value: %p', ({ arr, expected }) => {
      expect(hasTruthy(arr)).toBe(expected);
    });
  });
});

describe('hasTruthyAll(arr)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when arr is not an array: %p', (input) => {
      expect(() => hasTruthyAll(input)).toThrow('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      { arr: [], expected: false },
      { arr: [false, '', null], expected: false },
      { arr: [false, [], true, 0], expected: false },
      { arr: [null, undefined, 1], expected: false },
    ])('returns false when arr all falsy values: %p', ({ arr, expected }) => {
      expect(hasTruthyAll(arr)).toEqual(expected);
    });
  });

  describe('Return true', () => {
    it.each([
      { arr: [{}], expected: true },
      { arr: ['abc', true, 1], expected: true },
    ])('returns true when arr all truthy value: %p', ({ arr, expected }) => {
      expect(hasTruthyAll(arr)).toEqual(expected);
    });
  });
});

// lessnon 5:
describe('hasFalsy(arr)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when arr is not an array: %p', (input) => {
      expect(() => hasFalsy(input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([{ arr: ['abc', true, 1, [1], {}], expected: false }])(
      'returns false when the array does not contain any falsy value: %p',
      ({ arr, expected }) => {
        expect(hasFalsy(arr)).toBe(expected);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      { arr: [false], expected: true },
      { arr: [true, 1, 'abc', []], expected: true },
      { arr: [null, undefined, 0, '', []], expected: true },
    ])('returns true when the array contains at least one falsy value: %p', ({ arr, expected }) => {
      expect(hasFalsy(arr)).toBe(expected);
    });
  });
});

describe('hasFalsyAll(arr)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when arr is not an array: %p', (input) => {
      expect(() => hasFalsyAll(input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      { arr: ['abc', null], expected: false },
      { arr: [true, undefined], expected: false },
      { arr: [true, {}, 1, 'abc'], expected: false },
    ])('returns false when the array contains the value true: %p', ({ arr, expected }) => {
      expect(hasFalsyAll(arr)).toBe(expected);
    });
  });

  describe('Return true', () => {
    it.each([{ arr: [null, undefined, 0, '', []], expected: true }])(
      'Returns true when the array contains all false: %p',
      ({ arr, expected }) => {
        expect(hasFalsyAll(arr)).toBe(expected);
      }
    );
  });
});

// lessnon 6:
describe('hasStudent(studentList, studentId)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when arr is not an array: %p', (studentList) => {
      expect(() => hasStudent(studentList, 1)).toThrowError('Invalid input');
    });

    it.each(invalidInputs)('throws an error when arr is not an array: %p', (studentId) => {
      expect(() => hasStudent([{ id: 1, name: 'Easy' }], studentId)).toThrowError('Invalid input');
    });

    it('throw an error when arr is empty', () => {
      expect(() => hasStudent([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        studentId: 3,
        expected: false,
      },
    ])(
      "when studentList dont't not have  any student whose id is studentId: %p",
      ({ studentList, studentId, expected }) => {
        expect(hasStudent(studentList, studentId)).toBe(expected);
      }
    );
  });
  describe('Return true', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        studentId: 2,
        expected: true,
      },
    ])(
      'when studentList has any student whose id is studentId: %p',
      ({ studentList, studentId, expected }) => {
        expect(hasStudent(studentList, studentId)).toBe(expected);
      }
    );
  });
});

// lessnon 7:
describe('hasAlice(studentList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when arr is not an array: %p', (studentList) => {
      expect(() => hasAlice(studentList)).toThrowError('Invalid input');
    });

    it('throw an error when arr is empty', () => {
      expect(() => hasAlice([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', gender: 'male' },
          { id: 2, name: 'aliCE', gender: 'male' },
          { id: 3, name: 'Easy Frontend', gender: 'male' },
        ],
        expected: false,
      },
    ])(
      'when the student list does not have a female student named Alice: %p',
      ({ studentList, expected }) => {
        expect(hasAlice(studentList)).toBe(expected);
      }
    );
  });
  describe('Return true', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice', gender: 'male' },
          { id: 2, name: 'aliCE', gender: 'female' },
          { id: 3, name: 'Easy Frontend', gender: 'male' },
        ],
        expected: true,
      },
    ])(
      'when the student list has a female student named Alice: %p',
      ({ studentList, expected }) => {
        expect(hasAlice(studentList)).toBe(expected);
      }
    );
  });
});

// lessnon 8:
describe('hasFreeShip(productList, price)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInputs)(
      'throws an error when productList is not an array: %p',
      (productList) => {
        expect(() => hasFreeShip(productList, 1500000)).toThrowError('Invalid input');
      }
    );

    it.each(invalidInputs)('throws an error when price is not a number: %p', (price) => {
      expect(() =>
        hasFreeShip({ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }, price)
      ).toThrowError('Invalid input');
    });

    it('throw an error when productList is empty', () => {
      expect(() => hasFreeShip([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        productList: [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 15000000 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 12900000 },
        ],
        price: 10000000,
        expected: false,
      },
    ])(
      'when products are not free shipping and cheap on request: %p',
      ({ productList, price, expected }) => {
        expect(hasFreeShip(productList, price)).toBe(expected);
      }
    );
  });
  describe('Return true', () => {
    it.each([
      {
        productList: [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 15999000 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 9500000 },
        ],
        price: 10000000,
        expected: true,
      },
    ])(
      'when products are free shipping and cheap on request: %p',
      ({ productList, price, expected }) => {
        expect(hasFreeShip(productList, price)).toBe(expected);
      }
    );
  });
});

// lessnon 9:
describe('isIncreasingNumberList(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => isIncreasingNumberList(input)).toThrowError('Invalid input');
    });

    it('throw an error when numberList is empty', () => {
      expect(() => isIncreasingNumberList([])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        numberList: [1, 2, 2, 3],
        expected: false,
      },
      {
        numberList: [4, 3, 5],
        expected: false,
      },
    ])(
      'should return false when numberList are not increasing number: %p',
      ({ numberList, expected }) => {
        expect(isIncreasingNumberList(numberList)).toBe(expected);
      }
    );
  });
  describe('Return true', () => {
    it.each([
      {
        numberList: [1, 2],
        expected: true,
      },
      {
        numberList: [1, 2, 3],
        expected: true,
      },
    ])(
      'should return true when numberList are increasing number: %p',
      ({ numberList, expected }) => {
        expect(isIncreasingNumberList(numberList)).toBe(expected);
      }
    );
  });
});

// lessnon 10:
describe('isDecreasingNumberList(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => isDecreasingNumberList(input)).toThrowError('Invalid input');
    });

    it('throw an error when numberList is empty', () => {
      expect(() => isDecreasingNumberList([])).toThrowError('Invalid input');
    });

    it('throw an error when numberList are at least 2 element', () => {
      expect(() => isDecreasingNumberList([1])).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it.each([
      {
        numberList: [1, 1, 1],
        expected: false,
      },
      {
        numberList: [1, 2, 3],
        expected: false,
      },
    ])(
      'should return false when numberList are not decreasing number: %p',
      ({ numberList, expected }) => {
        expect(isDecreasingNumberList(numberList)).toBe(expected);
      }
    );
  });
  describe('Return true', () => {
    it.each([
      {
        numberList: [2, 1],
        expected: true,
      },
      {
        numberList: [3, 2, 1],
        expected: true,
      },
    ])(
      'should return true when numberList are decreasing number: %p',
      ({ numberList, expected }) => {
        expect(isDecreasingNumberList(numberList)).toBe(expected);
      }
    );
  });
});

// lessnon 11:
describe('isSymmetricList(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => isSymmetricList(input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it('throw an error when numberList is empty', () => {
      expect(isSymmetricList([])).toBe(false);
    });

    it.each([
      {
        numberList: [1, 2, 3],
        expected: false,
      },
      {
        numberList: [3, 2, 1],
        expected: false,
      },
    ])('should return false when numberList are not symmetric: %p', ({ numberList, expected }) => {
      expect(isSymmetricList(numberList)).toBe(expected);
    });
  });
  describe('Return true', () => {
    it.each([
      {
        numberList: [2, 1, 2],
        expected: true,
      },
      {
        numberList: [1, 1, 1],
        expected: true,
      },
    ])('should return true when numberList are symmetric: %p', ({ numberList, expected }) => {
      expect(isSymmetricList(numberList)).toBe(expected);
    });
  });
});

// lessnon 12:
describe('hasFibonaciNumber(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => hasFibonaciNumber(input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it('throw an error when numberList is empty', () => {
      expect(hasFibonaciNumber([])).toBe(false);
    });

    it.each([
      {
        numberList: [4, 6, 7],
        expected: false,
      },
      {
        numberList: [9, 10, 11],
        expected: false,
      },
    ])('should return false when numberList has no fibonaci: %p', ({ numberList, expected }) => {
      expect(hasFibonaciNumber(numberList)).toBe(expected);
    });
  });
  describe('Return true', () => {
    it.each([
      {
        numberList: [89],
        expected: true,
      },
      {
        numberList: [0, 1, 2, 3, 4, 5],
        expected: true,
      },
    ])('should return true when numberList has fibonaci: %p', ({ numberList, expected }) => {
      expect(hasFibonaciNumber(numberList)).toBe(expected);
    });
  });
});

describe('hasFibonaciNumberV1(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInputs = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInputs)('throws an error when numberList is not an array: %p', (input) => {
      expect(() => hasFibonaciNumberV1(input)).toThrowError('Invalid input');
    });
  });

  describe('Return false', () => {
    it('throw an error when numberList is empty', () => {
      expect(hasFibonaciNumberV1([])).toBe(false);
    });

    it.each([
      {
        numberList: [4, 6, 7],
        expected: false,
      },
      {
        numberList: [9, 10, 11],
        expected: false,
      },
    ])('should return false when numberList has no fibonaci: %p', ({ numberList, expected }) => {
      expect(hasFibonaciNumberV1(numberList)).toBe(expected);
    });
  });
  describe('Return true', () => {
    it.each([
      {
        numberList: [89],
        expected: true,
      },
      {
        numberList: [0, 1, 2, 3, 4, 5],
        expected: true,
      },
    ])('should return true when numberList has fibonaci: %p', ({ numberList, expected }) => {
      expect(hasFibonaciNumberV1(numberList)).toBe(expected);
    });
  });
});
