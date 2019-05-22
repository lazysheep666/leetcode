/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

var stack
var BSTIterator = function(root) {
  stack = []
  while (root) {
    stack.push(root)
    root = root.left
  }
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let node = stack.pop()
  let pushNode = node.right
  while (pushNode) {
    stack.push(pushNode)
    pushNode = pushNode.left
  }
  return node.val
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return !!stack.length
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
