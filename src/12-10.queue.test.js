// create queue using array (FIFO)
const Queue = () => {
  const queue = [];

  return {
    getFront: () => (queue.length > 0 ? queue[0] : undefined),
    getBack: () => (queue.length > 0 ? queue[queue.length - 1] : undefined),
    getSize: () => queue.length,
    enqueue: (data) => queue.push(data), // cuối vào
    dequeue: () => queue.shift(), // đầu ra
  };
};

describe('createQueue()', () => {
  it('all in one', () => {
    // empty queue
    const queue = Queue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);

    // queue: 1
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(1);

    // queue: 2
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const one = queue.dequeue();
    expect(one).toBe(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(2);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const two = queue.dequeue();
    expect(two).toBe(2);
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);
  });
});

//========================================================================================//

// create queue using linkedList
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class createQueue {
  constructor() {
    this.front = null; // Tham chiếu đến phần tử đầu hàng đợi
    this.back = null; // Tham chiếu đến phần tử cuối hàng đợi
    this.length = 0; // Độ dài của hàng đợi
  }

  getFront() {
    return this.front ? this.front.data : undefined;
  }

  getBack() {
    return this.back ? this.back.data : undefined;
  }

  getSize() {
    return this.length;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (!this.front) {
      // Nếu hàng đợi rỗng, newNode là phần tử đầu và cuối hàng đợi
      this.front = newNode;
      this.back = newNode;
    } else {
      // Ngược lại, thêm newNode vào cuối hàng đợi và cập nhật back
      this.back.next = newNode;
      this.back = newNode;
    }

    this.length++; // Tăng độ dài của hàng đợi
  }

  dequeue() {
    // Nếu hàng đợi rỗng, trả về undefined
    if (!this.front) return undefined;

    const data = this.front.data; // Lấy giá trị của phần tử đầu hàng đợi

    // Cập nhật front và kiểm tra xem hàng đợi còn phần tử hay không
    if (this.front === this.back) {
      // Nếu chỉ còn một phần tử, cập nhật front và back về null
      this.front = null;
      this.back = null;
    } else {
      // Ngược lại, cập nhật front thành phần tử tiếp theo
      this.front = this.front.next;
    }

    this.length--; // Giảm độ dài của hàng đợi

    return data; // Trả về phần tử đã loại bỏ
  }
}

describe('createQueue()', () => {
  it('all in one', () => {
    // empty queue
    const queue = new createQueue();
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);

    // queue: 1
    queue.enqueue(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(1);

    // queue: 2
    queue.enqueue(2);
    expect(queue.getSize()).toBe(2);
    expect(queue.getFront()).toBe(1);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const one = queue.dequeue();
    expect(one).toBe(1);
    expect(queue.getSize()).toBe(1);
    expect(queue.getFront()).toBe(2);
    expect(queue.getBack()).toBe(2);

    // dequeue
    const two = queue.dequeue();
    expect(two).toBe(2);
    expect(queue.getSize()).toBe(0);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getBack()).toBe(undefined);
  });
});

const cityList = [
  { id: 1, name: 'TP. Hồ Chí Minh' },
  { id: 2, name: 'TP. Phan Thiết' },
];

// const cityMap = new Map();

// cityList.forEach((city) => {
//   cityMap.set(city.id, city);
// });
const cityMap = cityList.reduce((map, city) => {
  map.set(city.id, city);
  return map;
}, new Map());

console.log(cityMap.get(1).name);

let a = [1, 2, 3];
let b = [2, 3, 4, 5];

let setA = new Set(a);
let setB = new Set(b);

let result = new Set();

for (const item of setA) {
  if (setB.has(item)) result.add(item);
}

console.log(result);
