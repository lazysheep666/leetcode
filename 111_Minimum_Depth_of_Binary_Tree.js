/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {number}
 */

// postorder traverse
let minDepth = function(root) {
  if (root === null) {
    return 0
  }
  let depth = 0
  let mindepth = Number.POSITIVE_INFINITY
  let last = null
  let stack = []
  while (root !== null || stack.length > 0) {
    while (root) {
      stack.push(root)
      depth++
      root = root.left
    }
    let temp = stack[stack.length - 1]
    if (temp.left === null && temp.right === null) {
      mindepth = Math.min(depth, mindepth)
    }
    if (temp.right && temp.right !== last) {
      temp = temp.right
    } else {
      last = stack.pop()
      depth--
    }
  }
  return mindepth
}

// BFS
let minDepth = function(root) {
  if (root === null) {
    return 0
  }
  let queue = []
  queue.push(root)
  let depth = 1
  while (queue.length > 0) {
    let size = queue.length
    while (size > 0) {
      let temp = queue.shift()
      if (temp.left === null && temp.right === null) {
        return depth
      }
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
      size--
    }
    depth++
  }
}

// backtracking
let minDepth = function(root) {
  if (root === null) {
    return 0
  }
  this.mindepth = Number.POSITIVE_INFINITY
  helper(root, 1)
  return this.mindepth
}

let helper = function(root, depth) {
  if (root.left === null && root.right === null) {
    this.mindepth = Math.min(this.mindepth, depth)
  }
  if (root.left) {
    helper(root.left, depth + 1)
  }
  if (root.right) {
    helper(root.right, depth + 1)
  }
}

let root = new TreeNode(3)
root.left = new TreeNode(9)
let r = new TreeNode(20)
r.left = new TreeNode(15)
r.right = new TreeNode(7)
root.right = r
minDepth(root)
