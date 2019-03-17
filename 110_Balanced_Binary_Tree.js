
// function TreeNode(val) {
//   this.val = val
//   this.left = this.right = null
// }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function(root) {
  this.balanced = true
  depth(root)
  return this.balanced
}

let depth = function(root) {
  if (root === null) {
    return 0
  }
  let lDepth = depth(root.left)
  let rDepth = depth(root.right)
  if (Math.abs(lDepth - rDepth) > 1) {
    this.balanced = false
  }
  return 1 + Math.max(lDepth, rDepth)
}
