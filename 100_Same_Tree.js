/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

isSameTree()

let BFS = function(root) {
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let temp = queue.shift()
    console.log(temp.val)
    queue.push(temp.left)
    queue.push(temp.right)
  }
}
