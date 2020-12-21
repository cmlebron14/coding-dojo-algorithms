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

  length() {
    var runner = this.head;
    let length = 0;
    while (runner) {
      length++;
      runner = runner.next;
    }
    return length;
  }
}