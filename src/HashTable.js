const { ControlledArray, simpleHash } = require("./utilities");

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = ControlledArray(this.limit);
  }

  insert(key, value) {
    const index = simpleHash(key, this.limit);
    if (this.storage.get(index) === undefined) {
      this.storage.set(index, [key, value]);
    } else {
      this.storage.each((el) => {
        if (el) {
          if (el[0] === key) {
            el[1] = value;
          } else {
            el.push([key, value]);
          }
        }
      });
    }
    return index;
  }

  retrieve(key) {
    const idx = simpleHash(key, this.limit);
    const found = this.storage.get(idx);

    return found[1];
  }
}

module.exports = HashTable;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
