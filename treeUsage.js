import { Tree } from "./tree.js";
window.addEventListener('load', onLoad);

function onLoad(){
    let tree = new Tree();
    let first = tree.insert(4, null);
    let second = tree.insert(10, first);
    let third = tree.insert(11, first);
    let fourth = tree.insert(12, second);
    tree.preorder();
    tree.postorder();
    tree.remove(third);
    console.log('11 removed');
    tree.preorder();
    tree.postorder();
}