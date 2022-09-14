function Stack() {
    this.store = [];
    this.index = 0;

    this.push = function (newData) {
        this.store[this.index] = newData;
        this.index++;
    };

    this.pop = function () {
        if (this.index === 0) return undefined;
        this.index--;
        var result = this.store[this.index];
        delete this.store[this.index];

        return result;
    };

    this.isEmpty = function () {
        return this.index === 0;
    };

    this.peek = function () {
        return this.store[this.index - 1];
    };

    this.size = function () {
        return this.index;
    };

    this.clear = function () {
        for (let i = 0; i < this.index; i++) {
            delete this.store[i];
        }
        this.index = 0;
    };
}
