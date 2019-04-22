/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
let generateTrees = function(n) {
  if (n === 0) {
    return []
  }
  let dp = new Map()
  return helper(1, n, dp)
}
let helper = function(start, end, dp) {
  let rootNodes = []
  if (start > end) {
    return [null]
  }
  if (dp.has(`${start}#${end}`)) {
    rootNodes = dp.get(`${start}#${end}`)
    return rootNodes
  }
  for (let i = start; i <= end; i++) {
    let lSubTrees = helper(start, i - 1, dp)
    let rSubTrees = helper(i + 1, end, dp)
    for (let lSubTree of lSubTrees) {
      for (let rSubTree of rSubTrees) {
        let root = new TreeNode(i)
        root.left = lSubTree
        root.right = rSubTree
        rootNodes.push(root)
      }
    }
  }
  dp.set(`${start}#${end}`, rootNodes)
  return rootNodes
}
