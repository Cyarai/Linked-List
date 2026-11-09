import LinkedList from "./LinkedList.js";

const list = new LinkedList();
// console.log(list.getHead());
list.append("John");
list.append("Mary");
list.append("Alex");
list.prepend("Mike");
console.log(list.getHead());

console.log(`the last value: ${list.getLast()}`);

console.log(`the value at index 1: ${list.at(2)}`);

console.log(`the value that was been remove ${list.pop()}`);

console.log(`Does the values contain ${list.contains("John")}`);

console.log(list.findIndex("Mike"));

console.log(list.toString());

list.insertAt(0, "Tom");

console.log(`the value that was going to remove is ${list.removeAt(2)}`);
list.printList();
