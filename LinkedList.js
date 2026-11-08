class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  printList() {
    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  prepend(value) {
    const endNode = new Node(value);

    endNode.next = this.head;
    this.head = endNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  getHead() {
    if (this.head === null) {
      return undefined;
    }

    return this.head.value;
  }

  getLast() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    return current.value;
  }
}
const list = new LinkedList();
// console.log(list.getHead());
list.append("John");
list.append("Mary");
list.append("Alex");
// list.prepend("Mike");
// console.log(list.getHead());

console.log(`the last value: ${list.getLast()}`);

list.printList();
