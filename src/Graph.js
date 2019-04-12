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
    let count = 0;
    delete this.nodes[value];
    this.size--;
    for (let keys in this.nodes) {
      if (this.nodes[keys][value]) {
        delete this.nodes[keys][keys];
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
