/**
 * 解决办法
 * 思路1：
 * 这个题的关键是如何判断一个元素应该从链表中被删除
 * 可以通过一个hashmap储存每个元素出现的次数
 * 然后再次遍历元素如果在hashmap中出现次数大于1的就删除
 * 思路2：
 * 如果一个元素的值等于它前面的元素的值或者等于它后面的元素的值
 * 那么这个元素就在这个链表中有重复的值，就应该被删除
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
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
  let map = new Map()
  let p = head
  while (p) {
    if (map.has(p.val)) {
      map.set(p.val, map.get(p.val) + 1)
    } else {
      map.set(p.val, 1)
    }
    p = p.next
  }
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy.next
  let real = dummy
  while (cur) {
    if (map.get(cur.val) === 1) {
      real.next = cur
      real = cur
    }
    cur = cur.next
  }
  real.next = null
  return dummy.next
}

let deleteDuplicates = function(head) {
  let dummy = new ListNode(NaN)
  dummy.next = head
  let prev = dummy
  let cur = dummy.next
  let real = dummy
  while (cur) {
    let nextVal = cur.next ? cur.next.val : NaN
    if (cur.val !== prev.val && cur.val !== nextVal) {
      real.next = cur
      real = cur
    }
    prev = cur
    cur = cur.next
  }
  real.next = null
  return dummy.next
}
