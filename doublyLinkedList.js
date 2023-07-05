class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.start = null;
        this.last = null;
    }

    insert(value){
        let node = new Node(value);
        if(this.start == null){
            this.start = node;
            this.last = node;
        } else {
            this.last.next = node;
            node.previous = this.last;
            this.last = node;
        }
    }

    print(){
        for(let node=this.start; node!==null; node=node.next){
            console.log(node.value);
        }
    }

    insertBefore(valueToFind, valueToInsert){
        let bInsert = false;
        let newNode = new Node(valueToInsert);
        for(let node=this.start; node!==null; node=node.next){
            if(node.value == valueToFind){
                if(node !== this.start){
                newNode.next = node;
                newNode.previous = node.previous;
                node.previous.next = newNode;
                node.previous = newNode;
                bInsert = true;
                break;
                } else {
                    newNode.next = node;
                    node.previous = newNode;
                    this.start = newNode;
                }
            } 
        }
        return bInsert;
    }

    insertAfter(valueToFind, valueToInsert){
        let bInsert = false;
        let newNode = new Node(valueToInsert);
        for(let node=this.start; node!==null; node=node.next){
            if(node.value == valueToFind){
                if(node !== this.last){
                newNode.next = node.next;
                node.next.previous = newNode;
                node.next = newNode;
                newNode.previous = node;
                bInsert = true;
                break;
                } else if(node == this.last) {
                    node.next = newNode;
                    newNode.previous = node;
                    this.last = newNode;
                    bInsert = true;
                    break;
                }
            }
        }
        return bInsert;
    }

    remove(valueToRemove){
        let valuePresent = false
        for(let node=this.start; node!==null; node=node.next){
            if(node.value == valueToRemove){
                if(node !== this.start && node!==this.last){
                node.next.previous = node.previous;
                node.previous.next = node.next;
                node.next = null;
                node.previous = null;
                valuePresent = true;
                break;
            } else if(node == this.start){
                node.next.previous = null;
                this.start = node.next;
                node.next = null;
                valuePresent = true;
                break;
            } else if(node == this.last){
                node.previous.next = null;
                this.last = node.previous;
                node.previous = null;
                valuePresent = true;
            }
            }
        }
        return valuePresent;
    }

    getLength(){
        let totalDays = 0;
        for(let node=this.start; node!==null; node=node.next){
            totalDays++;
        }
        return totalDays;
    }

    printReverse(){
        for(let node=this.last; node!==null; node=node.previous){
            console.log(node.value);
        }
    }

    traverseReverse(func){
        for(let node=this.last; node!==null; node=node.previous){
            func(node.value);
        }
    }

}

export {DoublyLinkedList};