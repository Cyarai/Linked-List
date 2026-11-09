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

  at(index) {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.value;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }

    const removeValue = this.head.value;
    this.head = this.head.next;

    return removeValue;
  }

  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.value;
    }
    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }
    return -1;
  }

  toString() {
    if (this.head === null) {
      return "";
    }

    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }

    return result + "null";
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      return;
    }

    let previous = null;
    let current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    for (const value of values) {
      const newNode = new Node(value);

      newNode.next = current;

      if (previous === null) {
        this.head = newNode;
      } else {
        previous.next = newNode;
      }

      previous = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    if (previous === null) {
      this.head = current.next;
    } else {
      previous.next = current.next;
    }

    return current.value;
  }
}
export default LinkedList;
