/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    
    const generate = (start, end) => {
        const result = [];
        
        if (start > end) return [null];
        
        for (let i = start; i <= end; i++) {
            const leftTrees = generate(start, i - 1);
            const rightTrees = generate(i + 1, end);
            
            for (let leftNode of leftTrees) {
                for (let rightNode of rightTrees) {
                    const root = new TreeNode(i);
                    root.left = leftNode;
                    root.right = rightNode;
                    
                    result.push(root);
                }
            }
        }
        
        return result;
    }
    
    return generate(1, n);
    };