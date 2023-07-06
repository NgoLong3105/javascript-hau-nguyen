// 12-05:
// - insertTail(newData)
// - insertBeforePosition(newData, position)

// 12-06: Linked List
// - removeHead()
// - removeTail()
// - removeAtPosition(position)

export const createLinkedList = () => {
  let head = null;

  const getHead = () => {
    return head;
  };

  const getTail = () => {
    if (head == null) return;

    let tail = head;
    while (tail.next != null) {
      tail = tail.next;
    }

    return tail;
  };

  const insertHead = (newData) => {
    const newNode = {
      data: newData,
      next: head,
    };

    if (head == null) {
      head = newNode;
      return;
    } else {
      newNode.next = head;
      head = newNode;
    }

    return head;
  };

  const insertTail = (newData) => {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      const tail = getTail();
      tail.next = newNode;
    }

    return head;
  };

  const insertBeforePosition = (newData, position) => {
    if (position <= 0 || head == null) {
      insertHead(newData);
      return head;
    }

    let prev = head;
    let curr = head;
    let i = 0;

    while (curr != null && i < position) {
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

  // xóa phần tử đầu tiên
  const removeHead = () => {
    // nếu phần tử tiếp theo có thì gắn head ban đầu sang head tiếp theo
    if (head != null) head = head.next;

    // trả về head tiếp theo và head ban đầu đã bị xóa
    return head;
  };

  // xóa phần tử cuối
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

  // xóa theo số chọn
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

  return {
    getHead,
    getTail,
    insertHead,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
  };
};
