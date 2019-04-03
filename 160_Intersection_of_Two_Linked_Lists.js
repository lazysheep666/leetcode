/**
 * 思路:
 * 这个问题可以简化为找到一个链表中最前的一个node，这个node存在于另个一个链表中。
 * 解决办法1：
 * brute force, 遍历其中一个链表依次寻找这个链表中的点是否存在于另一个链表中。
 * 其中查找可以将另一个链表存在HashTable中
 * 解决办法2：
 * 求出两个链表的长度，将长的链表向前移动使得两个链表剩下的长度一样
 * 然后依次比较头是否一样，相等的点就是intersection
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
let getIntersectionNode = function(headA, headB) {
  let p = headA
  let q = headB
  let lengthA = 0
  let lengthB = 0
  while (p) {
    lengthA++
    p = p.next
  }
  while (q) {
    lengthB++
    q = q.next
  }
  let diff = Math.abs(lengthA - lengthB)
  while (diff > 0) {
    if (lengthA > lengthB) {
      headA = headA.next
    } else {
      headB = headB.next
    }
    diff--
  }
  let intersectNode = null
  while (headA && headB) {
    if (headA === headB) {
      intersectNode = headA
      break
    } else {
      headA = headA.next
      headB = headB.next
    }
  }
  return intersectNode
}
