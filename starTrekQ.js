'use strict';
class _Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    //means queue is empty
    if (this.first === null) {
      //sets this as the first in line
      this.first = node;
    }
    //if something exists in the last position the next one after it
    //will be this node
    if (this.last) {
      this.last.next = node;
    }
    //set the last to be what we added
    this.last = node;
  }
  dequeue() {
    if(this.first === null) {
      return;
    }
    //keep track of the first one to access to its next value
    const node = this.first;
    //move the ptr from first node to next node
    this.first = this.first.next;

    if(node === this.last) {
      //if it is the last value, set to null
      this.last = null;
    }
    //return the node
    return node.value;
  }
}

const starTrekQ = new Queue;

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue();
starTrekQ.dequeue();
//needs this to show
display(starTrekQ);

function peek(queue) {
  return queue.first;
}

function isEmpty(queue) {
  if(queue.first === null) {
    return true;
  } else {
    return false;
  }
}

function display(queue) {
  let currentNode = queue.first;
  if(isEmpty(queue) === null) {
    return null;
  }
  while(currentNode !== null) {
    console.log(currentNode.value);
    //changing ptr to next node
    currentNode = currentNode.next;
  }
}

class _NodeDll {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.previous = null;
  }
}

class QueueDll {
  //set next and previous to null in DLL
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      //connecting the links to move forw and back
      node.previous = this.last; 
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    //next node in line
    this.first = this.first.next;       
    if(this.first !== null) {
      //means if it is a node
      //its null because the first is removed
      this.first.previous = null;
    }        
    if (node === this.last) {
            
      this.last = null;
    }
    return node.value;
  }
}
const starTrekQNew = new QueueDll;

starTrekQNew.enqueue('Kirk');
starTrekQNew.enqueue('Spock');
starTrekQNew.enqueue('Uhura');
starTrekQNew.enqueue('Sulu');
starTrekQNew.enqueue('Checkov');
//needs this to show
display(starTrekQNew);
console.log(peek(starTrekQNew));



// Square dance pairing
class squareDance{
  constructor(){
    this.males = new Queue;
    this.females = new Queue;
  }

  add(person){
    // person = 'F Jane'
    const gender = person[0];
    const name = person.slice(2);
    if (gender === 'F'){
      this.females.enqueue(name);
    }else{
      this.males.enqueue(name);
    }
  }

  pairUp(){
    if (isEmpty(this.females) && isEmpty(this.males)){
      return 'There are no dancers';
    }
    if (isEmpty(this.females)){
      return `There are ${this._length(this.males)} male dances waiting to dance`;
    }
    if (isEmpty(this.males)){
      return `There are ${this._length(this.females)} male dances waiting to dance`;
    }
    return `Female dancer is ${this.females.dequeue()}, and the male dancer is ${this.males.dequeue()}`;
  }

  _length(queue){
    let length = 0;
    let currNode = queue.first;
    while(currNode){
      length++;
      currNode = currNode.next;
    }
    return length;
  }
}

const dance = new squareDance;

dance.add('F Jane');
dance.add('M Frank');
dance.add('M John');
dance.add('M Sherlock');
dance.add('F Madonna');
dance.add('M David');
dance.add('M Christopher');
dance.add('F Beyonce');
console.log(dance.pairUp());
console.log(dance.pairUp());
console.log(dance.pairUp());
console.log(dance.pairUp());

class QueueBank {
    constructor() {
        this.customers = new Queue;
    }
    ophBank(queue) {
        if(!queue.first) {
            console.log('Queue is empty');
        }
        let customers = queue.first;
        while(customers !== null) {
            console.log('the current customer is', customers.value);
            if(Math.random() < 0.25){
                console.log('uh oh they went to the end of the line', customers.value);
                queue.enqueue(queue.dequeue());
            } else {
                //if they are the lucky ones
                //get out of line and they're done
                queue.dequeue();
            }
            customers = customers.next;
        }
    }
    addCustomer(name) {
        this.customers.enqueue(name);
    }
}
const bank = new QueueBank;
bank.addCustomer('Eddie');
bank.addCustomer('Laurel');
bank.ophBank(bank.customers);