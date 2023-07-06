import { hasTwoDigitsWithSum } from './number-09';

describe('hasTwoDigitsWithSum(n, sum)', () => {
  describe('Should return false', () => {
    const invalidInput = [NaN, null, undefined, 'abc', [], {}, () => {}];
    test.each(invalidInput)('When input not a number', (input) => {
      expect(hasTwoDigitsWithSum(input)).toBe(false);
    });

    test.each([-2, -1, 0, 2, 9, 1000000, 1234567])('When n not (9, 1000000)', (n) => {
      expect(hasTwoDigitsWithSum(n, 10)).toBe(false);
    });

    test.each([-2, -1, 0, 2, 9, 19, 20])('When sum not (0, 19)', (sum) => {
      expect(hasTwoDigitsWithSum(10, sum)).toBe(false);
    });

    const inputError = [
      { n: 10, sum: 2 },
      { n: 100, sum: 2 },
      { n: 1000, sum: 2 },
      { n: 10000, sum: 2 },
      { n: 100000, sum: 2 },
    ];
    test.each(inputError)(
      'When the sum of two digits is not equal to the given sum',
      ({ n, sum }) => {
        expect(hasTwoDigitsWithSum(n, sum)).toBe(false);
      }
    );
  });

  describe('Should true return true', () => {
    const inputValid = [
      { n: 10, sum: 1 },
      { n: 12, sum: 3 },
      { n: 123, sum: 6 },
      { n: 1233, sum: 9 },
      { n: 12222, sum: 9 },
      { n: 12211, sum: 7 },
    ];
    test.each(inputValid)('When two digit is to sum ', ({ n, sum }) => {
      expect(hasTwoDigitsWithSum(n, sum)).toBe(true);
    });
  });
});
