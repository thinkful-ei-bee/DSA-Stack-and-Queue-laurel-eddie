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

function main() {
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  peek(starTrek);
  isEmpty(starTrek);
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}

// main();

function peek(stack) {
  console.log(stack.top);
  return stack.top;
}

function isEmpty(stack) {
  //check the top when checking to see if its empty
  if(stack.top === null) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

//while loop is primarily used because we dont know length
//and doesnt have index
function display(stack) {
  let currentNode = stack.top;
  if(isEmpty(stack)) {
    return null;
  }
  //the last value .next will always equal null
  while(currentNode !== null) {
    console.log(currentNode.data);
    //so the while loop doesnt go forever
    currentNode = currentNode.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // Your code goes here
  const stack = new Stack;
  for (let i=0;i<s.length;i++){
    stack.push(s[i]);
  }
  let newString='';
  let currentNode = stack.top;
  while (currentNode !== null){
    newString += stack.pop();
    currentNode = currentNode.next;
  }
  return newString === s;
}


// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

function matchPara(expression){
  const stack = new Stack;
  for (let i=0;i<expression.length;i++){
    if (expression[i] === '(' || expression[i] === '[' || expression[i] === '{'){
      stack.push(
        {
          data: expression[i],
          index: i
        }
      );
    }
    if (expression[i] === ')' || expression[i] === ']' || expression[i] === '}'){
      if (isEmpty(stack)){
        let character = '';
        if (expression[i] === ')'){
          character = '(';
        }else if (expression[i] === '}'){
          character = '{';
        }else if (expression[i] === ']'){
          character = '[';
        }
        return `missing a ${character} at ${i}`;
      }
      else{
        stack.pop();
      }
    }
  }
  if (!isEmpty(stack)){
    
    const node = stack.pop();
    let character = '';
    if (node.data === '('){
      character = ')';
    }else if (node.data === '{'){
      character = '}';
    }else if (node.data === '['){
      character = ']';
    }
    return `missing a ${character} at ${node.index}`;
  }
  return 'valid paraentheses';
}

// console.log(matchPara('(3+2)*(4)')); // valid
// console.log(matchPara('(3+2)*(4')); // ) at 6
// console.log(matchPara('3+2)*(4)')); // ( at 3

// console.log(matchPara('[3+2]*{4}')); // valid
// console.log(matchPara('[3+2]*{4')); // } at 6
// console.log(matchPara('3+2]*{4}')); // [ at 3

function sortStack(stack) {
  //creating a temporary stack
  const tempStack = new Stack;
  let temp = 0;

  //checking if its not empty
  while(!isEmpty(stack)) {
    temp = stack.pop();
    while(temp !== peek(tempStack)) {
      //checking is greater than peek
      if (isEmpty(tempStack)) {
        tempStack.push(temp);
        break;
      }
      console.log('temp data:', temp, 'tempStack data:', peek(tempStack).data);
      if (temp > peek(tempStack).data) {
             
        tempStack.push(temp);
        break;
      } else {
        //removing the node in tempStack and putting it back on top
        stack.push(tempStack.pop());
      }
    }
  }
  //this is taking the top value of tempstack and putting it at the ///bottom of the original stack  
  while(!isEmpty(tempStack)) {
    //increase stack while decreasing tempstack
    stack.push(tempStack.pop());
  }  
}
const a = new Stack;
a.push(1);
a.push(7);
a.push(3);
a.push(12);

sortStack(a);
display(a);