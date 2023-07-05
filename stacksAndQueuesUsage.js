import { Stack, Queue, Stack1} from "./stacksAndQueues.js";
window.addEventListener('load', onLoad);

function onLoad(){
    let stack = new Stack();
    stack.push('Harshit');
    stack.push('Goswami');
    console.log(stack.peek());
    console.log(stack.length);
    if(stack.isEmpty()){
        console.log('stack is empty')
    } else {
        console.log(stack.peek());
    }

    console.log('queue starting');

    let queue = new Queue();

    queue.enqueue('My');
    queue.enqueue('name');
    console.log(queue.peek());
    console.log(queue.length);
    queue.dequeue();
    console.log(queue.peek());
    if(queue.isEmpty()){
        console.log('queue is empty');
    } else {
        console.log('queue is not empty');
    }

    paranthesisChecker();
    console.log(reverseString('Hello'));
    palindromeChecker('naman');
    palindromeCheckerUsingQueue('Harshit');
    queueNewUsage();

    let listNew = new LinkedList();
    listNew.insert(1);
    listNew.insert(2);
    listNew.insert(3);
    listNew.insert(4);
    listNew.remove(2);
    console.log(listNew.length);
    listNew.print();
    listNew.search(2);
    listNew.search(4);
    console.log('stack using LinkedList');
    let stackLL = new Stack1();
    stackLL.push('Hello');
    stackLL.push('Guys');
    stackLL.print();
    stackLL.pop();
    stackLL.print();
    if(stackLL.isEmpty()){
        console.log('stack is empty');
    } else{
        console.log('stack is not empty');
    }
    console.log(stackLL.peek());
    console.log(stackLL.length);

}

function paranthesisChecker(){
    let array = ["((()))", "()()()", "(()))("];
    for(let i=0; i<array.length; i++){
        if(isBalanced(array[i])){
            console.log('the paranthesis is balanced');
        } else {
            console.log('the paranthesis is not balanced');
        }
    }
}

function isBalanced(string){
    let stack = new Stack();
    // for(let i=0; i<=string.length; i++){
    //     stack.push(string.charAt(i);)
    // }
    for(let i=0; i<=string.length; i++){

    if(string.charAt(i) == '('){
        stack.push(string.charAt(i));
    } else if (string.charAt(i) == ')'){
        stack.pop();
    }

    }

    if(stack.length == 0){
        return true;
    } else {
        return false;
    }
}

function reverseString(string){
    let stack = new Stack();
    let array = [];
    for(let i=0; i<string.length; i++){
    stack.push(string.charAt(i));
    }

    for(let i=0; i<string.length; i++){
        array.push(stack.pop());
    }

    return array.join('');
}


function palindromeChecker(string){
    if(isPalindrome(string)){
        console.log(string + ' is a palindrome.')
    } else {
        console.log(string + ' is not a palindrome.')
    }
}

function isPalindrome(string){
    let palindrome = true;
    let stack = new Stack();
    for(let i=0; i<string.length; i++){
        stack.push(string.charAt(i));
    }

    for(let i=0; i<string.length; i++){
        let removedCharacter = stack.pop();
        let stringCharacter = string.charAt(i);
        if(stringCharacter == removedCharacter){
            continue;
        } else {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

function palindromeCheckerUsingQueue(string){
    if(isPalindromeUsingQueue(string)){
        console.log(string + ' is a palindrome.')
    } else {
        console.log(string + ' is not a palindrome.')
    }
}


function isPalindromeUsingQueue(string){
    //preprocess the string to remove all capitalizations, spaces and punctuations
    string = string.toLowerCase().replace(/[W_]/g, '');

    let palindrome = true;
    let queue = new Queue();
    for(let i=0; i<string.length; i++){
        queue.enqueue(string.charAt(i));
    }

    for(let i=0; i<string.length; i++){
        let removedCharacter = queue.dequeue();
        let stringCharacter = string.charAt(string.length-1-i);
        if(stringCharacter == removedCharacter){
            continue;
        } else {
            palindrome = false;
            break;
        }
    }
    return palindrome;
}

class QueueNew{
    constructor(){
        // this.queue = [];
        // this.string = null;
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(string){
    // let stack1 = new Stack();
    for(let i=0; i<string.length; i++){
        this.stack1.push(string.charAt(i));
    }
    }

    dequeue(){     
        let stack1Length = this.stack1.length;
        let remove;

        for( let i=0;i<stack1Length; i++){
            this.stack2.push(this.stack1.pop());
            if(i==stack1Length-1){
                remove = this.stack2.pop();
                let stack2Length = this.stack2.length;
                for(let i=0; i<stack2Length; i++){
                    this.stack1.push(this.stack2.pop());
                }
            }

        }
        return remove;
    }

    get length(){
        return this.stack1.length;
    }
}

function queueNewUsage(){
    let queueNew = new QueueNew();
    queueNew.enqueue('Hello');

  for(let i=queueNew.length; i>0; i--){
    console.log(queueNew.dequeue());
    }
}


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        // this.start = null;
        // this.last = null;
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    insert(value){
        // let node = new Node(value);
        this.stack1.push(value);
    }

    remove(value){
        let stack1Length = this.stack1.length;
        let valueExists = false;
        for(let i=0; i<stack1Length; i++){
            if(this.stack1.peek()!== value){
                this.stack2.push(this.stack1.pop());
                continue;
            } else{
               this.stack1.pop();
               valueExists = true;
               break;
            }
    }
    let stack2Length = this.stack2.length;
    for(let i=0; i<stack2Length; i++){
        this.stack1.push(this.stack2.pop());
    }

    if(valueExists == false){
        console.log('no such value exists');
    }
    }

    get length(){
        return this.stack1.length;
    }

    print(){
        let finalOutput = '';
        let stack1Length = this.stack1.length;
        for(let i=0; i<stack1Length; i++){
            this.stack2.push(this.stack1.pop())
        }
        for(let i=0; i<stack1Length; i++){
            this.stack1.push(this.stack2.pop());
            if(i!==stack1Length-1){
            finalOutput += this.stack1.peek() + ', ';
        } else {
            finalOutput += this.stack1.peek();
        }
    }
        console.log(finalOutput);

    }
    
    search(value){
        let stack1Length = this.stack1.length;
        let valueExists = false;
        for(let i=0; i<stack1Length; i++){
            if(this.stack1.peek() == value){
               valueExists = true;
                break;
            } else{
                this.stack2.push(this.stack1.pop());
               break;
            }
    }
    let stack2Length = this.stack2.length;
    for(let i=0; i<stack2Length; i++){
        this.stack1.push(this.stack2.pop());
    }

    if(valueExists){
        console.log('value exists');
    } else {
        console.log('no such value exists');
    }
    }

}
