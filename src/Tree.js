class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(value) {
    let isTrue = false;
    function searchTree(node) {
      if (node.value === value) {
        isTrue = true;
        return;
      }
      for (let i = 0; i < node.children.length; i++) {
        searchTree(node.children[i]);
      }
    }
    searchTree(this);
    return isTrue;
  }
  remove(value) {
    let status = false;
    function findNode(node) {
      if (node.value === value) {
        node.value = null;
        status = true;
        return;
      }

      for (let i = 0; i < node.children.length; i++) {
        findNode(node.children[i]);
      }
    }
    findNode(this);
    if (status === true) {
      return value;
    }
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {
    function goDown(node) {
      let status = false;
      if (node.value) {
        status = true;
      }
      if (node.children.length === 0 && status === true) {
        fn(node);
        return;
      }

      goDown(node.children[0]);
    }
    goDown(this);
  }

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = Tree;
