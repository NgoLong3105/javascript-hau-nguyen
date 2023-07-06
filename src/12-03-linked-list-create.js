// Set up linked list
// - createLinkedList()
// + insertHead
// + printList
function createLinkedList() {
  let head = null; // tạo 1 cái đầu

  // chèn vào đầu linked list
  // ex: newDate là number
  function insertHead(newDate) {
    // biến để thay đổi
    const newNode = {
      data: newDate, // dữ liệu muốn truyền vào
      next: null, // chưa bt là gì đặt là null
    };

    // tạo ra mà head rỗng thì
    if (head == null) {
      // head = newNode vì newNode rỗng
      head = newNode;
      return;
    }

    // otherwise linked list has some items
    // là object --> tham chiếu
    // tham chiếu hiện tại của head
    // gắn giá trị tham chiếu mới cho head nhưng ko làm thay đổi tham chiếu head đang giữ
    newNode.next = head; // newNode --> tham chiếu 1
    head = newNode; // head --> tham chiếu 2
  }

  // duyệt hết linked list và in ra
  function printList() {
    // check if head empty then return empty
    // user == but include null, undefined
    if (head == null) return;

    // if data current start from head
    let current = head;
    // when current còn thì chạy tiếp
    // current == null then stop
    while (current != null) {
      // print
      console.log(current.data);

      // updata di chuyên lên thằng tiếp theo
      current = current.next;
    }
  }

  // cho bên ngoài sử dụng
  return {
    insertHead,
    printList,
  };
}

// const numberLinkedList = createLinkedList();

// numberLinkedList.insertHead(5);
// numberLinkedList.insertHead(4);
// numberLinkedList.insertHead(3);
// numberLinkedList.insertHead(2);
// numberLinkedList.insertHead(1);
// numberLinkedList.insertHead({
//   name: 'long',
//   age: 18,
// });
// numberLinkedList.printList();

// ==================================================================================================================== //

// // Set up linked list
// // - createLinkedList()
// // + insertHead()
// // + printList()

// // + getHead()
// // + getTail()
// // + getSize()
// // + findIndexByData()
// // + findWithCallBack()
function createLinkedList() {
  let head = null;

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
      return;
    }

    newNode.next = head;
    head = newNode;
  }

  function printHead() {
    if (head == null) return;

    let current = head;
    while (current != null) {
      console.log(current.data);

      current = current.next;
    }
  }

  function getHead() {
    return head;
  }

  function getSize() {
    if (head == null) return 0;

    let current = head;
    let count = 0;
    while (current != null) {
      count++;
      current = current.next;
    }

    return count;
  }

  function getTail() {
    if (head == null) return;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    return tail;
  }

  function findIndexByData(data) {
    if (head == null) return -1;

    let current = head;
    let i = 0;
    while (current != null) {
      if (current.data === data) return i;

      i++;
      current = current.next;
    }

    return -1;
  }

  function findWithCallback(callback) {
    if (head == null) return undefined;

    let current = head;
    let index = 0;

    while (current != null) {
      if (callback(current.data, index)) return current.data;

      index++;
      current = current.next;
    }

    return undefined;
  }

  return {
    getHead,
    getTail,
    getSize,
    findIndexByData,
    findWithCallback,
    insertHead,
    printHead,
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(3);
numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);

numberLinkedList.printHead();

console.log('Head: ', numberLinkedList.getHead());
console.log('Tail: ', numberLinkedList.getTail());
console.log('Size: ', numberLinkedList.getSize());

console.log('Index: ', numberLinkedList.findIndexByData(3)); // --> 2
console.log('Index: ', numberLinkedList.findIndexByData(4)); // --> -1

console.log(numberLinkedList.findWithCallback((x) => x % 2)); // --> 2
console.log(numberLinkedList.findWithCallback((x) => x > 3)); // --> undefined
