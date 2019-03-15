/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
  if (root === null) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

let maxDepth = function(root) {
  let depth = 0
  if (root === null) {
    return depth
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    while (size-- > 0) {
      let temp = queue.shift()
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    depth++
  }
  return depth
}
