const insertionSort = array => {
    const newArr  = [...array]
    let h = 0

    for(let i = 1; i < newArr.length; i++){
        for(let j = 0; j < i; j++){
            if(newArr[i] < newArr[j]) {
                h+=1
                let spliced = newArr.splice(i, 1)
                newArr.splice(j, 0, spliced[0])
            }
        }
    }

    console.log(h)
    return newArr
}

// const array = [4,9,5,7,3,2,8,10,15]

// const x = insertionSort(array)

// console.log(x)

const p = [9,5,6,4]
console.log(insertionSort(p))