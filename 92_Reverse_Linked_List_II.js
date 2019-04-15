/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
let reverseBetween = function(head, m, n) {
  let dummyNode = new ListNode()
  dummyNode.next = head
  if (head === null) {
    return null
  }
  let cur = head
  let prev = dummyNode
  for (let i = 1; i < m; i++) {
    prev = cur
    cur = cur.next
  }
  let con = prev
  let tail = cur
  for (let i = 0; i <= n - m; i++) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  con.next = prev
  tail.next = cur
  return dummyNode.next
}
