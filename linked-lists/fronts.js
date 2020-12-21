class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class SLL {
  constructor() {
    this.head = null;
  }

  addFront(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  removeFront() {
    if (this.head) {
      this.head = this.head.next;
      return this.head;
    }
    return null;
  }

  front() {
    if (this.head) {
      return this.head.value;
    }
    return null;
  }
}