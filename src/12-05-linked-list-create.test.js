import { createLinkedList } from './12-05-linked-list-create';

describe('Create linked list', () => {
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
});
