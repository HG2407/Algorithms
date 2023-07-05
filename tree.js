class TreeNode {
    constructor(value){
        this.value = value;
        this.parent = null;
        this.children = [];
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    insert(value, parent1){
        let treeNode = new TreeNode(value);

        if(this.root == null){
            this.root = treeNode;
        } else {
            parent1.children.push(treeNode);
            treeNode.parent = parent1;
        }
        
        return treeNode;
    }

    remove(node){
        let parent1 = node.parent;
        let index = parent1.children.indexOf(node);
        parent1.children.splice(index, 1);

        if(node.parent == null){
           this.root = null;
        }
    }

    preorder(){
        this.print(this.root);
    }

    print(node){
        console.log(node.value);
        let children1 = node.children;

        for(let i=0; i<children1.length; i++){
            this.print(children1[i]);
        }
    }

    postorder(){
        this.newPrint(this.root);
    }

    newPrint(node){
        let children1 = node.children;

        for(let i=0; i<children1.length; i++){
            this.newPrint(children1[i]);
            console.log(children1[i].value);
        }
        
        if(node == this.root){
            console.log(this.root.value);
        }

    }
}

export {Tree};