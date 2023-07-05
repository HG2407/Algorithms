import { BinaryTree } from "./binaryTree.js";
window.addEventListener('load', onLoad);

function onLoad(){
    let binaryTree = new BinaryTree();

    let first = binaryTree.insert(5);
    let second = binaryTree.insert(6, first);
    let third = binaryTree.insert(7, first);
    let fourth = binaryTree.insert(8, first);//this should not get inserted
    let fifth = binaryTree.insert(9, second);
    let sixth = binaryTree.insert(10, second);

    console.log('preorder');
    binaryTree.preorder();

    console.log('inorder');
    binaryTree.inorder();

    console.log('postorder');
    binaryTree.postorder();

    binaryTree.remove(fifth);
    binaryTree.preorder();

}