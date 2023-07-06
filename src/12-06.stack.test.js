// tạo stack bằng mảng
const createStackV1 = () => {
  const stack = [];
  const getTop = () => (stack.length > 0 ? stack[stack.length - 1] : undefined);
  const isEmpty = () => stack.length === 0;
  const getSize = () => stack.length;
  const getPush = (data) => stack.push(data);
  const getPop = () => stack.pop();

  return { getTop, isEmpty, getSize, getPush, getPop };
};

// cách 2 gọn hơn
const createStack = () => {
  const stack = [];

  return {
    getTop: () => stack[stack.length - 1],
    isEmpty: () => stack.length === 0,
    getSize: () => stack.length,
    getPush: (data) => stack.push(data),
    getPop: () => stack.pop(),
  };
};

// tạo stack bằng linkedList
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null; // Tham chiếu đến đỉnh của stack
    this.length = 0;
  }

  getTop() {
    return this.head ? this.head.data : undefined;
  }

  getSize() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(data) {
    const newNode = new Node(data);

    // nếu stack rỗng
    if (!this.head) {
      this.head = newNode; // gán newNode làm đỉnh stack
    } else {
      newNode.next = this.head; // liên kết newNode với đỉnh hiện tại
      this.head = newNode; // cập nhật đỉnh mới
    }

    this.length++; //	tăng độ dài của stack
  }

  pop() {
    // nếu stack rỗng trả về undefined
    if (!this.head) return undefined;

    const data = this.head.data; // lất giá trị của phần tử đầu stack
    this.head = this.head.next; // cập nhật đỉnh mới
    this.length--; // giảm độ dài của length

    return data; // trả về item đã xóa
  }
}

describe('create stack using array', () => {
  it('all in one', () => {
    const stack = createStack();

    // empty stack
    expect(stack.getTop()).toBeUndefined();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);

    // push: 5
    stack.getPush(5);
    expect(stack.getTop()).toBe(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    // push: 10
    stack.getPush(10);
    expect(stack.getTop()).toBe(10);
    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);

    // pop() --> 10
    stack.getPop();
    expect(stack.getTop()).toBe(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    // pop() --> 5
    stack.getPop();
    expect(stack.getTop()).toBeUndefined();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});

describe('create stack using linked list', () => {
  it('all in one', () => {
    const stack = new Stack();

    // empty stack
    expect(stack.getTop()).toBeUndefined();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);

    // push: 5
    stack.push(5);
    expect(stack.getTop()).toBe(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    // push: 10
    stack.push(10);
    expect(stack.getTop()).toBe(10);
    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);

    // pop() --> 10
    stack.pop();
    expect(stack.getTop()).toBe(5);
    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);

    // pop() --> 5
    stack.pop();
    expect(stack.getTop()).toBeUndefined();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });
});
