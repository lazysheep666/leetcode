/**
 * 思路：
 * 解决办法1：
 * 用一个hashmap储存已经走过的node，如果node.next在hashmap中则为cycle
 * 解决办法2:
 * 双指针，一个快指针，一个慢指针，如果快指针能够追到慢指针，而不是直接指向Null, 那么则为cycle
 * 两种办法时间复杂度都为O(n)
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
 * @return {boolean}
 */
let hasCycle = function(head) {
  let slow = head
  let fast = head
  while (fast !== null) {
    fast = fast.next
    if (fast === null) {
      return false
    }
    fast = fast.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
