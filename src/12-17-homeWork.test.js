import {
  getUniqueWords,
  buildCategoryMapV1,
  buildCategoryMapV2,
  isValidPIN,
  isValidBracketPairs,
} from './12-17-homeWork';

describe('getUniqueWords(sentence)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    it.each(invalidInput)('Should return array empty when sentence is not an string', (input) => {
      expect(getUniqueWords(input)).toEqual([]);
    });

    it('Should return array empty when sentence is string empty', () => {
      expect(getUniqueWords('')).toEqual([]);
    });
  });

  describe('Return result', () => {
    it('Should return array of unique words in sentence when do not count spaces as 1 word', () => {
      const sentence = 'frontend is easy but easy to die';
      const expected = ['frontend', 'is', 'easy', 'but', 'to', 'die'];
      expect(getUniqueWords(sentence)).toStrictEqual(expected);
    });
  });
});

describe('buildCategoryMapV1(categoryList)', () => {
  describe('Throw new error', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)(
      'Throw new Error ("Please enter a valid") when categoryList is not an array',
      (input) => {
        expect(() => buildCategoryMapV1(input)).toThrowError('Please enter a valid');
      }
    );

    it('Throw new Error ("Please enter a valid") when categoryList is array empty', () => {
      expect(() => buildCategoryMapV1([])).toThrowError('Please enter a valid');
    });
  });

  describe('Return result', () => {
    it('Should return array of unique words in sentence when do not count spaces as 1 word', () => {
      const categoryList = [
        { id: 1, name: 'iphone' },
        { id: 2, name: 'macbook' },
      ];
      const expected = {
        1: { id: 1, name: 'iphone' },
        2: { id: 2, name: 'macbook' },
      };
      expect(buildCategoryMapV1(categoryList)).toEqual(expected);
    });
  });
});

describe('buildCategoryMapV2(categoryList)', () => {
  describe('Throw new error', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)(
      'Throw new Error ("Please enter a valid") when categoryList is not an array',
      (input) => {
        expect(() => buildCategoryMapV2(input)).toThrowError('Please enter a valid');
      }
    );

    it('Throw new Error ("Please enter a valid") when categoryList is array empty', () => {
      expect(() => buildCategoryMapV2([])).toThrowError('Please enter a valid');
    });
  });

  describe('Return result', () => {
    it('Should return array of unique words in sentence when do not count spaces as 1 word', () => {
      const categoryList = [
        { id: 1, name: 'iphone' },
        { id: 2, name: 'macbook' },
      ];
      const expected = new Map([
        [1, { id: 1, name: 'iphone' }],
        [2, { id: 2, name: 'macbook' }],
      ]);
      expect(buildCategoryMapV2(categoryList)).toEqual(expected);
    });
  });
});

describe('isValidPIN(pin)', () => {
  describe('Return false', () => {
    const invalidInput = [NaN, null, undefined, '', [], {}, () => {}];
    it.each(invalidInput)('Should return false when pin code is not a number', (input) => {
      expect(isValidPIN(input)).toBe(false);
    });

    it('Should return false when pin code is less than or equal 0', () => {
      expect(isValidPIN(0)).toBe(false);
      expect(isValidPIN(-5)).toBe(false);
    });

    it('Should return false when pin code length is not equal to 6', () => {
      expect(isValidPIN(12345)).toBe(false);
      expect(isValidPIN(1234567)).toBe(false);
    });

    it('Should return false when pin code cannot be an ascending or descending number', () => {
      expect(isValidPIN(123456)).toBe(false);
      expect(isValidPIN(654321)).toBe(false);
    });

    it('Should return false when each number cannot be pressed more than 2 times', () => {
      expect(isValidPIN(111126)).toBe(false);
      expect(isValidPIN(663266)).toBe(false);
    });
  });

  describe('Return true', () => {
    it.each([310503, 140203, 722003, 123123])('Should return true when condition valid', (pin) => {
      expect(isValidPIN(pin)).toBe(true);
    });
  });
});

describe('isValidBracketPairs(str)', () => {
  describe('Throw new error', () => {
    const invalidInput = [NaN, null, undefined, 123, true, '', [], {}, () => {}];
    it.each(invalidInput)('Should return false when pin code is not a number', (input) => {
      expect(() => isValidBracketPairs(input)).toThrow('Invalid input');
    });

    it('should throw an error for empty input string', () => {
      expect(() => isValidBracketPairs('')).toThrow('Invalid input');
      expect(() => isValidBracketPairs('    ')).toThrow('Invalid input');
    });
  });
  describe('Return false', () => {
    it('should return false for invalid bracket pairs', () => {
      expect(isValidBracketPairs('(a + b) * c[1')).toBe(false);
      expect(isValidBracketPairs('[(])')).toBe(false);
      expect(isValidBracketPairs('(({]])}')).toBe(false);
      expect(isValidBracketPairs('())(')).toBe(false);
    });

    it('should return false for unclosed brackets in the input string', () => {
      expect(isValidBracketPairs('[{(')).toBe(false);
      expect(isValidBracketPairs('[()')).toBe(false);
      expect(isValidBracketPairs('{{[')).toBe(false);
    });

    it('should return false for unopened brackets in the input string', () => {
      expect(isValidBracketPairs(')]}')).toBe(false);
      expect(isValidBracketPairs(')')).toBe(false);
      expect(isValidBracketPairs('}})')).toBe(false);
    });
  });

  describe('Return true', () => {
    it('should return true for valid bracket pairs', () => {
      expect(isValidBracketPairs('(a + b) * ([c + d])')).toBe(true);
      expect(isValidBracketPairs('[()]{}')).toBe(true);
      expect(isValidBracketPairs('({[]})')).toBe(true);
      expect(isValidBracketPairs('([])')).toBe(true);
    });

    it('should return true when there are no brackets in the input string', () => {
      expect(isValidBracketPairs('Hello, world!')).toBe(true);
      expect(isValidBracketPairs('12345')).toBe(true);
    });
  });
});
