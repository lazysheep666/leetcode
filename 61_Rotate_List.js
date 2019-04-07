/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function(head, k) {
  if (head === null || k === 0) {
    return head
  }
  let l = 1
  let p = head
  let q = head
  let prev = q
  while (p.next) {
    p = p.next
    l++
  }
  p.next = head
  k = l - k % l
  while (k) {
    prev = q
    q = q.next
    k--
  }
  prev.next = null
  return q
}
