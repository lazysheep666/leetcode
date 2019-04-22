/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let zigzagLevelOrder = function(root) {
  let queue = []
  let res = []
  let isltr = true
  queue.push(root)
  while (queue.length !== 0 && root != null) {
    let levelBreadth = queue.length
    let levelNodes = []
    while (levelBreadth) {
      let node = queue.shift()
      if (isltr === false) {
        levelNodes.unshift(node.val)
      } else {
        levelNodes.push(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      levelBreadth--
    }
    isltr = !isltr
    res.push(levelNodes)
  }
  return res
}
