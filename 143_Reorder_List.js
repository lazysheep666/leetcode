/**
 * 思路：
 * 解决办法1：
 * 这是最直观的解法，依次将链表中最后一个节点插入到待插入的元素之前
 * 但是由于链表没有前置节点，所以每次插入都需要查询新的最后一个节点
 * 时间复杂度为O(n^2)
 * 解决办法2:
 * 也有办法将解决办法1进行改进，利用一个stack，将节点依次存入stack中
 * 每次查询最后一个节点只需要从stack中pop出即可
 * 这样时间复杂度为O(n)空间复杂度也为O(n)
 * 解决办法3：
 * 也可以将解决办法2进行改进
 * 这里需要用到栈是因为我们无法倒着遍历链表
 * 要解决这个问题其实就很简单了，把链表反转过来就可以了
 * 将后半部链表先反转，然后再进行插入就可以了
 * 时间复杂度O(n)空间复杂度O(1)
 */
let reorderList = function(head) {
  if (head === null) {
    return
  }
  let cur = head
  let {tail, prev} = getTail(head)

  while (cur.next && cur.next !== tail) {
    tail.next = cur.next
    cur.next = tail
    cur = cur.next.next
    prev.next = null
    tail = getTail(head).tail
    prev = getTail(head).prev
  }
}

let getTail = function(head) {
  let p = head
  let prev = p
  while (p.next) {
    prev = p
    p = p.next
  }
  return {
    prev,
    tail: p
  }
}

let reorderList = function(head) {
  if (head === null) {
    return
  }
  let cur = head
  let stack = []
  while (head) {
    stack.push(head)
    head = head.next
  }
  let tail = stack.pop()
  let prev = stack[stack.length - 1]
  while (cur.next && cur.next !== tail) {
    tail.next = cur.next
    cur.next = tail
    cur = cur.next.next
    prev.next = null
    tail = stack.pop()
    prev = stack[stack.length - 1]
  }
}

let reorderList = function(head) {
  if (head === null || head.next === null) { return }

  let slow = head
  let fast = head
  let l1 = head
  let prev
  while (fast && fast.next) {
    prev = slow
    slow = slow.next
    fast = fast.next.next
  }
  prev.next = null
  let l2 = reverse(slow)
  merge(l1, l2)
}

let reverse = function(head) {
  if (head === null) { return }
  let prev = null
  let cur = head
  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

let merge = function(l1, l2) {
  let p = l1
  let q = l2
  let prev
  while (p) {
    let templ1 = p.next
    let templ2 = q.next
    p.next = q
    q.next = templ1
    prev = p.next
    q = templ2
    p = templ1
  }
  if (q) {
    prev.next = q
  }
}
