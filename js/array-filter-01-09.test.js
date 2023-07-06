import {
  generateNumberInRange,
  findNumbers,
  generateFibonaci,
  generatePrimeNumbers,
  findAllNumbers,
  filterAllNumber,
  findAllStudents,
  findAllProducts,
  findAllIphones,
} from './array-filter-01-09';

// ARRAY-FILTER-01:
describe('generateNumberInRange(a, b)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', [], {}, () => {}];
    it.each(invalidInput)('Should return "Invalid input" when a not a number', (a) => {
      expect(() => generateNumberInRange(a, 2)).toThrowError('Invalid input');
    });

    it.each(invalidInput)('Should return "Invalid input" when b not a number', (b) => {
      expect(() => generateNumberInRange(1, b)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { a: 7, b: 5, expected: [] },
      { a: 5, b: 7, expected: [5, 6, 7] },
      { a: 1, b: 5, expected: [1, 2, 3, 4, 5] },
    ])('Should return create an array of number from a to b', ({ a, b, expected }) => {
      expect(generateNumberInRange(a, b)).toStrictEqual(expected);
    });
  });
});

// ARRAY-FILTER-02:
describe('findNumbers(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)('Should return "Invalid input" when a not a number', (numberList) => {
      expect(() => findNumbers(numberList)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { numberList: [1], expected: [] },
      { numberList: [5, 2, 3, 7], expected: [3, 7] },
      { numberList: [2, 5, 3, 7], expected: [5, 7] },
    ])(
      'Should return create an array of conditional numbers greater than the number before it',
      ({ numberList, expected }) => {
        expect(findNumbers(numberList)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-FILTER-03:
describe('generateFibonaci(n)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', [], {}, () => {}];
    it.each(invalidInput)('Throw new error "Invalid input" when n not a number', (n) => {
      expect(() => generateFibonaci(n)).toThrowError('Invalid input');
    });

    it('Throw new error "Invalid input" when n less than 0', () => {
      expect(() => generateFibonaci(-2)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { n: 5, expected: [0, 1, 1, 2, 3] },
      { n: 10, expected: [0, 1, 1, 2, 3, 5, 8] },
    ])('Should return create an array of number fibonaci less than n', ({ n, expected }) => {
      expect(generateFibonaci(n)).toStrictEqual(expected);
    });
  });
});

// ARRAY-FILTER-04:
describe('generatePrimeNumbers(n)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', [], {}, () => {}];
    it.each(invalidInput)('Throw new error "Invalid input" when n not a number', (n) => {
      expect(() => generatePrimeNumbers(n)).toThrowError('Invalid input');
    });

    it('Throw new error "Invalid input" when n less than 0', () => {
      expect(() => generatePrimeNumbers(-2)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { n: 10, expected: [2, 3, 5, 7] },
      { n: 20, expected: [2, 3, 5, 7, 11, 13, 17, 19] },
    ])('Should return create an array of number prime less than n', ({ n, expected }) => {
      expect(generatePrimeNumbers(n)).toStrictEqual(expected);
    });
  });
});

// ARRAY-FILTER-05: Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
describe('findAllNumbers(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => findAllNumbers(numberList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when numberList is empty', () => {
      expect(() => findAllNumbers([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { numberList: [1, 3, 5], expected: [] },
      { numberList: [1, 2, 5], expected: [] },
    ])(
      'Should return an empty array when numberList is not even or only the first positive even number is not included in the result array',
      ({ numberList, expected }) => {
        expect(findAllNumbers(numberList)).toStrictEqual(expected);
      }
    );

    it.each([
      { numberList: [1, 4, 5, -6, 4, 5, 4], expected: [4, 4] },
      { numberList: [1, 6, 4, 4, 6, 4, 6], expected: [6, 6] },
    ])(
      'Should return the position of the first even number and that number has many and discard the first',
      ({ numberList, expected }) => {
        expect(findAllNumbers(numberList)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-FILTER-06: Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
describe('filterAllNumber(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => filterAllNumber(numberList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when numberList is empty', () => {
      expect(() => filterAllNumber([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      { numberList: [2, 4, 6], expected: [] },
      { numberList: [234, 421, -623], expected: [] },
    ])(
      'Should return array empty when there is no number starting with odd number',
      ({ numberList, expected }) => {
        expect(filterAllNumber(numberList)).toStrictEqual(expected);
      }
    );

    it.each([
      { numberList: [1, 5, 6], expected: [1, 5] },
      { numberList: [234, 421, -123], expected: [-123] },
    ])('Should return array of number starting with odd', ({ numberList, expected }) => {
      expect(filterAllNumber(numberList)).toStrictEqual(expected);
    });
  });
});

// ARRAY-FILTER-07:
describe('findAllStudents(numberList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => findAllStudents(numberList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when numberList is empty', () => {
      expect(() => findAllStudents([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [
          { id: 1, name: 'Alice', math: 9 },
          { id: 2, name: 'Bob', math: 10 },
          { id: 3, name: 'John', math: 8 },
        ],
        expected: [],
      },
    ])(
      'Should return array empty when there is all student not less than 5',
      ({ numberList, expected }) => {
        expect(findAllStudents(numberList)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        numberList: [
          { id: 1, name: 'Alice', math: 9 },
          { id: 2, name: 'Bob', math: 4 },
          { id: 3, name: 'John', math: 0 },
        ],
        expected: [
          { id: 2, name: 'Bob', math: 4 },
          { id: 3, name: 'John', math: 0 },
        ],
      },
    ])(
      'Should return array empty when there is student less than 5',
      ({ numberList, expected }) => {
        expect(findAllStudents(numberList)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-FILTER-08:
describe('findAllProducts(productList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when productList not an array',
      (productList) => {
        expect(() => findAllProducts(productList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when productList is empty', () => {
      expect(() => findAllProducts([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        productList: [
          { id: 1, name: 'iphone X', isFreeShip: false },
          { id: 2, name: 'iphone 16 Pro', isFreeShip: false },
          { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
        ],
        expected: [],
      },
    ])('Should return array empty when not free ship', ({ productList, expected }) => {
      expect(findAllProducts(productList)).toStrictEqual(expected);
    });

    it.each([
      {
        productList: [
          { id: 1, name: 'iphone X', isFreeShip: true },
          { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
          { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
        ],
        expected: [
          { id: 1, name: 'iphone X', isFreeShip: true },
          { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
        ],
      },
    ])('Should return product when there is free ship is true', ({ productList, expected }) => {
      expect(findAllProducts(productList)).toStrictEqual(expected);
    });
  });
});

// ARRAY-FILTER-09:
describe('findAllIphones(productList)', () => {
  describe('Return Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when productList not an array',
      (productList) => {
        expect(() => findAllIphones(productList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when productList is empty', () => {
      expect(() => findAllIphones([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        productList: [
          { id: 1, name: 'Luxury IPhone X', amount: 0 },
          { id: 2, name: 'Super Cool samsung 16 Pro', amount: 2 },
          { id: 3, name: 'iphone 20 Pro', amount: 0 },
        ],
        expected: [],
      },
    ])(
      'Should return array empty when no iphone products or no iphone products in stock',
      ({ productList, expected }) => {
        expect(findAllIphones(productList)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        productList: [
          { id: 1, name: 'Luxury IPhone X', amount: 1 },
          { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
          { id: 3, name: 'iphone 20 Pro', amount: 2 },
          { id: 4, name: 'Super Cool samsung 16 Pro', amount: 2 },
        ],
        expected: [
          { id: 1, name: 'Luxury IPhone X', amount: 1 },
          { id: 3, name: 'iphone 20 Pro', amount: 2 },
        ],
      },
    ])(
      'Should return product when Have iphone products and have iphone quantity in stock',
      ({ productList, expected }) => {
        expect(findAllIphones(productList)).toStrictEqual(expected);
      }
    );
  });
});
