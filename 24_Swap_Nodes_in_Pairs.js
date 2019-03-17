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
let swapPairs = function(head) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  let cur = dummy.next
  while (cur !== null && cur.next !== null) {
    let temp = cur.next
    prev.next = temp
    cur.next = temp.next
    temp.next = cur
    prev = prev.next.next
    cur = cur.next
  }
  return dummy.next
}

let swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  let temp = head.next
  head.next = swapPairs(head.next.next)
  temp.next = head
  return temp
}
