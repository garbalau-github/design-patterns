/**
 * In software engineering, the mediator pattern defines an object that encapsulates
 * how a set of objects interact. This pattern is considered to be a behavioral pattern
 * due to the way it can alter the program's running behavior. In object-oriented programming,
 * programs often consist of many classes. Business logic and computation are
 * distributed among these classes. However, as more classes are added to a program,
 * especially during maintenance and/or refactoring, the problem of communication
 * between these classes may become more complex. This makes the program harder to read and maintain.
 * Furthermore, it can become difficult to change the program, since any change may
 * affect code in several other classes. So, with the mediator pattern,
 * communication between objects is encapsulated within a mediator object.
 * Objects no longer communicate directly with each other,
 * but instead communicate through the mediator.
 *
 * Chat Room is a good example:
 * - Members of that chat room do not send messages directly to each other
 * instead they send them to Chat Room Mediator, that then handles all the logic
 * that decides where all of those messages need to go
 */

function Member(name) {
  this.name = name;

  // In which chat room are we currently in
  this.chatRoom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    // message, who sends it (current member, this), who will recieve
    this.chatRoom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  },
};

function ChatRoom() {
  // Keep track of current members that are in this chat
  this.members = {};
}

ChatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatRoom = this;
  },
  send: function (message, fromMember, toMember) {
    // Send the message to receiver, and who its from
    toMember.receive(message, fromMember);
  },
};

// Instances
const chat = new ChatRoom();
const bob = new Member('Bob');
const john = new Member('John');
const tim = new Member('Tim');

// Add members to room
chat.addMember(bob);
chat.addMember(john);
chat.addMember(tim);

// Messages
bob.send('Hey, John', john);
john.send('Hello, Bob!', bob);
tim.send('This will be my personal chat', tim);
