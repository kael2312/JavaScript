class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }

        return hash;
        0;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }
}

let myHasTable = new HashTable();
myHasTable.set('bolts', 1500);
myHasTable.set('washers', 50);
