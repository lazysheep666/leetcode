/**
 * 思路:
 * backtracking, 注意这里的goal是从root到leave节点的和要等于target
 * 一定要到叶子节点再判断和
 */
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
 * @return {number[][]}
 */
let pathSum = function(root, sum) {
  let sums = []
  let nodes = []
  helper(root, sum, 0, nodes, sums)
  return sums
}

let helper = function(root, target, sum, nodes, sums) {
  if (root === null) {
    return
  }
  sum += root.val
  nodes.push(root.val)
  if (sum === target && root.left === null && root.right === null) {
    sums.push(nodes.concat())
  }
  helper(root.left, target, sum, nodes, sums)
  helper(root.right, target, sum, nodes, sums)
  nodes.pop()
}
