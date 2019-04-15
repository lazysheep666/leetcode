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

let deleteDuplicates = function(head) {
  let p = head
  while (p) {
    if (p.next && p.val === p.next.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}

let deleteDuplicates = function(head) {
  let real = head
  let cur = head ? head.next : null
  while (cur) {
    if (cur.val === real.val) {
      cur = cur.next
    } else {
      real.next = cur
      real = cur
      cur = cur.next
    }
    real.next = null
  }
  return head
}

deleteDuplicates()
