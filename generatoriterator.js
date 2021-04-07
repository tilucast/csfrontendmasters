Number.prototype[Symbol.iterator] = function*(){
    for (let index = 0; index <= this; index++) {
        yield index
    }
}

console.log([...50])