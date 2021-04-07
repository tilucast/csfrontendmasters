class Tree {
    constructor(){
        this.root = null
    }

    add(value){
        const node = new Node(value)

        if(!this.root) {
            this.root = node
            return
        } 

        let current = this.root

        while(true){
            if(current.value > value){

                if(current.left){
                    current = current.left
                } else {
                    current.left = node
                    return
                }
            } else{

                if(current.right){
                    current = current.right
                } else {
                    current.right = node
                    return
                }
            }
        }
    }
}

class Node {
    constructor(value, left=null, right=null){
        this.value = value
        this.left = left
        this.right = right
    }
}

const tree = new Tree()
tree.add(5)
tree.add(6)
tree.add(4)
tree.add(8)
tree.add(18)
tree.add(2)
console.log(tree);