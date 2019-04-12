class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    function searchAndInsert(node) {
      if (node.value >= value) {
        if (!node.left) {
          node.left = new BinarySearchTree(value);
        } else {
          searchAndInsert(node.left);
        }
      }
      if (node.value <= value) {
        if (!node.right) {
          node.right = new BinarySearchTree(value);
        } else {
          searchAndInsert(node.right);
        }
      }
    }
    searchAndInsert(this);
  }
  contains(value) {
    let status = false;
    function searchTree(node) {
      if (node.value === value) {
        status = true;
        return;
      }
      if (node.value >= value) {
        if (node.left) {
          searchTree(node.left);
        }
      }
      if (node.value <= value) {
        if (node.right) {
          searchTree(node.right);
        }
      }
    }
    searchTree(this);
    return status;
  }
}
module.exports = BinarySearchTree;
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
