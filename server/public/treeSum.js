const hasPathToSum = function (node, targetSum) {
  // inner recursive function below ///////////
  var traverse = function(node,sum) {
    sum += node.value;
    if ( sum === targetSum) {
      return true;
    }
    if ( node.children ) {
      return traverse(node.children[0],sum) || traverse(node.children[1],sum);
    }
    return false;
  };
  //initial setup below ///////////////////
  return traverse(node,0);
};

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};
