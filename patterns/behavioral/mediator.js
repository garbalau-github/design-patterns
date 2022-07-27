/**
 * Mediator pattern defines an object that encapsulates how a set of objects
 * interact between each other. Why is it needed? Programs othen consist
 * of many classes, and business logic and computation are distributed
 * among these classes. However, as more classes are added to a program,
 * especially during maintenance and/or refactoring, the problem of communication
 * between these classes may become more complex. Furthermore, it can become difficult
 * to change the program, since any change may affect code in several other classes.
 *
 * So, with the mediator pattern, communication between objects is encapsulated within a mediator object.
 * Objects no longer communicate directly with each other, but instead communicate through the mediator.
 *
 * Chat Room is a good example. Members of the chat room do not send messages directly to each other,
 * instead they send them to Chat Room Mediator, that then handles all the logic and decides
 * where all of those messages need to go
 */

class Member {
  constructor(name) {
    this.name = name;
    // Current chat room
    this.chatRoom = null;
  }
  send(message, toMember) {
    // Send message
    this.chatRoom.send(message, this, toMember);
  }
  receive(message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    // Keep track of current members that are in this chat
    this.members = {};
  }
  addMember(member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  }
  send(message, fromMember, toMember) {
    // Send message
    toMember.receive(message, fromMember);
  }
}

// Instance of Chat Room
const chat = new ChatRoom();

// Members
const bob = new Member('Bob');
const john = new Member('John');
const tim = new Member('Tim');

// Add members to Room
chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

// Messages
bob.send('Hey, John', john);
john.send('Hello, Bob!', bob);
tim.send('This will be my personal chat', tim);
