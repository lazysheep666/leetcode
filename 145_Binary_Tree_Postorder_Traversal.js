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
var postorderTraversal = function(root) {
  let stack = []
  let res = []
  let last = null
  while (stack.length !== 0 || root) {
    if (root) {
      stack.push(root)
      root = root.left
    } else {
      let temp = stack[stack.length - 1]
      if (temp.right !== null && temp.right !== last) {
        root = temp.right
      } else {
        stack.pop()
        res.push(temp.val)
        last = temp
      }
    }
  }
  return res
}
