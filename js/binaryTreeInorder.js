/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];

    function inored(root){
        if(!root){
            return
        }
        inored(root.left);
        res.push(root.val);
        inored(root.right);
    }
    inored(root);
    return res;
};
