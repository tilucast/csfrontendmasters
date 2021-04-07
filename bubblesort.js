const bubbleSort = (array) => {
    const newArr = [...array]
    let h = 0

    for(let i = 0; i < newArr.length ; i ++){
        for(let j = i + 1; j < newArr.length; j++){
            if(newArr[i] > newArr[j]){
                h +=1
                let temp = newArr[i]
                newArr[i] = newArr[j]
                newArr[j] = temp
            }
        }
    }
    console.log(h)
    return newArr
}

// const somenumbersarray = [4,9,5,7,3,2,8,10,15]
// const bubbled = bubbleSort(somenumbersarray)
// console.log(bubbled);

const p = [4,9,5,7,3,2,8,10,15,22,25,27,21,18,16,99,55,77,64,88,1,11,17,26]
console.time(bubbleSort(p))
console.timeEnd(bubbleSort(p))