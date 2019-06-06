const {BinarySearchTree} = require('./common/binary-search-tree');
// Taken from: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
const BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

const root = BST.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27
let arrayResults = [];
BST.inOrder(root, (node) => arrayResults.push(node.data));
console.log(arrayResults);

arrayResults = [];
BST.preOrder(root, (node) => arrayResults.push(node.data));
console.log(arrayResults);

arrayResults = [];
BST.postOrder(root, (node) => arrayResults.push(node.data));
console.log(arrayResults);

console.log('minNode:', BST.findMinNode(root).data);

const searchValue = 5;
console.log('Searching for node with value:', searchValue, BST.search(root, searchValue));
