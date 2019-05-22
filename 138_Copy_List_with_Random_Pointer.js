
// Definition for a Node.
function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}
/**
 * @param {Node} head
 * @return {Node}
 */
let copyRandomList = function(head) {
  let map = new Map()
  let dummyHead = new Node(1, null, null)
  let p = dummyHead
  let prev = null
  while (head) {
    let tempNode = null
    let tempRandom = null
    if (!map.has(head)) {
      map.set(head, new Node(head.val, null, null))
    }
    tempNode = map.get(head)

    if (!map.has(head.random)) {
      if (head.random === null) {
        map.set(head.random, null)
      } else {
        map.set(head.random, new Node(head.random.val, null, null))
      }
    }
    tempRandom = map.get(head.random)

    prev = head
    head = head.next
    p.next = tempNode
    p.random = tempRandom
    p = p.next
  }

  p.random = map.get(prev)

  return dummyHead.next
}
