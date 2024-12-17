
// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

class BinaryNode {
    constructor(value) {
        this.value = value; // Node value
        this.left = null; // Node left child
        this.right = null; // Node right child
    }
}

/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  // To invert we should be able to traverese through Binary Tree
  // each node has left and right child so starting point it always root we can either go to left or right childs
  // and so on for each node. TO INVERSE: Last right child or last child start by moving those child as right child
  // A is Node is same as {value: '', left: '', right: ''};
  // repeat while current node has value and children either left or right
  // left or right would be null if no value or children.

  // Level Order Traversal
  function inverseTreeNodesBFS(nodes) {
    const nextLevelNodes = [];

    if (nodes && nodes.value && (nodes.left || nodes.right)) {
        const { left, right } = nodes;

        // individual nodes
        const _tempLeft = left;
        const _tempRight = right;
       
        node.left = _tempRight;
        node.right = _tempLeft;
        
        nodes.left ? nextLevelNodes.push(nodes.left) : '';
        nodes.right ? nextLevelNodes.push(nodes.right) : '';

        inverseTreeNodesBFS(nextLevelNodes);
    } else if (Array.isArray(nodes) && nodes.length) {
      for(let i  = 0; i < nodes.length; i++) {
        const c_node = nodes[i];
        const _tempLeft = c_node.left;
        const _tempRight = c_node.right;
        
        c_node.right = _tempLeft;
        c_node.left = _tempRight;

        if (c_node.left) {
          nextLevelNodes.push(c_node.left);
        }
        if (c_node.right) {
          nextLevelNodes.push(c_node.right);
        }
      }
      inverseTreeNodesBFS(nextLevelNodes);
    }
  }

  inverseTreeNodesBFS(node);
  return node;
}



//let's create an example Binary Tree
// First let's create bunch of node and then set the relationship
const root = new BinaryNode(1);
const rootLeftChild = new BinaryNode(2);
const rootRightChild = new BinaryNode(3);
// some more nodes
const nodeFour = new BinaryNode(4);
const nodeFive = new BinaryNode(5);
const nodeSix = new BinaryNode(6);
const nodeSeven = new BinaryNode(7);
const nodeEight = new BinaryNode(8);
const nodeNine = new BinaryNode(9);

// start creating relationship
//          1 (root)
//         / \
//    (l) 2   3 (r)
//       /     \
//  (l) 4        5 (r)
//     / \       /
// (l)6   7(r)  8 (l)
//         \
//          9 (r)
root.left = rootLeftChild; // 2
root.right = rootRightChild; // 3
rootLeftChild.left = nodeFour; // 4
rootRightChild.right = nodeFive; // 5
nodeFour.left = nodeSix; // 6
nodeFour.right = nodeSeven; // 7
nodeFive.left = nodeEight; // 8
nodeSeven.right = nodeNine;

console.log(invert(root));
