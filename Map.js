const map = new Map()
map.set('Juniores', {size: '5.1ft', weight: '180lbs'})
map.set(() => {}, 'value associated with a anonymous fn')
map.set(5, 'value associated with a anonymous fn')
for(let [key, value] of map){
    console.log(key, value)
}