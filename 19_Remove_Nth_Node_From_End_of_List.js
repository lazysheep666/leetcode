/**
 * 思路
 * 解决办法1:
 * 第一次遍历链表，记录链表的长度L
 * 第二次遍历链表到L - n，移除 L - n + 1 的节点
 * 解决办法2:
 * 使用两个指针，快慢指针之间相差的距离为n
 * 当快指针到达终点时，慢指针所指位置为 L - n
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
let removeNthFromEnd = function(head, n) {
  let l = 0
  let dummy = new ListNode(-1)
  dummy.next = head
  while (head) {
    head = head.next
    l++
  }
  let p = 0
  let temp = dummy
  while (p < l - n) {
    temp = temp.next
    p++
  }
  temp.next = temp.next.next
  return dummy.next
}

let removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let slow = dummy
  let fast = dummy
  while (n > 0) {
    fast = fast.next
    n--
  }
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}
