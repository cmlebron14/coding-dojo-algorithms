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

  display() {
    var runner = this.head;
    let list = "";
    while (runner) {
      list = `${list}, ${runner.value}`;
      runner = runner.next;
    }
    return list;
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