class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(value, parent1){

        let node = new TreeNode(value);

        if(this.root == null){
            this.root = node;
        } else if (parent1.left == null && parent1.right == null){
            parent1.left = node;
            node.parent = parent1;
        } else {
            parent1.right = node;
            node.parent = parent1;
        }
        
        return node;
    }

    remove(node){

        let parent1 = node.parent;

        if(parent1.left == node){
            parent1.left = null;
        } else if (parent1.right == node){
            parent1.right = null;
        }

        if(node.parent == null){
            this.root = null;
        }

    }

    preorder(){
        this.print(this.root);
    }

    print(node){

        console.log(node.value);
        
        if (node.left !== null){
        this.print(node.left);
        }

        if (node.right !== null){
        this.print(node.right);

        }

    }

    inorder(){
        this.printInOrder(this.root);
    }

    printInOrder(node){

        if (node.left !== null){
            this.printInOrder(node.left);
        }

        console.log(node.value);

        if (node.right !== null){
        this.printInOrder(node.right);
        }

    }

    postorder(){
        this.printPostOrder(this.root);
    }

    printPostOrder(node){

        if (node.left !== null){
        this.printPostOrder(node.left);
        }   
        
        if (node.right !== null){
        this.printPostOrder(node.right);
        }

        console.log(node.value);
    }

}

export {BinaryTree};