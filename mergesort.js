const mergeSort = array => {
    //let newArr = [...array]
    
    if(array.length < 2) return array

    const length = array.length
    const middle = Math.floor(length/2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, length)

    return stitch(mergeSort(left), mergeSort(right))
}

const stitch = (left, right) => {
    const results = []

    while(left.length && right.length){
        
        if(left[0] <= right[0]){
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    // while(left.length){
    //     results.push(left.shift())
    // }

    // while(right.length){
    //     results.push(right.shift())
    // }

    // return results

    return [...results, ...left, ...right]
}

const array = [4,9,5,7,3,2,8,10,15,22,25,27,21,18,16,99,55,77,64,88,1,11,17,26]
console.time(mergeSort(array))
console.timeEnd(mergeSort(array))