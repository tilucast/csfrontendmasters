const set = new Set()
set.add(5)
set.add(6)
set.add(7)
set.delete(7)
console.log(set.has(7))
for (let [key, value] of set.entries()){
    console.log(key, value)
}