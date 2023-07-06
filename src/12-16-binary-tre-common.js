function createBinarySearchTree(initialKeyList) {
  let root = null;

  if (Array.isArray(initialKeyList) && initialKeyList.length > 0) {
    initialKeyList.forEach((key) => {
      root = insert(root, key);
    });
  }

  function insert(node, key) {
    const newNode = {
      key,
      left: null,
      right: null,
    };

    if (node == null) return newNode;
    if (node.key == null) return node;

    if (key > node.key) {
      node.right = insert(node.right, key);
    } else {
      node.left = insert(node.left, key);
    }

    return node;
  }

  const findMin = (node) => {
    if (node == null) return null;

    let min = node;
    while (min.left != null) {
      min = min.left;
    }

    return min;
  };

  const findMax = (node) => {
    if (node == null) return null;

    let max = node;
    while (max.right != null) {
      max = max.right;
    }

    return max;
  };

  const search = (node, key) => {
    if (node == null) return null;

    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);

    return node;
  };

  const getMaxNodesCount = (node) => {
    if (node == null) return 0;

    const leftHeight = getMaxNodesCount(node.left); // node.left: 10, node.left.left: 5, node.left.left.left: 1, node.left.left.left.left: 0,
    const rightHeight = getMaxNodesCount(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  const getHeight = () => {
    const height = getMaxNodesCount(root);
    return height > 0 ? height - 1 : 0;
  };

  const printfNodesAtLever = (node, level) => {
    if (node == null) return;

    if (level === 0) {
      console.log(node.key);
      return;
    }

    printfNodesAtLever(node.left, level - 1);
    printfNodesAtLever(node.right, level - 1);
  };

  const bfs = () => {
    const height = getHeight();
    for (let i = 0; i <= height; i++) {
      printfNodesAtLever(root, i);
    }
  };

  const printInOrder = (node) => {
    if (node == null) return;

    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
  };

  const printPreOrder = (node) => {
    if (node == null) return;

    console.log(node.key);
    printPreOrder(node.left);
    printPreOrder(node.right);
  };

  const printPostOrder = (node) => {
    if (node == null) return;

    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
  };

  const remove = (node, key) => {
    if (node == null) return null;

    // find node to be delete
    if (key > node.key) {
      // 17 > 13, 17 > 1
      node.right = remove(node.right, key);
      return node;
    }

    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }

    // node.key === key
    // no chilid
    if (node.right == null && node.left == null) return null;

    // if 1 child
    if (node.left == null) {
      node = node.right;
      return node;
    }

    if (node.right == null) {
      node = node.left;
      return node;
    }

    // if 2 child
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);

    return node;
  };

  return {
    root,
    insert,
    findMin,
    findMax,
    search,
    getMaxNodesCount,
    getHeight,
    bfs,
    printInOrder,
    printPreOrder,
    printPostOrder,
    remove,
  };
}

const binarySearchTree = createBinarySearchTree([10, 1, 19]);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 1);
binarySearchTree.root = binarySearchTree.remove(binarySearchTree.root, 10);
console.log(binarySearchTree.root);
