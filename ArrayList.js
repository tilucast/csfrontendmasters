class ArrayList {

    constructor(){
        this.length = 0
        this.data = {}
    }

    push(value){
        this.data[this.length] = value
        this.length += 1
    }

    pop(){
        const shallowCopy = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length -= 1
        return shallowCopy
    }

    get(index){
       const shit = this.data[index]
       return shit
    }

    delete(index){
        const shallowCopy = this.data[index]
        this._collapseTo(index)
        return shallowCopy
        
    }

    _collapseTo(index){
        for (let prop = index; prop < this.length ; prop++) {
            this.data[prop] = this.data[prop+1]
        }

        delete this.data[this.length - 1]
        this.length--;
    }
}

const arraylist = new ArrayList()
arraylist.push(5)
arraylist.push('oi')
arraylist.push('cao')
arraylist.push(false)
arraylist.push('peste')
console.log(arraylist.data)
arraylist.delete(2)
console.log(arraylist.data)
