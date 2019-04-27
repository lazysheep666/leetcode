/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
let connect = function(root) {
  if (root === null) {
    return null
  }
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let nodesNum = queue.length
    let prevNode = null
    while (nodesNum > 0) {
      let node = queue.shift()
      if (prevNode) {
        prevNode.next = node
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      prevNode = node
      nodesNum--
    }
  }
  return root
}

var connect = function(root) {
  if (!root || !root.left) { // sanity check
    return
  }

  root.left.next = root.right // connect left -> right
  root.right.next = root.next ? root.next.left : null // connect right -> next's left

  connect(root.left)
  connect(root.right)
}

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
let connect = function(root) {
  if (root === null) {
    return
  }
  let level = root
  while (level.left) {
    let nextLevel = level.left
    while (level) {
      level.left.next = level.right
      if (level.next) {
        level.right.next = level.next.left
      }
      level = level.next
    }
    level = nextLevel
  }
  return root
}
