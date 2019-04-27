// function TreeNode(val) {
//   this.val = val
//   this.left = this.right = null
// }
/**
 * 思路
 * 解题关键是，每一个节点的右节点都是遍历到该节点后的先序遍历的下一个节点
 * 解决办法1：
 * 利用stack 进行先序遍历，上一节点的右节点为当前节点，左节点为空
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function(root) {
  if (root === null) {
    return
  }
  let stack = []
  let prev = null
  stack.push(root)
  while (stack.length !== 0) {
    let cur = stack.pop()
    if (prev) {
      prev.right = cur
      prev.left = null
    }
    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
    prev = cur
  }
}
