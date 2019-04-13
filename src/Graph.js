class Graph {
  constructor() {
    this.nodes = {};
    this.size = 0;
  }
  addNode(value) {
    this.nodes[value] = {};
    this.size++;
    return;
  }
  addEdge(from, to) {
    if (!this.nodes[from] || !this.nodes[to]) {
      return "Invalid node value";
    }
    if (Array.isArray(this.nodes[from])) {
      this.nodes[from].push(to);
    } else {
      this.nodes[from] = [to];
    }
    if (Array.isArray(this.nodes[to])) {
      this.nodes[to].push(from);
    } else {
      this.nodes[to] = [from];
    }

    return;
  }
  removeNode(value) {
    delete this.nodes[value];
    this.size--;
    for (let keys in this.nodes) {
      for (let i = 0; i < this.nodes[keys].length; i++) {
        if (this.nodes[keys][i] === value) {
          this.nodes[keys].splice(i, 1);
        }
      }
    }
    return;
  }
  contains(value) {
    return this.nodes.hasOwnProperty(value);
  }
  removeEdge(from, to) {
    delete this.nodes[from][to];
    delete this.nodes[to][from];
  }
  hasEdge(from, to) {
    if (Array.isArray(this.nodes[from])) {
      for (let i = 0; i < this.nodes[from].length; i++) {
        if (this.nodes[from][i] === to) {
          return true;
        } else {
          return false;
        }
      }
    } else if (Array.isArray(this.nodes[to])) {
      for (let i = 0; i < this.nodes[to].length; i++) {
        if (this.nodes[to][i] === from) {
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }
}
module.exports = Graph;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
