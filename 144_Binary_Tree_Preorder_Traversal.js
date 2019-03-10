/**
 * 思路
 * 解决办法1:
 * 每次压栈直到这个子树的最左的叶子节点，栈中保留根节点以便后续访问右子树
 * 解决办法2:
 * 先输出根节点，再右子树入栈，然后再左子树入栈
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
 * @return {number[]}
 */
let preorderTraversal1 = function(root) {
  let stack = []
  let res = []
  while (stack.length !== 0 || root) {
    if (root) {
      stack.push(root)
      res.push(root.val)
      root = root.left
    } else {
      let temp = stack.pop()
      root = temp.right
    }
  }
  return res
}

let preorderTraversal2 = function(root) {
  if (root === null) {
    return []
  }
  let stack = []
  let res = []
  stack.push(root)
  while (stack.length !== 0) {
    let temp = stack.pop()
    res.push(temp.val)
    if (temp.right) {
      stack.push(temp.right)
    }
    if (temp.left) {
      stack.push(temp.left)
    }
  }
  return res
}
preorderTraversal1()
preorderTraversal2()
