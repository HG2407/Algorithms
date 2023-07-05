// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.start = null; 
//         this.last = null;
//     }

//     insert(value){
//         let node = new Node(value);
//         // if LinkedList is empty
//         if(this.start == null){         
//             this.start = node;
//             this.last = node;
//         } else {
//             this.last.next = node;
//             this.last = node;
//         }
   
//     }

//     print() {
//         for(let node = this.start; node !== null; node = node.next) {
//             console.log(node.value);
//         }
        
//     }

//     insertAfter(valueToFind, valueToInsert){
//         let bInserted = false;
//         for(let node = this.start; node !== null; node = node.next) {
//             if(node.value == valueToFind){
//                 let nodeToInsert = new Node(valueToInsert)
//                 nodeToInsert.next = node.next;
//                 node.next = nodeToInsert;
//                 bInserted = true;
//                 break;
//             }
//         }
//         return bInserted;
//     }

//     insertBefore(valueToFind, valueToInsert){
//         for(let node=this.start, previous=null; node!==null; previous=node, node=node.next){
//             if(node.value == valueToFind){
//                 let nodeToInsert = new Node(valueToInsert);
//                 nodeToInsert.next = node;
//                 previous.next = nodeToInsert;
//                 break;
//             }
//         }
//     }
// }

// export{LinkedList};


// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.start = null;
//         this.last = null;
//     }

//     insert(value){
//         let node = new Node(value);
//         if(this.start == null){
//             this.start = node; // starting node
//             this.last = node;
//         } else {
//             this.last.next = node;// if there are nodes already, then add this node after the last node
//             this.last = node;
//         }
//     }

//     print(){
//         for(let node=this.start; node!==null; node=node.next){
//             console.log(node.value);
//         }
//     }

//     insertAfter(valueToFind, valueToInsert){
//         let bInsert = false;
//         for(let node=this.start; node!==null; node=node.next){
//             if(node.value == valueToFind){
//                 let nodeToInsert = new Node(valueToInsert); // creates/instantiates a node with the provided value
//                 nodeToInsert.next = node.next;
//                 node.next = nodeToInsert;
//                 bInsert = true;
//                 break;
//             }
//         }
//         return bInsert;
//     }

//     insertBefore(valueToFind, valueToInsert){
//         for(let node=this.start, previous=null; node!==null; previous=node, node=node.next){
//             if(node.value==valueToFind){
//                 let nodeToInsert = new Node(valueToInsert);
//                 nodeToInsert.next = node;// links the (node to insert) to the (node with given value)
//                 previous.next = nodeToInsert;// links the previous node to the (node to insert)
//                 break;
//             }
//         }
//     }

//     length(){
//         let numberOfNodes = 0;
//         for(let node=this.start; node!==null; node=node.next){
//             numberOfNodes ++;
//         }
//         return numberOfNodes;
//     }

//     remove(value){
//         for(let node=this.start, previous=null; node!==null; previous=node, node=node.next){
//             if(node.value === value){
//                 if(node !== this.last && node !== this.start){
//                 previous.next = node.next;
//                 node.next = null;
//                 } else if(node === this.last){
//                     this.last = previous;
//                     previous.next = null;
//                 } else if(node === this.start){
//                     let nodeNew = this.start;
//                     this.start = this.start.next;//the next node becomes the starting node
//                     nodeNew.next = null;//original this.start gets disconnected
//                     this.start.previous = null;//the new this.start gets updated to have no previous nodes
//                 }
//                 break;
//             }
//         }
//     }

//     reverse(){
//         let node = this.start;
//         let previousNode = null;
//         let nextNode = null;
//         // for(let node=this.start; node !== null; node=node.next){
//         while (node !== null){
//             nextNode = node.next;
//             node.next = previousNode;
//             previousNode = node;
//             node = nextNode;// i++
//         }
    
//         this.last = this.start;
//         this.start = previousNode;
//     }
// }

//doubly LinkedList 

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList{
    constructor(){
        this.start = null;
        this.last = null;
    }

    insert(value){
        let node = new Node(value);
        if(this.start == null){
            this.start = node;
            this.last = node;
            this.start.previous = null;
        } else {
            let orginalLastNode = this.last;
            this.last.next = node;
            this.last = node;
            this.last.previous = orginalLastNode;
        }
    }

    print(){
        for(let node=this.start; node!==null; node = node.next){
            console.log(node.value);
        }
    }

    insertAfter(valueToFind, valueToInsert){
        let bInsert = false;
        let newNode = new Node(valueToInsert);
        for(let node=this.start; node!==null; node=node.next){
            if(node.value == valueToFind){
                newNode.next = node.next;
                node.next = newNode;
                newNode.previous = node;
                bInsert = true;
                break;
            }
        }
        return bInsert;
    }

    insertBefore(valueToFind, valueToInsert){
        let bInsert = false;
        let newNode = new Node(valueToInsert);
        for(let node=this.start; node!==null; node=node.next){
            if(node.value == valueToFind){
                newNode.next = node;
                node.previous.next = newNode;
                bInsert = true;
                break;
            }
        }
        return bInsert;
    }

    getLength(){
        let totalLength = 0;
        for(let node=this.start; node!==null; node=node.next){
            totalLength++;
        }
        return totalLength;
    }

    remove(valueToRemove){
        let valuePresent = false;
        for(let node=this.start; node!==null; node=node.next){
            if(node.value == valueToRemove){
                node.previous.next = node.next;
                node.next = null;
                valuePresent = true;
                break;
            }
        }
        return valuePresent;
    }

    printReverse(){
        for(let node=this.last; node.previous!==null; node = node.previous){
            console.log(node.value);
        }
    }

    traverseReverse(func){
        for(let node=this.last; node.previous!==null; node = node.previous){
            func(node.value);
        }

    }
}

export {LinkedList, Node};

//stack and queue

