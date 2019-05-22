/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumNumbers = function(root) {
  if (root === null) {
    return 0
  }
  let res = {
    sum: 0
  }
  let numbers = [root.val]
  helper(root, numbers, res)
  return res.sum
}

let helper = (node, numbers, res) => {
  if (node.left === null && node.right === null) {
    res.sum = res.sum + Number.parseInt(numbers.join(''))
    return
  }
  if (node.left) {
    numbers.push(node.left.val)
    helper(node.left, numbers, res)
    numbers.pop(node.left.val)
  }
  if (node.right) {
    numbers.push(node.right.val)
    helper(node.right, numbers, res)
    numbers.pop(node.right.val)
  }
}
