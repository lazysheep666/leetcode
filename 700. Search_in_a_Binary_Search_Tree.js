/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
let searchBST = function(root, val) {
  while (root) {
    if (val === root.val) {
      return root
    } else if (val < root.val) {
      root = root.left
    } else {
      root = root.right
    }
  }
  return null
}
