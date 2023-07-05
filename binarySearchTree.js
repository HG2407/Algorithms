class Node{
    constructor(value, left = null, right = null){
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    add(value){
        let newNode = new Node(value);
        let node = this.root;

        if(node == null){
            node = newNode;
        } else {
            if(value<node.value){
                if(node.left == null){
                return node.left = newNode;
                } else {
                    node = node.left;
                } 
            } else if (value>node.value){
                if(node.right == null){
                return  node.right = newNode;
                } else {
                    node = node.right;
                } 
            } else {
                return null;
            }
        }
    }

    findMin(){
        let node = this.root;
        let minValue;

        while(node.left!==null){
            minValue = node.left;
        }

        return minValue;
    }

    findMax(){
        let node = this.root;
        let maxValue;
    
        while(node.right!==null){
            maxValue = node.right;
        }

        return maxValue;
    }

    isPresent(value){
        let node = this.root;

        while(node!==null){
            if(node.value == value){
                return true;
            } else if(value < node.value){
                node = node.left;
            } else {
                node = node.right;
            }
        }
        return false;
    }    

}
