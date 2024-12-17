import BinaryTreeNode from './BinaryTreeNode';
//let's create an example Binary Tree
// First let's create bunch of node and then set the relationship
const root = new BinaryTreeNode(1);
const rootLeftChild = new BinaryTreeNode(2);
const rootRightChild = new BinaryTreeNode(3);
// some more nodes
const nodeFour = new BinaryTreeNode(4);
const nodeFive = new BinaryTreeNode(5);
const nodeSix = new BinaryTreeNode(6);
const nodeSeven = new BinaryTreeNode(7);
const nodeEight = new BinaryTreeNode(8);
const nodeNine = new BinaryTreeNode(9);

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
