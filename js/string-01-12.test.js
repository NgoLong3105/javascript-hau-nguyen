import {
  countWords,
  statisticsWordsV1,
  statisticsWordsV2,
  statisticsWordsV3,
  statisticsCharactersV1,
  statisticsCharactersV2,
  countEmailsV1,
  countEmailsV2,
  countEmailsV3,
  countURLsV1,
  countURLsV2,
  getDisplayedAddress,
  fillPath,
} from './string-01-12';

// lesson 1:
describe('countWords(str)', () => {
  describe('Should return error', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    test.each(invalidInput)('When str not an string', () => {
      expect(countWords(invalidInput)).toBe('Is not an string');
    });
  });

  describe('Should return result', () => {
    test('When str an empty string', () => {
      expect(countWords('')).toBe(0);
    });

    test('When str is a string', () => {
      expect(countWords('Hello World')).toBe(2);
      expect(countWords('Ngo Kim Long')).toBe(3);
      expect(countWords('Nguyen Thi Ngoc Duyen')).toBe(4);
    });
  });
});

// lesson 2:
describe('statisticsWordsV1(str)', () => {
  describe('Not an string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    it.each(invalidInput)('Should return "Not an string" when str not an string', () => {
      expect(statisticsWordsV1(invalidInput)).toBe('Not an string');
    });
  });

  describe('String empty', () => {
    it('Should return "String empty" When str is empty', () => {
      expect(statisticsWordsV1('')).toBe('String empty');
    });
  });

  describe('Return result', () => {
    it("Should return correct statistics when str dont't have redundant space", () => {
      expect(statisticsWordsV1('easy fontend easy')).toStrictEqual({ easy: 2, fontend: 1 });
    });

    it('Should return correct statistics when str has redundant space', () => {
      expect(statisticsWordsV1('Ngo   Kim    Long   Long')).toStrictEqual({
        ngo: 1,
        kim: 1,
        long: 2,
      });
    });
  });
});

describe('statisticsWordsV2(str)', () => {
  describe('Not an string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    it.each(invalidInput)('Should return "Not an string" when str not an string', () => {
      expect(statisticsWordsV2(invalidInput)).toBe('Not an string');
    });
  });

  describe('String empty', () => {
    it('Should return "String empty" When str is empty', () => {
      expect(statisticsWordsV2('')).toBe('String empty');
    });
  });

  describe('Return result', () => {
    it("Should return correct statistics when str dont't have redundant space", () => {
      expect(statisticsWordsV2('easy fontend easy')).toStrictEqual({ easy: 2, fontend: 1 });
    });

    it('Should return correct statistics when str has redundant space', () => {
      expect(statisticsWordsV2('Ngo   Kim    Long   Long')).toStrictEqual({
        ngo: 1,
        kim: 1,
        long: 2,
      });
    });
  });
});

describe('statisticsWordsV3(str)', () => {
  describe('Not an string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    it.each(invalidInput)('Should return "Not an string" when str not an string', () => {
      expect(statisticsWordsV3(invalidInput)).toBe('Not an string');
    });
  });

  describe('String empty', () => {
    it('Should return "String empty" When str is empty', () => {
      expect(statisticsWordsV3('')).toBe('String empty');
    });
  });

  describe('Return result', () => {
    it("Should return correct statistics when str dont't have redundant space", () => {
      expect(statisticsWordsV3('easy fontend easy')).toStrictEqual({ easy: 2, fontend: 1 });
    });

    it('Should return correct statistics when str has redundant space', () => {
      expect(statisticsWordsV3('Ngo   Kim    Long   Long')).toStrictEqual({
        ngo: 1,
        kim: 1,
        long: 2,
      });
    });
  });
});

// lesson 3:
describe('statisticsCharactersV1(str)', () => {
  describe('Should return not an string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    test.each(invalidInput)('When str not an string', () => {
      expect(statisticsCharactersV1(invalidInput)).toBe('Not an string');
    });
  });

  describe('Should return String empty', () => {
    test('When str is empty', () => {
      expect(statisticsCharactersV1('')).toBe('String empty');
    });
  });

  describe('Should return statistics words', () => {
    test('When str is an string', () => {
      expect(statisticsCharactersV1('aa b cc ')).toStrictEqual({ a: 2, b: 1, c: 2, space: 3 });
    });
  });
});

describe('statisticsCharactersV2(str)', () => {
  describe('Should return not an string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    test.each(invalidInput)('When str not an string', () => {
      expect(statisticsCharactersV2(invalidInput)).toBe('Not an string');
    });
  });

  describe('Should return String empty', () => {
    test('When str is empty', () => {
      expect(statisticsCharactersV2('')).toBe('String empty');
    });
  });

  describe('Should return statistics words', () => {
    test('When str is an string', () => {
      expect(statisticsCharactersV2('aa b cc ')).toStrictEqual({ a: 2, b: 1, c: 2, space: 3 });
    });
  });
});

// lesson 4:
describe('countEmailsV1(str)', () => {
  describe('Should return Please enter a valid string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    test.each(invalidInput)('When invalid email input str', (input) => {
      expect(countEmailsV1(input)).toBe('Please enter a valid string');
    });
  });

  describe('Should return Please enter the correct email', () => {
    const invalidEmailInput = ['abc.com', 'a@c.com', '@ abc.com'];
    test.each(invalidEmailInput)('When invalid email input str', (input) => {
      expect(countEmailsV2(input)).toBe('Please enter the correct email');
    });
  });

  describe('Should count the number of emails in the thread', () => {
    test('When str is character @ center', () => {
      expect(countEmailsV1('abc@super.com')).toBe(1);
      expect(countEmailsV1('easy@frontend.com or easy@frontend.com.vn')).toBe(2);
    });
  });
});

describe('countEmailsV2(str)', () => {
  describe('Should return Please enter a valid string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    test.each(invalidInput)('When invalid email input str', (input) => {
      expect(countEmailsV2(input)).toBe('Please enter a valid string');
    });
  });

  describe('Should return Please enter the correct email', () => {
    const invalidEmailInput = ['abc.com', 'a@c.com', '@ abc.com'];
    test.each(invalidEmailInput)('When invalid email input str', (input) => {
      expect(countEmailsV2(input)).toBe('Please enter the correct email');
    });
  });

  describe('Should count the number of emails in the thread', () => {
    test('When str is character @ center', () => {
      expect(countEmailsV2('abc@super.com')).toBe(1);
      expect(countEmailsV2('easy@frontend.com or easy@frontend.com.vn')).toBe(2);
    });
  });
});

describe('countEmailsV3(str)', () => {
  describe('Should return Please enter a valid string', () => {
    const invalidInput = [NaN, null, undefined, 0, {}, [], () => {}];
    test.each(invalidInput)('When invalid email input str', (input) => {
      expect(countEmailsV3(input)).toBe('Please enter a valid string');
    });
  });

  describe('Should return Please enter the correct email', () => {
    const invalidEmailInput = ['abc.com', 'a@c.com', '@ abc.com'];
    test.each(invalidEmailInput)('When invalid email input str', (input) => {
      expect(countEmailsV3(input)).toBe('Please enter the correct email');
    });
  });

  describe('Should count the number of emails in the thread', () => {
    test('When str is character @ center', () => {
      expect(countEmailsV3('abc@super.com')).toBe(1);
      expect(countEmailsV3('easy@frontend.com or easy@frontend.com.vn')).toBe(2);
    });
  });
});

// lesson 5:
describe('countURLsV1(str)', () => {
  describe('Should return Invalid URL', () => {
    let invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    test.each(invalidInput)('When str not an string', () => {
      expect(countURLsV1(invalidInput)).toBe('Invalid URL');
    });
  });

  describe('Should return 0', () => {
    let invalidInputUrls = [
      { url: 'my website is: ws:fontend.com you can visit it', expected: 0 },
      { url: 'my website is: wss://fontend.c you can visit it', expected: 0 },
      { url: 'my website is: ht://java.com you can visit it', expected: 0 },
      { url: 'my website is: https://ez.com you can visit it', expected: 0 },
    ];
    test.each(invalidInputUrls)('When str not an string', (input) => {
      expect(countURLsV1(input.url)).toBe(input.expected);
    });
  });

  describe('Shoule return count URL', () => {
    let validInput = [
      { url: 'my website is: ws://backend.com you can visit it', expected: 1 },
      { url: 'my website is: wss://frontend.com you can visit it', expected: 1 },
      { url: 'my website is: http://java.com you can visit it', expected: 1 },
      { url: 'my website is: https://html.com and https://css.com', expected: 2 },
    ];
    test.each(validInput)('When str an URL', (input) => {
      expect(countURLsV1(input.url)).toBe(input.expected);
    });
  });
});

describe('countURLsV2(str)', () => {
  describe('Should return Invalid URL', () => {
    let invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    test.each(invalidInput)('When str not an string', () => {
      expect(countURLsV2(invalidInput)).toBe('Invalid URL');
    });
  });

  describe('Should return 0', () => {
    let invalidInputUrls = [
      { url: 'my website is: ws:fontend.com you can visit it', expected: 0 },
      { url: 'my website is: wss://fontend.c you can visit it', expected: 0 },
      { url: 'my website is: ht://java.com you can visit it', expected: 0 },
      { url: 'my website is: https://ez.com you can visit it', expected: 0 },
    ];
    test.each(invalidInputUrls)('When str not an string', (input) => {
      expect(countURLsV2(input.url)).toBe(input.expected);
    });
  });

  describe('Shoule return count URL', () => {
    let validInput = [
      { url: 'my website is: ws://backend.com you can visit it', expected: 1 },
      { url: 'my website is: wss://frontend.com you can visit it', expected: 1 },
      { url: 'my website is: http://java.com you can visit it', expected: 1 },
      { url: 'my website is: https://html.com and https://css.com', expected: 2 },
    ];
    test.each(validInput)('When str an URL', (input) => {
      expect(countURLsV2(input.url)).toBe(input.expected);
    });
  });
});

// lesson 6:
describe('getDisplayedAddress(address)', () => {
  describe('Invalid object', () => {
    let invalidInputs = [NaN, null, undefined, 0, 'abc', [], () => {}];

    test.each(invalidInputs)('Throws an error when input is not an object: %p', (input) => {
      expect(() => getDisplayedAddress(input)).toThrowError('Invalid input');
    });

    test('Throws an error when input object is empty', () => {
      expect(() => getDisplayedAddress({})).toThrowError('Invalid input');
    });
  });

  describe('Shoule return string full infomation', () => {
    let inputAddress = [
      {
        address: {
          number: 123,
          street: 'Nguyen Cong Tru',
          ward: 'Ward 11',
          district: 'Binh Thanh District',
          city: 'HCMC',
        },
        expected: '123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC',
      },
      {
        address: {
          number: 123,
          ward: 'Ward 11',
          district: 'Binh Thanh District',
        },
        expected: '123, Ward 11, Binh Thanh District',
      },
      {
        address: {
          street: 'Nguyen Cong Tru',
          district: 'Binh Thanh District',
        },
        expected: 'Nguyen Cong Tru, Binh Thanh District',
      },
    ];
    test.each(inputAddress)('When it is an object', (input) => {
      expect(getDisplayedAddress(input.address)).toBe(input.expected);
    });
  });
});

// lesson 7:
describe('fillPath(path, params)', () => {
  describe('Invalid input', () => {
    let invalidInputs = [NaN, null, undefined, 0, [], () => {}];

    test.each(invalidInputs)('Should throw an error when path is not a string: %p', (input) => {
      expect(() => fillPath(input, { productId: 2 })).toThrowError('Invalid input');
    });

    test('Should throw an error when path is empty', () => {
      expect(() => fillPath('', { productId: 2 })).toThrowError('Invalid input');
    });

    test.each(invalidInputs)('Should throw an error when params is not an object: %p', (input) => {
      expect(() => fillPath('abc', input)).toThrowError('Invalid input');
    });

    test('Should throw an error when params is empty', () => {
      expect(() => fillPath('abc', {})).toThrowError('Invalid input');
    });
  });

  describe('Valid input', () => {
    const urlProductIds = [
      { path: '/products/:productId', params: { productId: 123 }, expected: '/products/123' },
      {
        path: '/categories/:categoryId/products/:productId',
        params: { categoryId: 1, productId: 2 },
        expected: '/categories/1/products/2',
      },
      {
        path: '/categories/:categoryId/products/:productId',
        params: { productId: 2 },
        expected: '/categories/:categoryId/products/2',
      },
    ];

    test.each(urlProductIds)(
      'should replace the params strings in the path with the corresponding values in the params object',
      ({ path, params, expected }) => {
        expect(fillPath(path, params)).toEqual(expected);
      }
    );
  });
});
