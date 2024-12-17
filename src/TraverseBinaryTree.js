function traverseRecursivelyTree(treeNode) {
    if (treeNode) {
        const data = treeNode.data;

        if (treeNode.left) {
            traverseRecursivelyTree(treeNode.left)
        }
        if (treeNode.right) {
            traverseRecursivelyTree(treeNode.left)
        }
    }
}
function traverseTreeNodes(nodes) {
    const nextLevelNodes = [];
    
    if (nodes && nodes.data && (nodes.left || nodes.right)) {
        console.log(nodes.data);
        // individual nodes
        nodes.left ? nextLevelNodes.push(nodes.left) : '';
        nodes.right ? nextLevelNodes.push(nodes.right) : '';
        
        traverseTreeNodes(nextLevelNodes);
    } else if (Array.isArray(nodes) && !nodes.length) {
        for(let i  = 0; i < nodes.length; i++) {
            const c_node = nodes[i];

            console.log(c_node.data);

            if (c_node.left) {
                nextLevelNodes.push(c_node.left);
            }
            if (c_node.right) {
                nextLevelNodes.push(c_node.right);
            }
        }
        
        traverseTreeNodes(nextLevelNodes);
    }
}