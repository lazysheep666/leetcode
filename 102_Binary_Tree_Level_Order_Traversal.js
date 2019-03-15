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
/**
 * BFS
 */
let levelOrder = function(root) {
  let res = []
  if (root === null) {
    return res
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    let row = []
    while (size--) {
      let temp = queue.shift()
      row.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
    if (row.length > 0) {
      res.push(row)
    }
  }
  return res
}

/**
 * DFS
 */

let levelOrder = function(root) {
  let res = []
  explore(root, 1, res)
  return res
}

let explore = function(root, depth, res) {
  if (root === null) {
    return
  }
  if (depth > res.length) {
    res.push([])
  }
  res[depth - 1].push(root.val)
  explore(root.left, depth + 1, res)
  explore(root.right, depth + 1, res)
}
