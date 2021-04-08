// this hashtable implementation is wrong.
class HashTableSet {
    constructor(){
        this.values = {}
        this.length = 0
        this.size = 0
    }

    calculateHash(key) {
        return key.toString().length % (this.length || 1);
    }

    add(key, value) {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.length++;
        }
        this.values[hash][key] = value;
    }

    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && 
        this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else {
            return null;
        }
    }
}

const hash = new HashTableSet()
hash.add('Josuke', '4th Jojo')
hash.add('Penis', '5th Jojo')
hash.add('Quenis', '6th Jojo')
hash.add('Benis', '7th Jojo')
console.log(hash.values);