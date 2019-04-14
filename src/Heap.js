class Heap {
  constructor() {
    this.storage = [];
  }
  insert(value) {
    this.storage.push(value);
    let array = this.storage;
    let id = array.length - 1;
    function arrange(index) {
      if (array[index] > array[Math.floor((index - 1) / 2)]) {
        [array[Math.floor((index - 1) / 2)], array[index]] = [
          array[index],
          array[Math.floor((index - 1) / 2)],
        ];
      }
      id = Math.floor((index - 1) / 2);
      if (id > 0) {
        arrange(id);
      }
    }
    arrange(id);
    this.storage = array;
  }
  removeMax() {
    const result = this.storage.splice(0, 1);
    let id = this.storage.length - 1;
    [this.storage[id], this.storage[0]] = [this.storage[0], this.storage[id]];
    let array = this.storage;

    function arrange(index) {
      if (array[index] > array[Math.floor((index - 1) / 2)]) {
        [array[Math.floor((index - 1) / 2)], array[index]] = [
          array[index],
          array[Math.floor((index - 1) / 2)],
        ];
      }
      if (array[index] > array[Math.floor((index - 1) / 2 + 1)]) {
        [array[Math.floor((index - 1) / 2 + 1)], array[index]] = [
          array[index],
          array[Math.floor((index - 1) / 2 + 1)],
        ];
      }

      id = Math.floor((index - 1) / 2);
      if (id >= 0) {
        arrange(id);
      }
    }
    arrange(id);
    this.storage = array;
    return result[0];
  }
}
module.exports = Heap;
