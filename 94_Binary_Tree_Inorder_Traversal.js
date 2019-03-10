/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function(root) {
  let stack = []
  let res = []
  while (stack.length !== 0 || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      let temp = stack.pop()
      res.push(temp.val)
      root = temp.right
    }
  }
  return res
}
inorderTraversal()
