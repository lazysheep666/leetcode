/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
let hasPathSum = function(root, sum) {
  if (root === null) {
    return false
  }
  this.hasPath = false
  helper(root, root.val, sum)
  return this.hasPath
}

let helper = function(root, sum, target) {
  if (root.left === null && root.right === null && sum === target) {
    this.hasPath = true
  }
  if (root.left) {
    helper(root.left, sum + root.left.val, target)
  }
  if (root.right) {
    helper(root.right, sum + root.right.val, target)
  }
}

let hasPathSum = function(root, sum) {
  if (root === null) {
    return false
  }
  let hasPath = false
  let queue = []
  queue.push({node: root, sum: root.val})
  while (queue.length > 0) {
    let temp = queue.shift()
    if (temp.node.right === null && temp.node.left === null && temp.sum === sum) {
      return true
    }
    if (temp.node.right !== null) {
      queue.push({node: temp.node.right, sum: temp.sum + temp.node.right.val})
    }
    if (temp.node.left !== null) {
      queue.push({node: temp.node.left, sum: temp.sum + temp.node.left.val})
    }
  }
  return hasPath
}
