/**
 * 思路：
 * 归并排序
 * 主要讲一下非递归的思路
 * 通过依次相邻的长度为1的sub两两merge
 * 这样得到的结果是每个长度为2的sub都是排好序的
 * 再依次将相邻的长度为2的sub两两merge
 * 这样得到的结果是每个长度为4的sub都是排好序的
 * 直到将相邻长度为 n/2 的sub两两merge
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
// recursive
let sortList = function(head) {
  if (head === null || head.next === null) {
    return head
  }

  let slow = head
  let fast = head
  let prev = head

  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null

  // sort
  let l1 = sortList(slow)
  let l2 = sortList(head)

  // merge
  return merge(l1, l2)
}

let merge = (l1, l2) => {
  let dummyHead = new ListNode(-1)
  let p = dummyHead
  while (l1 && l2) {
    if (l1.val > l2.val) {
      p.next = l2
      l2 = l2.next
    } else {
      p.next = l1
      l1 = l1.next
    }
    p = p.next
  }
  if (l1) {
    p.next = l1
  } else if (l2) {
    p.next = l2
  }
  return dummyHead.next
}

// bottom-up
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
let sortList = function(head) {
  if (head === null || head.next === null) {
    return head
  }

  let len = 0
  let cur = head
  while (cur) {
    len++
    cur = cur.next
  }

  let dummyHead = new ListNode(-1)
  dummyHead.next = head
  let left, right, tail

  for (let i = 1; i < len; i = i * 2) {
    cur = dummyHead.next
    tail = dummyHead
    while (cur) {
      left = cur
      right = split(left, i)
      cur = split(right, i)
      tail = merge(left, right, tail)
    }
  }
  return dummyHead.next
}

let split = (head, n) => {
  for (let i = 1; head && i < n; i++) {
    head = head.next
  }
  if (head === null) { return null }
  let second = head.next
  head.next = null
  return second
}

let merge = (l1, l2, head) => {
  let cur = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      cur.next = l2
      cur = l2
      l2 = l2.next
    } else {
      cur.next = l1
      cur = l1
      l1 = l1.next
    }
  }
  cur.next = (l1 || l2)
  while (cur.next) { cur = cur.next }
  return cur
}
