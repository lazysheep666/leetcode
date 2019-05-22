/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function(lists) {
  if (lists.length === 0) {
    return null
  }
  let cur = lists[0]
  for (let i = 1; i < lists.length; i++) {
    let mergeDummy = new ListNode()
    let p = mergeDummy
    let next = lists[i]
    while (cur && next) {
      if (cur.val > next.val) {
        p.next = next
        next = next.next
      } else {
        p.next = cur
        cur = cur.next
      }
      p = p.next
    }
    if (cur) {
      p.next = cur
    }
    if (next) {
      p.next = next
    }
    cur = mergeDummy.next
  }
  return cur
}
