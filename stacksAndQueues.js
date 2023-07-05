import { LinkedList, Node } from "./linkedList.js";


class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        return this.stack.push(value);// adds the new value at higher indices 
    
    }

    pop(){
        return this.stack.pop();
    }

    get length(){
        return this.stack.length;
    }

    peek(){
        return this.stack[this.stack.length - 1];// peeks the last value that was inserted
    }

    isEmpty(){
        return this.stack.length === 0;
    }
}

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        return this.queue.unshift(value);// adds the new value at array[0] by shifting the earlier value to higher indices
    }

    dequeue(){
        return this.queue.pop();// removes the last index of the array, here it is first value to be inserted due to first in first out.
    }

    get length(){
        return this.queue.length;
    }

    peek(){
        return this.queue[this.length-1];// peeks the first value that was inserted
    }

    isEmpty(){
        return this.queue.length === 0;
    }


}

//to remove the first index from the array we use shift(); i.e array.shift();

export {Stack, Queue, Stack1};


class Stack1{
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.insert(value);
    }

    pop(){
        this.list.remove(this.list.last.value);
        return this.list;
    }

    peek(){
       return this.list.last.value;
    }

    print(){
        this.list.print();
    }

    isEmpty(){
        if(this.list == null){
            return true;
        }
    }

    get length(){
        return this.list.length();
    }

}