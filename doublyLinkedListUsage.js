import { DoublyLinkedList } from "./doublyLinkedList.js";

window.addEventListener('load', onLoad);

function onLoad(){
    let list = new DoublyLinkedList();
    for(let i=1; i<10; i++){
    list.insert(i);
    }
    list.print();
    list.insertAfter(9, 11);
    list.printReverse();
    console.log('new value inserted');
    list.insertBefore(11, 10);
    list.print();
    console.log(list.getLength());
    list.remove(0);
    console.log('something removed');
    list.print();
    list.insertBefore(1, 0);
    console.log('zero added');
    list.print();
    list.insertAfter(11, 12);
    list.print();
    list.printReverse();
    list.traverseReverse(function(value){
        console.log(value);
    })
}