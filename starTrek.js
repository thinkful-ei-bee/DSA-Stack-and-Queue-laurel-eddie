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

main();

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


