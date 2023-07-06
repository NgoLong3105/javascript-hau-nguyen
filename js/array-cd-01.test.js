import {
  insertV1,
  insertV2,
  remove,
  removeStudentById,
  insertIncreasing,
  removeDuplicatedNumbers,
  uniqueArray,
} from './array-cd-01';

// ARRAY-CD-01:
describe('insertV1(arr, newItem, k)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)("Throw new Error 'Invalid input' when arr not an array", (input) => {
      expect(() => insertV1(input, 1, 0)).toThrowError('Invalid input');
    });

    it("Throw new Error 'Invalid input' when arr empty", () => {
      expect(() => insertV1([], 1, 0)).toThrowError('Invalid input');
    });

    it.each(invalidInput)("Throw new Error 'Invalid input' when newItem not a number", () => {
      expect(() => insertV1([1, 2, 3], invalidInput, 0)).toThrowError('Invalid input');
    });

    it.each(invalidInput)("Throw new Error 'Invalid input' when k not a number", () => {
      expect(() => insertV1([1, 2, 3], 1, invalidInput)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        arr: [1, 2, 3],
        newItem: 0,
        k: -1,
        expected: [0, 1, 2, 3],
      },
      {
        arr: [1, 2, 3],
        newItem: 4,
        k: 10,
        expected: [1, 2, 3, 4],
      },
      {
        arr: [1, 2, 3],
        newItem: 10,
        k: 2,
        expected: [1, 2, 10, 3],
      },
    ])(
      'Should return add an newItem section in the position k of array when valid condition',
      ({ arr, newItem, k, expected }) => {
        expect(insertV1(arr, newItem, k)).toStrictEqual(expected);
      }
    );
  });
});

describe('insertV2(arr, newItem, k)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)("Throw new Error 'Invalid input' when arr not an array", (input) => {
      expect(() => insertV2(input, 1, 0)).toThrowError('Invalid input');
    });

    it("Throw new Error 'Invalid input' when arr empty", () => {
      expect(() => insertV2([], 1, 0)).toThrowError('Invalid input');
    });

    it.each(invalidInput)("Throw new Error 'Invalid input' when newItem not a number", () => {
      expect(() => insertV2([1, 2, 3], invalidInput, 0)).toThrowError('Invalid input');
    });

    it.each(invalidInput)("Throw new Error 'Invalid input' when k not a number", () => {
      expect(() => insertV2([1, 2, 3], 1, invalidInput)).toThrowError('Invalid input');
    });
  });

  describe('Return result', () => {
    it.each([
      {
        arr: [1, 2, 3],
        newItem: 0,
        k: -1,
        expected: [0, 1, 2, 3],
      },
      {
        arr: [1, 2, 3],
        newItem: 4,
        k: 10,
        expected: [1, 2, 3, 4],
      },
      {
        arr: [1, 2, 3],
        newItem: 10,
        k: 2,
        expected: [1, 2, 10, 3],
      },
    ])(
      'Should return add an newItem section in the position k of array when valid condition',
      ({ arr, newItem, k, expected }) => {
        expect(insertV2(arr, newItem, k)).toStrictEqual(expected);
      }
    );
  });
});

// ARRAY-CD-02:
describe('remove(arr, k, n)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when arr is not an array (%p)",
      (input) => {
        expect(() => remove(input, 0, 1)).toThrowError('Invalid input');
      }
    );

    it("Throw new Error 'Invalid input' when arr is empty", () => {
      expect(() => remove([], 0, 1)).toThrowError('Invalid input');
    });

    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when k is not a number (%p)",
      (input) => {
        expect(() => remove([1, 2, 3], input, 0)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        arr: [1, 2, 3],
        k: -1,
        n: 10,
        expected: [1, 2, 3],
      },
      {
        arr: [1, 2, 3],
        k: 3,
        n: 10,
        expected: [1, 2, 3],
      },
      {
        arr: [1, 2, 3],
        k: 1,
        n: 2,
        expected: [1],
      },
      {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        k: 4,
        n: 11,
        expected: [1, 2, 3, 4],
      },
      {
        arr: [1, 2, 3],
        k: 1,
        n: undefined,
        expected: [],
      },
    ])(
      'Should return the array after removing n elements from position k (optional n)',
      ({ arr, n, k, expected }) => {
        expect(remove(arr, k, n)).toEqual(expected);
      }
    );
  });
});

// ARRAY-CD-03:
describe('removeStudentById(studentList, studentId)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when studentList is not an array (%p)",
      (input) => {
        expect(() => removeStudentById(input, 1)).toThrowError('Invalid input');
      }
    );

    it("Throw new Error 'Invalid input' when studentList is empty", () => {
      expect(() => removeStudentById([], 1)).toThrowError('Invalid input');
    });

    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when studentId is not a number (%p)",
      (input) => {
        expect(() => removeStudentById([{ id: 1 }, { id: 2 }], input)).toThrowError(
          'Invalid input'
        );
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        studentList: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        studentId: 1,
        expected: [{ id: 2, name: 'Bob' }],
      },
      {
        studentList: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
        studentId: 3,
        expected: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ],
      },
    ])(
      'Should return remove student has id is studentId from StudentList array and return a new array',
      ({ studentList, studentId, expected }) => {
        expect(removeStudentById(studentList, studentId)).toEqual(expected);
      }
    );
  });
});

// ARRAY-CD-04:
describe('insertIncreasing(numberList, newNumber)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when numberList is not an array (%p)",
      (input) => {
        expect(() => insertIncreasing(input, 1)).toThrowError('Invalid input');
      }
    );

    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when newNumber is not a number (%p)",
      (input) => {
        expect(() => insertIncreasing([{ id: 1 }, { id: 2 }], input)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [],
        newNumber: 3,
        expected: [3],
      },
      {
        numberList: [1, 2, 4],
        newNumber: 3,
        expected: [1, 2, 3, 4],
      },
      {
        numberList: [1, 2, 3],
        newNumber: 3,
        expected: [1, 2, 3, 3],
      },
    ])(
      'Should return insert newNumber in array numberList such that number incresing',
      ({ numberList, newNumber, expected }) => {
        expect(insertIncreasing(numberList, newNumber)).toEqual(expected);
      }
    );
  });
});

// ARRAY-CD-05:
describe('removeDuplicatedNumbers(numberList)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when numberList is not an array (%p)",
      (input) => {
        expect(() => removeDuplicatedNumbers(input)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 1, 2, 2, 3],
        expected: [3],
      },
      {
        numberList: [1, 2, 3],
        expected: [1, 2, 3],
      },
      {
        numberList: [],
        expected: [],
      },
    ])('Should return remove all numbers that appear more than 1', ({ numberList, expected }) => {
      expect(removeDuplicatedNumbers(numberList)).toEqual(expected);
    });
  });
});

// ARRAY-CD-06:
describe('uniqueArray(numberList)', () => {
  describe("Throw new Error 'Invalid input'", () => {
    const invalidInput = [NaN, null, undefined, '', {}, () => {}];
    it.each(invalidInput)(
      "Throw new Error 'Invalid input' when numberList is not an array (%p)",
      (input) => {
        expect(() => uniqueArray(input)).toThrowError('Invalid input');
      }
    );
  });

  describe('Return result', () => {
    it.each([
      {
        numberList: [1, 1, 2, 2, 3],
        expected: [1, 2, 3],
      },
      {
        numberList: [1, 1, 1, 1],
        expected: [1],
      },
      {
        numberList: [],
        expected: [],
      },
    ])(
      'Should return remove numbers that appear more than 1, but keep 1 number',
      ({ numberList, expected }) => {
        expect(uniqueArray(numberList)).toEqual(expected);
      }
    );
  });
});
