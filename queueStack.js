'use strict';
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class QueueStack {
  constructor() {
    this.top = null;
  }
  _push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  _pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  enqueue(data) {
    const tempStack = new Stack;
    while(this.top){
      tempStack.push(this._pop());
    }
    tempStack.push(data);
    while(tempStack.top){
      this._push(tempStack.pop());
    }
  }
  dequeue() {
    return this._pop();
  }
}

function peek(queue) {
  return queue.top;
}

function isEmpty(queue) {
  if(queue.first === null) {
    return true;
  } else {
    return false;
  }
}

function display(queue) {
  let currentNode = queue.top;
  if(isEmpty(queue) === null) {
    return null;
  }
  while(currentNode !== null) {
    console.log(currentNode.data);
    //changing ptr to next node
    currentNode = currentNode.next;
  }
}

const starTrekQNew = new QueueStack;

starTrekQNew.enqueue('Kirk');
starTrekQNew.enqueue('Spock');
starTrekQNew.enqueue('Uhura');
starTrekQNew.enqueue('Sulu');
starTrekQNew.enqueue('Checkov');
starTrekQNew.dequeue();
starTrekQNew.enqueue('Laura');
starTrekQNew.dequeue();
starTrekQNew.dequeue();
starTrekQNew.enqueue('Eddie');
//needs this to show
display(starTrekQNew);
console.log(peek(starTrekQNew));