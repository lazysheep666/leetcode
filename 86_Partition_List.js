/**
 * 思路:
 * 解决办法：
 * 将小于目标的node与大于等于目标的节点分别存在两个List中
 * 最后将这两个List拼接起来
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let partition = function(head, x) {
  let small = new ListNode(-1)
  let big = new ListNode(-1)
  let p = small
  let q = big
  while (head) {
    if (head.val < x) {
      p.next = head
      p = p.next
    } else {
      q.next = head
      q = q.next
    }
    head = head.next
  }
  q.next = null
  p.next = big.next
  return small.next
}
