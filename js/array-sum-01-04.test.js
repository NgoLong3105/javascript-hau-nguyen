import { sumEvenNumbers, sumAllDigits, sumAllMinDigits, calcCartTotal } from './array-sum-01-04';

// ARRAY-SUM-01:
describe('sumEvenNumbers(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => sumEvenNumbers(numberList)).toThrowError('Invalid input');
      }
    );

    it('Throw new error "Invalid input" when numberList is empty', () => {
      expect(() => sumEvenNumbers([])).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [20, 18, 17, 5, 2, 1],
        expected: 0,
      },
    ])(
      'Should return 0 when no even number is greate than the preceding numbers',
      ({ numberList, expected }) => {
        expect(sumEvenNumbers(numberList)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        numberList: [-10, -4, 2, 8, 5, 7],
        expected: 6,
      },
      {
        numberList: [0, 2, 8, 5, 4],
        expected: 10,
      },
    ])(
      'Should return the sum of even numbers is greate than the sum of the preceding numbers',
      ({ numberList, expected }) => {
        expect(sumEvenNumbers(numberList)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-SUM-02:
describe('sumAllDigits(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => sumAllDigits(numberList)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return 0', () => {
    it('Should return 0 when numberList empty', () => {
      expect(sumAllDigits([])).toStrictEqual(0);
    });

    it('Should return 0 when array of number all 0', () => {
      expect(sumAllDigits([0, 0])).toStrictEqual(0);
    });
  });

  describe('Return total', () => {
    it.each([
      {
        numberList: [4],
        expected: 4,
      },
      {
        numberList: [123, 4],
        expected: 10,
      },
      {
        numberList: [1234, 55],
        expected: 20,
      },
    ])(
      'Should return sum of the digits of each number in the array',
      ({ numberList, expected }) => {
        expect(sumAllDigits(numberList)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-SUM-03:
describe('sumAllMinDigits(numberList)', () => {
  describe('Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when numberList not an array',
      (numberList) => {
        expect(() => sumAllMinDigits(numberList)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return 0', () => {
    it('Should return 0 when numberList empty', () => {
      expect(sumAllMinDigits([])).toStrictEqual(0);
    });

    it('Should return 0 when array of number all 0', () => {
      expect(sumAllMinDigits([0, 0])).toStrictEqual(0);
    });
  });

  describe('Return total', () => {
    it.each([
      {
        numberList: [123],
        expected: 1,
      },
      {
        numberList: [123, 532],
        expected: 3,
      },
    ])('Should return sum all minimum digits', ({ numberList, expected }) => {
      expect(sumAllMinDigits(numberList)).toStrictEqual(expected);
    });
  });
});

// ARRAY-SUM-04: Tổng tiền của giỏ hàng
describe('calcCartTotal(cartItemList)', () => {
  describe('Invalid input', () => {
    const invalidInput = [NaN, null, undefined, '', 0, {}, () => {}];
    it.each(invalidInput)(
      'Throw new error "Invalid input" when cartItemList not an array',
      (cartItemList) => {
        expect(() => calcCartTotal(cartItemList)).toThrowError('Invalid input');
      }
    );

    it('Should return 0 when cartItemList empty', () => {
      expect(() => calcCartTotal([])).toThrowError('Invalid input');
    });
  });

  describe('Return total', () => {
    it.each([
      {
        cartItemList: [
          { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
          { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
        ],
        expected: 250000,
      },
      {
        cartItemList: [
          { id: 1, product: { id: 1, price: 50000 }, quantity: 0 },
          { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
        ],
        expected: 200000,
      },
    ])(
      'Should return calculate the total amount of the item when cartItemList have product',
      ({ cartItemList, expected }) => {
        expect(calcCartTotal(cartItemList)).toStrictEqual(expected);
      }
    );
  });
});
