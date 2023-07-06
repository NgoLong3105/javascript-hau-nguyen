import { createLinkedList } from './12-04-linked-list-create';

// describe('LinkedList', () => {
//   let linkedList;

//   beforeEach(() => {
//     linkedList = new LinkedList();
//   });

//   it('should create an empty linked list', () => {
//     expect(linkedList.getLength()).toBe(0);
//     expect(linkedList.toArray()).toEqual([]);
//   });

//   it('should insert data at the head of the linked list', () => {
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);

//     expect(linkedList.getLength()).toBe(2);
//     expect(linkedList.toArray()).toEqual([20, 10]);
//   });

//   it('should insert data at the tail of the linked list', () => {
//     linkedList.insertTail(10);
//     linkedList.insertTail(20);

//     expect(linkedList.getLength()).toBe(2);
//     expect(linkedList.toArray()).toEqual([10, 20]);
//   });

//   it('should insert data before a specific position', () => {
//     const linkedList = new createLinkedList();
//     linkedList.insertTail(10);
//     linkedList.insertTail(30);
//     linkedList.insertBeforePosition(20, 1);

//     expect(linkedList.getLength()).toBe(3);
//     expect(linkedList.toArray()).toEqual([10, 20, 30]);
//   });

//   it('should get the length of the linked list', () => {
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);
//     linkedList.insertHead(30);

//     expect(linkedList.getLength()).toBe(3);
//   });

//   it('should print the elements of the linked list', () => {
//     const consoleSpy = jest.spyOn(console, 'log');
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);
//     linkedList.insertHead(30);

//     linkedList.printList();

//     expect(consoleSpy).toHaveBeenCalledWith(30);
//     expect(consoleSpy).toHaveBeenCalledWith(20);
//     expect(consoleSpy).toHaveBeenCalledWith(10);

//     consoleSpy.mockRestore();
//   });

//   it('should find the index of an element in the linked list', () => {
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);
//     linkedList.insertHead(30);

//     expect(linkedList.findIndexByData(20)).toBe(1);
//     expect(linkedList.findIndexByData(40)).toBe(-1);
//   });

//   it('should find the data at a specific index in the linked list', () => {
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);
//     linkedList.insertHead(30);

//     expect(linkedList.findDataByIndex(0)).toBe(30);
//     expect(linkedList.findDataByIndex(2)).toBe(10);
//     expect(linkedList.findDataByIndex(3)).toBeUndefined();
//   });

//   it('should reverse the linked list', () => {
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);
//     linkedList.insertHead(30);

//     linkedList.reverse();

//     expect(linkedList.toArray()).toEqual([10, 20, 30]);
//   });

//   it('should convert the linked list to an array', () => {
//     linkedList.insertHead(10);
//     linkedList.insertHead(20);
//     linkedList.insertHead(30);

//     expect(linkedList.toArray()).toEqual([30, 20, 10]);
//   });

//   it('should sort the linked list in ascending order', () => {
//     linkedList.insertHead(30);
//     linkedList.insertHead(10);
//     linkedList.insertHead(50);
//     linkedList.insertHead(20);

//     linkedList.sort();

//     expect(linkedList.toArray()).toEqual([10, 20, 30, 50]);
//   });
// });

describe('Create linked list', () => {
  describe('insertHead(newData)', () => {
    it('should insert node at the head of an empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);

      expect(numberLinkedList.getHead()).toEqual({ data: 5, next: null });
    });

    it('should insert node at the head of a non-empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);

      expect(numberLinkedList.getHead()).toEqual({ data: 5, next: { data: 10, next: null } });
    });
  });

  describe('insertTail(data)', () => {
    it('should return head with one node if list is empty', () => {
      const numberLinkedList = createLinkedList();
      const head = numberLinkedList.insertTail(5);

      expect(head).toEqual({ data: 5, next: null });
    });

    it('should return head with two nodes if list has one node', () => {
      const numberLinkedList = createLinkedList();
      const head = numberLinkedList.insertTail(5);
      numberLinkedList.insertTail(10);

      expect(head).toEqual({ data: 5, next: { data: 10, next: null } });
    });
  });

  describe('insertBeforePosition(data, position)', () => {
    it('should insert head if position <= 0', () => {
      expect(createLinkedList().insertBeforePosition(5, -1)).toEqual({ data: 5, next: null });
      expect(createLinkedList().insertBeforePosition(5, 0)).toEqual({ data: 5, next: null });
    });

    it('should insert tail if position >= size', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertBeforePosition(5, -1);
      const head = numberLinkedList.insertBeforePosition(10, 5);

      expect(head).toEqual({ data: 5, next: { data: 10, next: null } });
    });

    it('should insert before position if 0 <= position < size', () => {
      const numberLinkedList = createLinkedList();

      numberLinkedList.insertBeforePosition(5, 1);
      numberLinkedList.insertBeforePosition(10, 2);
      numberLinkedList.insertBeforePosition(15, 3);

      const head = numberLinkedList.insertBeforePosition(0, 1);
      expect(head).toEqual({
        data: 5,
        next: { data: 0, next: { data: 10, next: { data: 15, next: null } } },
      });
    });
  });

  describe('getTail()', () => {
    it('should return null for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const tail = numberLinkedList.getTail();

      expect(tail).toBeNull();
    });

    it('should return the tail node of a non-empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const tail = numberLinkedList.getTail();

      expect(tail).toEqual({ data: 10, next: null });
    });
  });

  describe('getLength()', () => {
    it('should return 0 for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const length = numberLinkedList.getLength();

      expect(length).toBe(0);
    });

    it('should return the correct length for a non-empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const length = numberLinkedList.getLength();

      expect(length).toBe(2);
    });
  });

  describe('findIndexByData(data)', () => {
    it('should return -1 for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const index = numberLinkedList.findIndexByData(10);

      expect(index).toBe(-1);
    });

    it('should return the correct index for an existing data in the list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const index = numberLinkedList.findIndexByData(10);

      expect(index).toBe(1);
    });

    it('should return -1 for a non-existing data in the list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const index = numberLinkedList.findIndexByData(15);

      expect(index).toBe(-1);
    });
  });

  describe('findDataByIndex(index)', () => {
    it('should return null for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const data = numberLinkedList.findDataByIndex(0);

      expect(data).toBeUndefined();
    });

    it('should return the correct data for an existing index in the list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const data = numberLinkedList.findDataByIndex(1);

      expect(data).toBe(10);
    });

    it('should return null for a non-existing index in the list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const data = numberLinkedList.findDataByIndex(2);

      expect(data).toBeUndefined();
    });
  });

  describe('findWithCallback(callback)', () => {
    it('should return null for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const result = numberLinkedList.findWithCallback((data) => data === 10);

      expect(result).toBeUndefined();
    });

    it('should return the first node that satisfies the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.findWithCallback((data) => data === 10);

      expect(result).toEqual({ data: 10, next: null });
    });

    it('should return null if no node satisfies the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.findWithCallback((data) => data === 15);

      expect(result).toBeUndefined();
    });
  });

  describe('some(callback)', () => {
    it('should return false for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const result = numberLinkedList.some((data) => data === 10);

      expect(result).toBe(false);
    });

    it('should return true if at least one node satisfies the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.some((data) => data === 10);

      expect(result).toBe(true);
    });

    it('should return false if no node satisfies the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.some((data) => data === 15);

      expect(result).toBe(false);
    });
  });

  describe('every(callback)', () => {
    it('should return true for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const result = numberLinkedList.every((data) => data === 10);

      expect(result).toBe(false);
    });

    it('should return true if all nodes satisfy the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.every((data) => data > 0);

      expect(result).toBe(true);
    });

    it('should return false if at least one node does not satisfy the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.every((data) => data === 5);

      expect(result).toBe(false);
    });
  });

  describe('includeWithCallback(callback)', () => {
    it('should return false for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const result = numberLinkedList.includeWithCallback((data) => data === 10);

      expect(result).toBe(false);
    });

    it('should return true if at least one node satisfies the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.includeWithCallback((data) => data === 10);

      expect(result).toBe(true);
    });

    it('should return false if no node satisfies the callback condition', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const result = numberLinkedList.includeWithCallback((data) => data === 15);

      expect(result).toBe(false);
    });
  });

  describe('printList()', () => {
    it('should print an empty list', () => {
      const numberLinkedList = createLinkedList();
      const spy = jest.spyOn(console, 'log');
      numberLinkedList.printList();

      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore();
    });

    it('should print a non-empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const spy = jest.spyOn(console, 'log');
      numberLinkedList.printList();

      expect(spy).toHaveBeenNthCalledWith(1, 5);
      expect(spy).toHaveBeenNthCalledWith(2, 10);
      expect(spy).toHaveBeenCalledTimes(2);
      spy.mockRestore();
    });
  });

  describe('removeHead()', () => {
    it('should return null if list is empty', () => {
      const numberLinkedList = createLinkedList();
      const head = numberLinkedList.removeHead();
      expect(head).toBeNull();
    });
    it('should return null if list has one item', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);
      const head = numberLinkedList.removeHead();
      expect(head).toBeNull();
    });
    it('should return one item if list has two items', () => {
      // 5 -> 10
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const head = numberLinkedList.removeHead();
      expect(head).toEqual({ data: 10, next: null });
    });
  });

  describe('removeTail()', () => {
    it('should return null if list is empty', () => {
      const numberLinkedList = createLinkedList();
      const head = numberLinkedList.removeTail();
      expect(head).toBeNull();
    });
    it('should return null if list has one item', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);
      const head = numberLinkedList.removeTail();
      expect(head).toBeNull();
    });
    it('should return one item if list has two items', () => {
      // 5 -> 10
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      const head = numberLinkedList.removeTail();
      expect(head).toEqual({ data: 5, next: null });
    });
  });

  describe('removeAtPosition(position)', () => {
    it('should return null if list is empty', () => {
      const numberLinkedList = createLinkedList();
      const head = numberLinkedList.removeAtPosition(0);
      expect(head).toBeNull();
    });
    it('should return null if list has one item', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);
      const head = numberLinkedList.removeAtPosition(1);
      expect(head).toBeNull();
    });
    it('should remove correctly item at 0 <= position < n - 1', () => {
      // 0 -> 5 -> 10
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      numberLinkedList.insertHead(0);
      const head = numberLinkedList.removeAtPosition(1);
      expect(head).toEqual({ data: 0, next: { data: 10, next: null } });
    });
  });

  describe('toArray()', () => {
    it('should return an empty array for an empty list', () => {
      const numberLinkedList = createLinkedList();
      const result = numberLinkedList.toArray();
      expect(result).toEqual([]);
    });

    it('should return an array with the elements of the list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(15);
      const result = numberLinkedList.toArray();
      expect(result).toEqual([15, 10, 5]);
    });
  });

  describe('reverse()', () => {
    it('should reverse an empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.reverse();

      expect(numberLinkedList.getHead()).toBeNull();
      expect(numberLinkedList.getTail()).toBeNull();
    });

    it('should reverse a list with one node', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);
      numberLinkedList.reverse();

      expect(numberLinkedList.getHead()).toEqual({ data: 5, next: null });
      expect(numberLinkedList.getTail()).toEqual({ data: 5, next: null });
    });

    it('should reverse a list with multiple nodes', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      numberLinkedList.insertHead(1);
      numberLinkedList.reverse();

      expect(numberLinkedList.getHead()).toEqual({
        data: 10,
        next: { data: 5, next: { data: 1, next: null } },
      });
      expect(numberLinkedList.getTail()).toEqual({ data: 1, next: null });
    });
  });

  describe('sort()', () => {
    it('should sort an empty list', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.sort();
      expect(numberLinkedList.toArray()).toEqual([]);
    });

    it('should sort a list with one element', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(5);
      numberLinkedList.sort();
      expect(numberLinkedList.toArray()).toEqual([5]);
    });

    it('should sort a list with multiple elements', () => {
      const numberLinkedList = createLinkedList();
      numberLinkedList.insertHead(10);
      numberLinkedList.insertHead(5);
      numberLinkedList.insertHead(8);
      numberLinkedList.insertHead(3);
      numberLinkedList.insertHead(1);
      numberLinkedList.sort();
      expect(numberLinkedList.toArray()).toEqual([1, 3, 5, 8, 10]);
    });
  });
});
