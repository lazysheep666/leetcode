/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

let reverseListRecursive = function(head) {
  let res
  let reverseListRecursive = function(head) {
    if (head === null || head.next === null) {
      res = head
      return head
    }
    reverseListRecursive(head.next).next = head
    head.next = null
    return head
  }
  reverseListRecursive(head)
  return res
}

reverseList()
reverseListRecursive()
