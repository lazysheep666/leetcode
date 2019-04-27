/**
 * 思路
 * 跟第108题类似
 * 只是这里使用的是数组而不是栈
 * 这里的难点是如何划分左子树区域跟右子树区域，以为无法向数组一样传递Index划分区域
 * 所以这里采用的是将前半部分的末尾节点的next设置为NUll就可以了
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let sortedListToBST = function(head) {
  return helper(head)
}

let helper = function(node) {
  if (node === null) {
    return null
  }
  if (node.next === null) {
    return new TreeNode(node.val)
  }
  let midNode = findMidNode(node)
  let root = new TreeNode(midNode.val)
  root.right = helper(midNode.next)
  root.left = helper(node)
  return root
}

let findMidNode = function(head) {
  let slow = head
  let fast = head
  let prev = slow
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null
  return slow
}
