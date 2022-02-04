/**
 * In OOP, the iterator pattern is a design pattern in which an iterator
 * is used to traverse a container and access the container's elements.
 * So you just access items in a collection, and define your own rules
 * on how we want to traverse those items
 */

// Create collection
const items = [1, 'string', false, 1.25];

// Iterator (takes collection)
function Iterator(items) {
  this.items = items;
  this.index = 0;
  // this.index = items.length - 1; (backwards)
}

// Methods for iterator
Iterator.prototype = {
  // 2 Critical Methods
  hasNext: function () {
    return this.index < this.items.length;
    // return this.index >= 0; (backwards)
  },
  next: function () {
    // Returns next available element in collection
    return this.items[this.index++];
    // return this.items[this.index--]; (backwards)
  },
};

// Instance
const iter = new Iterator(items);

// Basic iteration
while (iter.hasNext()) {
  console.log(iter.next());
}
