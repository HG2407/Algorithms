import {LinkedList} from "./linkedList.js";
window.addEventListener('load', onLoad);

function onLoad(){
    let list = new LinkedList();
    for(let i=0; i<10; i++){
        // let value = getRandomInt(1,100);
        let value = i;
        list.insert(value);
    }
    console.log('before insert');
    list.print();
    list.insertAfter(4, 490);
    console.log('after insert');
    list.print();
    console.log('insert before');
    list.insertBefore(14, 5);
    list.print();
    console.log('length');
    console.log(list.length);
    list.remove(1);
    console.log('remove value');
    list.print();
    // console.log('reverse');
    // list.reverse();
    // list.print();
    console.log('reverse print');
    list.traverseReverse(function(value){
        console.log(value);
    });
    // let func = print;
    // func(5);
}

function print(value){
    console.log(value);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  