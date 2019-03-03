/**
 * 思路：
 * 遍历两个链表逐次相加
 * 就像手写加法一样
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(-1)
  let cur = dummyHead
  let q = 0
  while (l1 !== null || l2 !== null) {
    let tempVal = l1 ? l1.val : 0 + l2 ? l2.val : 0 + q
    let p = Math.floor((tempVal) / 10)
    q = tempVal % 10
    cur.next = new ListNode(p)
    cur = cur.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }
  if (q > 0) {
    cur.next = new ListNode(q)
  }
  return dummyHead.next
}
addTwoNumbers()
