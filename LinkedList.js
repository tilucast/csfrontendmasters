class Node {
    constructor(value){
        this.value = value
        this._next = null
    }
}

class LinkedList {
    constructor(){
        this._head = null
        this._tail = null
        this.length = 0
    }

    push(value){
        const node = new Node(value)
        this.length++
        if(!this._head){
            this._head = node
        }else{
            this._tail._next = node
        }

        this._tail = node
    }

    pop(){
        return this.delete(this.length - 1)
    }

    _find(value, test=this._test){
        let current = this._head
        let i = 0

        while(current){
            if(test(value, current.value, i)){
                return current
            } 

            current = current._next
            i++
        }

        return null
    }

    _test(value,nodeValue){
        return value === nodeValue
    }

    testIndex(searchIndex, __, index){
    //console.log(searchIndex, __, index)the middle one is the current node value
        return searchIndex === index
    }

    get(index){
        const node = this._find(index, this.testIndex)
        if (!node) return null
        return node
    }

    delete(index){
        if(index === 0){
            const head = this._head

            if(head){
                this._head = head._next
            } 

            this.length--
            return head
        }

        const previousNode = this._find(index-1, this.testIndex);
        if(!previousNode) return null

        const actualNode = previousNode._next;
        if (!actualNode) return null;

        previousNode._next = actualNode._next;    
        if (!previousNode._next?._next) this._tail = previousNode
        this.length--
        return actualNode
    }
}

const linked = new LinkedList()
linked.push(5)
linked.push(6)
linked.push(7)
linked.push(99)
linked.push(55)
linked.push(1)
console.log(linked.delete(5));
console.log(linked.delete(4));
console.log(linked.delete(3));
console.log(linked);
