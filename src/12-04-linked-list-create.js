// Set up linked list
// - createLinkedList()
// + insertHead()+
// + insertTail()+

// + printList()+

// + getHead()+
// + getTail()+

// + getLength()+

// + findIndexByData()+
// + findByDataByIndex()+
// + findWithCallBack()+
// + some()+
// + everyWithCallBack()+
// + filterWithCallBack()+
// + includeWithCallBack()+

// + removeData()
// + removeHead()+
// + removeTail()+
// + removeAtPosition()+
// + reverse()+

// + sort()+

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getHead() {
    return this.head ? this.head.data : null;
  }

  getTail() {
    return this.tail ? this.tail.data : null;
  }

  insertHead(newData) {
    const newNode = new Node(newData);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insertTail(newData) {
    const newNode = new Node(newData);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  getLength() {
    return this.length;
  }

  findIndexByData(data) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  findDataByIndex(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let count = 0;
    let current = this.head;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  findWithCallback(callback) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (callback(current.data, index)) {
        return current.data;
      }
      index++;
      current = current.next;
    }

    return undefined;
  }

  some(callback) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (callback(current.data, index)) {
        return true;
      }
      index++;
      current = current.next;
    }

    return false;
  }

  everyWithCallback(callback) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (!callback(current.data, index)) {
        return false;
      }
      index++;
      current = current.next;
    }

    return true;
  }

  filterWithCallback(callback) {
    const newList = new LinkedList();
    let current = this.head;
    let index = 0;

    while (current) {
      if (callback(current.data, index)) {
        newList.insertTail(current.data);
      }
      index++;
      current = current.next;
    }

    return newList;
  }

  includesWithCallback(callback) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (callback(current.data, index)) {
        return true;
      }
      index++;
      current = current.next;
    }

    return false;
  }

  removeData(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.removeHead();
      return;
    }

    let prev = null;
    let current = this.head;

    while (current) {
      if (current.data === data) {
        prev.next = current.next;
        if (current === this.tail) {
          this.tail = prev;
        }
        this.length--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  removeHead() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
  }

  removeTail() {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    let prev = null;
    let current = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
  }

  removeAtPosition(position) {
    if (position <= 0 || !this.head) {
      this.removeHead();
      return;
    }

    if (position >= this.length - 1) {
      this.removeTail();
      return;
    }

    let prev = null;
    let current = this.head;
    let count = 0;

    while (count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = current.next;
    this.length--;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }

  sort() {
    if (!this.head || !this.head.next) {
      return;
    }

    let sorted = null;
    let current = this.head;

    while (current) {
      const nextNode = current.next;

      if (!sorted || current.data < sorted.data) {
        current.next = sorted;
        sorted = current;
      } else {
        let searchNode = sorted;
        while (searchNode.next && current.data >= searchNode.next.data) {
          searchNode = searchNode.next;
        }

        current.next = searchNode.next;
        searchNode.next = current;
      }

      current = nextNode;
    }

    this.head = sorted;
  }
}

// ===
export const createLinkedList = () => {
  let head = null;
  let tail = null;
  let length = 0;

  const getHead = () => head;

  const getTail = () => tail;

  const getLength = () => length;

  const insertHead = (newData) => {
    const newNode = {
      data: newData,
      next: head,
    };

    if (head === null) {
      tail = newNode;
    }

    head = newNode;
    length++;
  };

  const insertTail = (newData) => {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    length++;

    return head;
  };

  const insertBeforePosition = (newData, position) => {
    if (position <= 0 || head === null) {
      insertHead(newData);
      return head;
    }

    let prev = head;
    let curr = head;
    let i = 0;

    while (curr !== null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    const newNode = {
      data: newData,
      next: curr,
    };

    prev.next = newNode;
    return head;
  };

  const printList = () => {
    if (head === null) return;

    let current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  };

  const findWithCallback = (callback) => {
    if (head == null) return undefined;

    let current = head;
    let i = 0;
    while (current != null) {
      if (callback(current.data, i)) return current;

      i++;
      current = current.next;
    }

    return undefined;
  };

  const some = (callback) => {
    if (head == null) return false;

    let i = 0;
    let current = head;
    while (current != null) {
      if (callback(current.data, i)) return true;

      i++;
      current = current.next;
    }

    return false;
  };

  const every = (callback) => {
    if (head == null) return false;

    let i = 0;
    let current = head;
    while (current != null) {
      if (!callback(current.data, i)) return false;

      i++;
      current = current.next;
    }
    return true;
  };

  const includeWithCallback = (callback) => {
    if (head == null) return false;

    let i = 0;
    let current = head;
    while (current != null) {
      if (callback(current.data, i)) return true;

      i++;
      current = current.next;
    }

    return false;
  };

  const removeHead = () => {
    // nếu phần tử tiếp theo có thì gắn head ban đầu sang head tiếp theo
    if (head != null) head = head.next;

    // trả về head tiếp theo và head ban đầu đã bị xóa
    return head;
  };

  const removeTail = () => {
    // nếu ko có phần tử nào thì trả về null (ko gì cả)
    if (head == null) return null;

    // nếu chỉ có 1 phần tử
    if (head.next == null) {
      // gắn head ko có gì cả
      head = null;
      // trả về head ko có gì cả
      return head;
    }

    // if many element
    // create secondLast find element kế cuối
    let secondLast = head;
    while (secondLast.next.next != null) {
      // đã tìm đc secondLast là kế cuối
      secondLast = secondLast.next;
    }

    // gắn phần tử cuối = null (delete end element)
    secondLast.next = null;

    // return lại head
    return head;
  };

  const removeAtPosition = (position) => {
    // nếu chọn số <= 0 hoặc head rỗng thì trả về ko gì cả
    if (position <= 0 || head == null) return removeHead();

    // has only 1 item
    // phẩn tử tiếp theo là null thì chỉ có 1 item
    if (head.next == null) {
      head = null; // biến head = null (ko có gì cả)
      return head; // return head (ko gì cả)
    }

    // if many item chọn phần tử bị xóa bằng số
    let prev = head; // trước
    let curr = head; // hiện tại
    let i = 0;
    // nếu phần tử tiếp theo của curr là rỗng thì xóa item cuối
    // hoặc số chọn lớn hơn số phần tử đang có thì xóa item cuối
    while (curr.next != null && position > i) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    // nối item prev tới bên cạnh curr và curr bị bỏ qua
    prev.next = curr.next;

    // return lại head
    return head;
  };

  const findIndexByData = (data) => {
    if (head === null) return -1;

    let i = 0;
    let current = head;
    while (current !== null) {
      if (current.data === data) return i;

      i++;
      current = current.next;
    }

    return -1;
  };

  const findDataByIndex = (index) => {
    if (index < 0 || index >= length) return undefined;

    let i = 0;
    let current = head;
    while (current !== null) {
      if (i === index) return current.data;

      i++;
      current = current.next;
    }

    return undefined;
  };

  const reverse = () => {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    // Swap head and tail
    const temp = head;
    head = tail;
    tail = temp;
  };

  const toArray = () => {
    const result = [];
    let current = head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  };

  const sort = () => {
    if (head === null || head.next === null) {
      // Danh sách rỗng hoặc chỉ có một phần tử, không cần sắp xếp
      return;
    }

    let sorted = null;
    let current = head;

    while (current !== null) {
      const nextNode = current.next;

      // Chèn current vào danh sách đã sắp xếp
      if (sorted === null || current.data < sorted.data) {
        current.next = sorted;
        sorted = current;
      } else {
        let searchNode = sorted;
        while (searchNode.next !== null && current.data >= searchNode.next.data) {
          searchNode = searchNode.next;
        }

        current.next = searchNode.next;
        searchNode.next = current;
      }

      current = nextNode;
    }

    head = sorted;
  };

  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    getHead,
    getTail,
    getLength,
    findIndexByData,
    findDataByIndex,
    printList,
    reverse,
    toArray,
    sort,
    findWithCallback,
    some,
    every,
    includeWithCallback,
    removeHead,
    removeTail,
    removeAtPosition,
  };
};
