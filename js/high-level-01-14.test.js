import {
  withdraw,
  getLanguageCodeFromURL,
  isStrongPasswordV1,
  isStrongPasswordV2,
  uniqueLetters,
  countWords,
  mergeArray,
  findMostFrequentNumberV1,
  findMostFrequentNumberV2,
  countStudentsMale,
  calcTotalAmountCart,
  productListAmountMoreThan100000,
  chunkArray,
  findSumPair,
  findFirstNumberDuplicate,
  validMountainArrayV1,
  validMountainArrayV2,
} from './high-level-01-14';

describe('withdraw(amount)', () => {
  describe('Throw new Error', () => {
    const invalidInput = [NaN, null, undefined, , '', [], {}, () => {}];
    it.each(invalidInput)(
      'Throw new error("Please enter a valid number") when amount is not a number',
      (input) => {
        expect(() => withdraw(input)).toThrowError('Please enter a valid number');
      }
    );

    it.each([{ amount: 125000 }])(
      'Throw new error("Invalid balance") when amount not multiple 50000',
      ({ amount }) => {
        expect(() => withdraw(amount)).toThrowError('Invalid balance');
      }
    );

    it.each([{ amount: 90000000 }])(
      'Throw new error("Insufficient balance from ATM") when ATM not enough',
      ({ amount }) => {
        expect(() => withdraw(amount)).toThrowError('Insufficient balance from ATM');
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        amount: 200000,
        expected: { k500: 0, k200: 1, k100: 0, k50: 0 },
      },
      {
        amount: 500000,
        expected: { k500: 1, k200: 0, k100: 0, k50: 0 },
      },
      {
        amount: 2000000,
        expected: { k500: 2, k200: 5, k100: 0, k50: 0 },
      },
      {
        amount: 5000000,
        expected: { k500: 2, k200: 5, k100: 10, k50: 40 },
      },
    ])(
      'Return the ATM to pay when the amount is a mupltiple of 50000 and ATM has enough money to pay',
      ({ amount, expected }) => {
        expect(withdraw(amount)).toEqual(expected);
      }
    );
  });
});

describe('getLanguageCodeFromURL(url)', () => {
  describe('Throw new Error("Please enter the string")', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    it.each(invalidInput)(
      'Throw new error("Please enter the string") when url is not a string',
      (url) => {
        expect(() => getLanguageCodeFromURL(url)).toThrowError('Please enter the string');
      }
    );

    it('Throw new error("Please enter the string") when url is empty', () => {
      expect(() => getLanguageCodeFromURL('')).toThrowError('Please enter the string');
    });
  });

  // describe('Throw new Error("Please enter a valid string")', () => {
  //   const invalidURL = ['abc', 'https://abc', 'abc.com'];
  //   it.each([invalidURL])(
  //     'returns "Please enter a valid string" when input is not a string or invalid URL or the domain is less than 3',
  //     (input) => {
  //       expect(() => getLanguageCodeFromURL(input)).toThrowError('Please enter a valid string');
  //     }
  //   );

  //   it.each([['https://ab.com']])(
  //     'returns "Please enter a valid string" when domain length less than 3',
  //     (input) => {
  //       expect(() => getLanguageCodeFromURL(input)).toThrowError('Please enter a valid string');
  //     }
  //   );
  // });

  describe('Return result', () => {
    it.each([
      {
        url: 'https://ezfontend.com/en',
        expected: 'en',
      },
      {
        url: 'https://ezfontend.com/cn',
        expected: 'cn',
      },
      {
        url: 'https://ezfontend.com/vi',
        expected: 'vi',
      },
    ])(
      'Return the language code of the string extracted from the url when the url has a supported language',
      ({ url, expected }) => {
        expect(getLanguageCodeFromURL(url)).toEqual(expected);
      }
    );

    it.each([
      {
        url: 'https://abc.com',
        expected: 'en',
      },
      {
        url: 'https://ezfontend.com/abc',
        expected: 'en',
      },
    ])(
      'Return the "en" language code of the string extracted from the url when the url has no supported language',
      ({ url, expected }) => {
        expect(getLanguageCodeFromURL(url)).toEqual(expected);
      }
    );
  });
});

describe('isStrongPasswordV1(password)', () => {
  describe('Throw new Error("Please enter a valid password") ', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    it.each(invalidInput)(
      'Throw new error("Please enter a valid password") when password is not a string',
      (input) => {
        expect(() => isStrongPasswordV1(input)).toThrowError('Please enter a valid password');
      }
    );
  });

  describe('Return false', () => {
    it.each([
      {
        password: '',
        expected: false,
      },
      {
        password: '500',
        expected: false,
      },
      {
        password: 'super strong',
        expected: false,
      },
    ])(
      'Returns false when password has not at least 8 character, at least 1 uppercase characters, at least 1 lowercase characters, at least 1 number, at least 1 characters special',
      ({ password, expected }) => {
        expect(isStrongPasswordV1(password)).toEqual(expected);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      {
        password: 'Sup3rC0o!',
        expected: true,
      },
      {
        password: 'NgoLong@1',
        expected: true,
      },
    ])(
      'Returns true when the password has at least 8 characters, at least 1 uppercase character, at least 1 lowercase character, at least 1 number, at least 1 special character',
      ({ password, expected }) => {
        expect(isStrongPasswordV1(password)).toEqual(expected);
      }
    );
  });
});

describe('isStrongPasswordV2(password)', () => {
  describe('Throw new Error("Please enter a valid password") ', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    it.each(invalidInput)(
      'Throw new error("Please enter a valid password") when password is not a string',
      (input) => {
        expect(() => isStrongPasswordV2(input)).toThrowError('Please enter a valid password');
      }
    );
  });

  describe('Return false', () => {
    it.each([
      {
        password: '',
        expected: false,
      },
      {
        password: '500',
        expected: false,
      },
      {
        password: 'super strong',
        expected: false,
      },
    ])(
      'Returns false when password has not at least 8 character, at least 1 uppercase characters, at least 1 lowercase characters, at least 1 number, at least 1 characters special',
      ({ password, expected }) => {
        expect(isStrongPasswordV2(password)).toEqual(expected);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      {
        password: 'Sup3rC0o!',
        expected: true,
      },
      {
        password: 'NgoLong@1',
        expected: true,
      },
    ])(
      'Returns true when the password has at least 8 characters, at least 1 uppercase character, at least 1 lowercase character, at least 1 number, at least 1 special character',
      ({ password, expected }) => {
        expect(isStrongPasswordV2(password)).toEqual(expected);
      }
    );
  });
});

// Remove duplicated letters
describe('uniqueLetters(str)', () => {
  describe('Throw new Error("Please enter a valid input") ', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    it.each(invalidInput)(
      'Throw new error("Please enter a valid input") when str is not a string',
      (input) => {
        expect(() => uniqueLetters(input)).toThrowError('Please enter a valid input');
      }
    );
  });

  describe('Return new string', () => {
    it.each([
      {
        str: '',
        expected: '',
      },
      {
        str: 'abc',
        expected: 'abc',
      },
      {
        str: 'easy frontend',
        expected: 'asy frotd',
      },
      {
        str: 'easy frontend hi',
        expected: 'asy frotd hi',
      },
      {
        str: 'aabccddeff',
        expected: 'be',
      },
    ])(
      'Returns the new string will retain only characters that appear once and characters that appear twice or more will be removed from the string',
      ({ str, expected }) => {
        expect(uniqueLetters(str)).toEqual(expected);
      }
    );
  });
});

// Count words in string
describe('countWords(str)', () => {
  describe('Throw new Error("Please enter a valid input") ', () => {
    const invalidInput = [NaN, null, undefined, 0, [], {}, () => {}];
    it.each(invalidInput)(
      'Throw new error("Please enter a valid input") when str is not a string',
      (input) => {
        expect(() => countWords(input)).toThrowError('Please enter a valid input');
      }
    );
  });

  describe('Return new string', () => {
    it.each([
      {
        str: '',
        expected: 0,
      },
      {
        str: 'abc',
        expected: 1,
      },
      {
        str: '    easy    frontend      ',
        expected: 2,
      },
      {
        str: '   easy   frontend   hi   123    ',
        expected: 3,
      },
    ])(
      "Returns count words when string at least one character a-z, A-Z if it's full of spaces, it doesn't count as a word",
      ({ str, expected }) => {
        expect(countWords(str)).toEqual(expected);
      }
    );
  });
});

// Merge array and remove duplicated numbers
describe('mergeArray(a, b)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];

    it.each([...invalidInput.map((a) => [a, []]), ...invalidInput.map((b) => [[], b])])(
      'Return array empty when a or b not array',
      (a, b) => {
        expect(mergeArray(a, b)).toEqual([]);
      }
    );

    it('Return array empty when a and b a array empty', () => {
      expect(mergeArray([], [])).toEqual([]);
    });
  });

  describe('Return merge array', () => {
    it.each([
      {
        a: [],
        b: [1, 2, 3],
        expected: [1, 2, 3],
      },
      {
        a: [1, 2, 3],
        b: [3, 4, 5],
        expected: [1, 2, 3, 4, 5],
      },
      {
        a: ['a', 'b', 'c'],
        b: ['b', 'c', 'd'],
        expected: ['a', 'b', 'c', 'd'],
      },
    ])(
      'Returns merge array when a and b is a array, each array with different numbers',
      ({ a, b, expected }) => {
        expect(mergeArray(a, b)).toEqual(expected);
      }
    );
  });
});

// Find number appear the most in aray
describe('findMostFrequentNumberV1(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return undefined when numberList is not a array', (input) => {
      expect(findMostFrequentNumberV1(input)).toBeUndefined();
    });

    it('Return undefined when numberList is array empty', () => {
      expect(findMostFrequentNumberV1([])).toBeUndefined();
    });
  });

  describe('Return the most frequent number', () => {
    it.each([
      {
        numberList: [1, 2, 3],
        expected: 1,
      },
      {
        numberList: [2, 1, 3],
        expected: 2,
      },
      {
        numberList: [2, 2, 3, 3, 2, 3, 3],
        expected: 3,
      },
    ])(
      'Return the most frequent number when numberList is an mupltiple numbers appear at the same time, return first number',
      ({ numberList, expected }) => {
        expect(findMostFrequentNumberV1(numberList)).toEqual(expected);
      }
    );
  });
});

describe('findMostFrequentNumberV2(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return undefined when numberList is not a array', (input) => {
      expect(findMostFrequentNumberV2(input)).toBeUndefined();
    });

    it('Return undefined when numberList is array empty', () => {
      expect(findMostFrequentNumberV2([])).toBeUndefined();
    });
  });

  describe('Return the most frequent number', () => {
    it.each([
      {
        numberList: [1, 2, 3],
        expected: 1,
      },
      {
        numberList: [2, 1, 3],
        expected: 2,
      },
      {
        numberList: [2, 2, 3, 3, 2, 3, 3],
        expected: 3,
      },
    ])(
      'Return the most frequent number when numberList is an mupltiple numbers appear at the same time, return first number',
      ({ numberList, expected }) => {
        expect(findMostFrequentNumberV2(numberList)).toEqual(expected);
      }
    );
  });
});

// Count the number of male students
describe('countStudentsMale(studentList)', () => {
  describe('Return 0', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return 0 when numberList is not a array', (input) => {
      expect(countStudentsMale(input)).toBe(0);
    });

    it('Return 0 when numberList is array empty', () => {
      expect(countStudentsMale([])).toBe(0);
    });
  });

  describe('Return count the number of male students', () => {
    it.each([
      {
        studentList: [
          { id: 1, gender: 'female' },
          { id: 2, gender: 'female' },
        ],
        expected: 0,
      },
      {
        studentList: [{ gender: 'male' }, { id: 1, gender: 'female' }],
        expected: 0,
      },
      {
        studentList: [
          { id: 1, gender: 'male' },
          { id: 2, gender: 'female' },
        ],
        expected: 1,
      },
      {
        studentList: [
          { id: 1, gender: 'male' },
          { id: 2, gender: 'male' },
        ],
        expected: 2,
      },
    ])(
      'Return the number of male students when studentList has an id and either male or female gender',
      ({ studentList, expected }) => {
        expect(countStudentsMale(studentList)).toEqual(expected);
      }
    );
  });
});

// Calculation the total amount of the cart
describe('calcTotalAmountCart(cartItemList)', () => {
  describe('Return 0', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return 0 when cartItemList is not a array', (input) => {
      expect(calcTotalAmountCart(input)).toBe(0);
    });

    it('Return 0 when cartItemList is array empty', () => {
      expect(calcTotalAmountCart([])).toBe(0);
    });
  });

  describe('Return calculation the total amount of the cart', () => {
    it.each([
      {
        cartItemList: [
          { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
          { product: { id: 2, price: 50000 }, quantity: 2 },
        ],
        expected: 400000,
      },
      {
        cartItemList: [
          { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
          { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
        ],
        expected: 500000,
      },
      {
        cartItemList: [
          { id: 1, product: { id: 1, price: 100000 }, quantity: 0 },
          { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
        ],
        expected: 100000,
      },
    ])(
      'Return calculation the total amount of the cart when cartItemList has cartItem have 3 key id, product and quantity',
      ({ cartItemList, expected }) => {
        expect(calcTotalAmountCart(cartItemList)).toEqual(expected);
      }
    );
  });
});

// Find products has  amount more than 100000đ
describe('productListAmountMoreThan100000(productList)', () => {
  describe('Return array empty', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return array empty when productList is not a array', (input) => {
      expect(productListAmountMoreThan100000(input)).toStrictEqual([]);
    });

    it('Return array empty when productList is array empty', () => {
      expect(productListAmountMoreThan100000([])).toStrictEqual([]);
    });
  });

  describe('Return products has amount more than 100000đ', () => {
    it.each([
      {
        productList: [
          { id: 1, product: { id: 1, price: 10000 }, quantity: 4 },
          { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
          { id: 3, product: { id: 3, price: 70000 }, quantity: 2 },
        ],
        expected: [],
      },
      {
        productList: [
          { id: 1, product: { id: 1, price: 100000 }, quantity: 1 },
          { product: { id: 2, price: 150000 }, quantity: 2 },
          { product: { id: 3, price: 270000 } },
        ],
        expected: [],
      },
      {
        productList: [
          { id: 1, product: { id: 1, price: 100000 }, quantity: 1 },
          { id: 2, product: { id: 2, price: 150000 }, quantity: 2 },
          { id: 3, product: { id: 3, price: 270000 }, quantity: 1 },
        ],
        expected: [
          { id: 2, product: { id: 2, price: 150000 }, quantity: 2 },
          { id: 3, product: { id: 3, price: 270000 }, quantity: 1 },
        ],
      },
    ])(
      'Return products has amount more than 100000đ when productList has price more than 100000đ and productList has product have 3 key id, product and quantity',
      ({ productList, expected }) => {
        expect(productListAmountMoreThan100000(productList)).toStrictEqual(expected);
      }
    );
  });
});

// Returns an array evenly divided into subarrays by size
describe('chunkArray(arr, size)', () => {
  describe('Return array empty', () => {
    const invalidArray = [NaN, null, undefined, 0, '', {}, () => {}];
    const invalidSize = [NaN, null, undefined, '', [], {}, () => {}];
    it.each(invalidArray)('Return array empty when arr is not a array', (arr) => {
      expect(chunkArray(arr, 1)).toStrictEqual([]);
    });

    it('Return array empty when arr is array empty', () => {
      expect(chunkArray([], 1)).toStrictEqual([]);
    });

    it.each(invalidSize)('Return array empty when size is not a number', (size) => {
      expect(chunkArray([1, 2, 3], size)).toStrictEqual([]);
    });

    it('Return array empty when size is less than 1', () => {
      expect(chunkArray([1, 2, 3], -4)).toStrictEqual([]);
      expect(chunkArray([1, 2, 3], 0)).toStrictEqual([]);
    });

    it('Return array empty when size is more than 20', () => {
      expect(() => chunkArray([1, 2, 3], 21)).toThrowError('Too many chunks');
    });
  });

  describe('Return split array into subarray', () => {
    it.each([
      {
        arr: [1, 2, 3],
        size: 1,
        expected: [[1], [2], [3]],
      },
    ])(
      'Return an array evenly divided into subarray by size when valid condition',
      ({ arr, size, expected }) => {
        expect(chunkArray(arr, size)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        arr: [1, 2, 3],
        size: 2,
        expected: [[1, 2], [3]],
      },
    ])(
      'Return if the array is not evenly divied among the subarrays then array has the fewest element at the end of the array',
      ({ arr, size, expected }) => {
        expect(chunkArray(arr, size)).toStrictEqual(expected);
      }
    );
  });
});

// Return find sum pair
describe('findSumPair(numberList, targetSum)', () => {
  describe('Return array empty', () => {
    const invalidNum = [NaN, null, undefined, 0, '', {}, () => {}];
    const invalidSum = [NaN, null, undefined, '', [], {}, () => {}];
    it.each(invalidNum)('Return array empty when numberList is not a array', (numberList) => {
      expect(findSumPair(numberList, 1)).toStrictEqual([]);
    });

    it('Return array empty when numberList is array empty', () => {
      expect(findSumPair([], 1)).toStrictEqual([]);
    });

    it.each(invalidSum)('Return array empty when targetSum is not a number', (targetSum) => {
      expect(findSumPair([1, 2, 3], targetSum)).toStrictEqual([]);
    });

    it('Return array empty when targetSum is less than 1', () => {
      expect(findSumPair([1, 2, 3], -4)).toStrictEqual([]);
      expect(findSumPair([1, 2, 3], 0)).toStrictEqual([]);
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
      'Return array empty when no 2 number have a sum equal to targetSum',
      ({ numberList, targetSum, expected }) => {
        expect(findSumPair(numberList, targetSum)).toStrictEqual(expected);
      }
    );

    it.each([
      {
        numberList: [1, 2, 3],
        targetSum: 3,
        expected: [1, 2],
      },
      {
        numberList: [2, 1, 3],
        targetSum: 3,
        expected: [1, 2],
      },
    ])(
      'Return find array with 2 number as requested and sorted in ascending',
      ({ numberList, targetSum, expected }) => {
        expect(findSumPair(numberList, targetSum)).toStrictEqual(expected);
      }
    );
  });
});

// Find the first number duplicate
describe('findFirstNumberDuplicate(numberList)', () => {
  describe('Return -1', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return -1 when numberList is not a array', (input) => {
      expect(findFirstNumberDuplicate(input)).toBe(-1);
    });

    it('Return undefined when numberList is array empty', () => {
      expect(findFirstNumberDuplicate([])).toBe(-1);
    });
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 2, 3],
        expected: -1,
      },
    ])('Return -1 when numberList no element are repeated', ({ numberList, expected }) => {
      expect(findFirstNumberDuplicate(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [1, 1, 3],
        expected: 1,
      },
      {
        numberList: [1, 2, 2, 1],
        expected: 2,
      },
    ])(
      'Return element first when numberList has the first repeated element',
      ({ numberList, expected }) => {
        expect(findFirstNumberDuplicate(numberList)).toEqual(expected);
      }
    );
  });
});

// Check array is "mountain" from ?
describe('validMountainArrayV1(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return undefined when numberList is not a array', (input) => {
      expect(validMountainArrayV1(input)).toBeUndefined();
    });

    it('Return undefined when numberList is array empty', () => {
      expect(validMountainArrayV1([])).toBeUndefined();
    });
  });

  describe('Return false', () => {
    it.each([
      {
        numberList: [1],
        expected: false,
      },
    ])('Return false when numberList length less than 3', ({ numberList, expected }) => {
      expect(validMountainArrayV1(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [3, 5, 5],
        expected: false,
      },
      {
        numberList: [3, 5, 5, 4],
        expected: false,
      },
      {
        numberList: [0, 1, 2],
        expected: false,
      },
      {
        numberList: [2, 1, 0],
        expected: false,
      },
    ])(
      'Return false when numberList has no element above and descends to the beginning and the end',
      ({ numberList, expected }) => {
        expect(validMountainArrayV1(numberList)).toEqual(expected);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      {
        numberList: [0, 3, 2, 1],
        expected: true,
      },
      {
        numberList: [0, 1, 2, 3, 2, 1],
        expected: true,
      },
    ])(
      'Return true when numberList length more than 3 and has element above and descends to the beginning and the end',
      ({ numberList, expected }) => {
        expect(validMountainArrayV1(numberList)).toEqual(expected);
      }
    );
  });
});

describe('validMountainArrayV2(numberList)', () => {
  describe('Return undefined', () => {
    const invalidInput = [NaN, null, undefined, 0, '', {}, () => {}];
    it.each(invalidInput)('Return undefined when numberList is not a array', (input) => {
      expect(validMountainArrayV2(input)).toBeUndefined();
    });

    it('Return undefined when numberList is array empty', () => {
      expect(validMountainArrayV2([])).toBeUndefined();
    });
  });

  describe('Return false', () => {
    it.each([
      {
        numberList: [1],
        expected: false,
      },
    ])('Return false when numberList length less than 3', ({ numberList, expected }) => {
      expect(validMountainArrayV2(numberList)).toEqual(expected);
    });

    it.each([
      {
        numberList: [3, 5, 5],
        expected: false,
      },
      {
        numberList: [3, 5, 5, 4],
        expected: false,
      },
      {
        numberList: [0, 1, 2],
        expected: false,
      },
      {
        numberList: [2, 1, 0],
        expected: false,
      },
    ])(
      'Return false when numberList has no element above and descends to the beginning and the end',
      ({ numberList, expected }) => {
        expect(validMountainArrayV2(numberList)).toEqual(expected);
      }
    );
  });

  describe('Return true', () => {
    it.each([
      {
        numberList: [0, 3, 2, 1],
        expected: true,
      },
      {
        numberList: [0, 1, 2, 3, 2, 1],
        expected: true,
      },
    ])(
      'Return true when numberList length more than 3 and has element above and descends to the beginning and the end',
      ({ numberList, expected }) => {
        expect(validMountainArrayV2(numberList)).toEqual(expected);
      }
    );
  });
});
