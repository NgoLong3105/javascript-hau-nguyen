function createBinarySearchTree(initialKeyList) {
  let root = null;

  if (Array.isArray(initialKeyList) && initialKeyList.length > 0) {
    const keyList = [...new Set(initialKeyList)];
    keyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    if (node === null) return newNode;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    return node;
  }

  return {
    root,
    insert,
  };
}

const binarySearchTree = createBinarySearchTree([10, 15]);
console.log(binarySearchTree.root);
