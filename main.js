import LinkedList from "./LinkedList.js";

const list = new LinkedList();
console.log(list.getHead());
list.append("John");
list.append("Mary");
list.append("Alex");
list.prepend("Mike");
console.log(list.getHead());

list.printList();
