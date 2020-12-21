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

  max() {
    var runner = this.head;
    let max = 0;
    while (runner) {
      if (runner > max) {
        max = runner;
        runner = runner.next;
      }
    }
    return max;
  }

  min() {
    var runner = this.head;
    let min = this.head;
    while (runner) {
      if (runner < min) {
        max = runner;
        runner = runner.next;
      }
    }
    return min;
  }

  average() {
    var runner = this.head;
    let sum = 0;
    let length = 0;
    while (runner) {
      sum = sum + runner;
      length++;
      runner = runner.next;
    }
    let avg = sum / length;
    return avg;
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