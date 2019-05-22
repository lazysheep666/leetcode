/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// iteration with stack
let upsideDownBinaryTree = function(root) {
  let stack = []
  while (root && root.left) {
    stack.push(root)
    root = root.left
  }

  let dummy = new TreeNode(-1)
  dummy.left = root
  while (stack.length > 0) {
    let temp = stack.pop()
    root.right = temp
    root.left = temp.right
    temp.left = null
    temp.right = null
    root = root.right
  }

  return dummy.left
}
// recursive
let upsideDownBinaryTree = function(root) {
  if (root === null || root.left === null) {
    return root
  }

  let curLeft = root.left
  let curRight = root.right
  let newRoot = upsideDownBinaryTree(root.left)
  curLeft.left = curRight
  curLeft.right = root
  root.left = null
  root.right = null

  return newRoot
}
