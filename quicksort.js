const quickSort = array => {

    if(array.length <= 1) return array

    const pivot = array[array.length - 1]
    const right = []
    const left = []

    for (let index = 0; index < array.length - 1; index++) {
        if(array[index] < pivot) {
            left.push(array[index])
        } else {
            right.push(array[index])
        }
        
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
    
}

const arr = [4,9,5,7,3,2,8,10,15,22,25,27,21,18,16,99,55,77,64,88,1,11,17,26]
console.time(quickSort(arr))
console.timeEnd(quickSort(arr))