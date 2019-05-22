/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

// bfs
let connect = function(root) {
  if (root === null) {
    return null
  }

  let queue = [root]
  let prevNode = null
  while (queue.length > 0) {
    let sameLevelNum = queue.length
    while (sameLevelNum) {
      let node = queue.shift()
      if (prevNode) {
        prevNode.next = node
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      prevNode = node
      sameLevelNum--
    }
    prevNode = null
  }
  return root
}

let connect = function(root) {
  let level = root
  while (level) {
    let nextLevel = null
    let prevHead = null
    let flag = true
    while (level) {
      if (level.left) {
        if (prevHead) {
          prevHead.next = level.left
        }
        prevHead = level.left
        if (flag) {
          nextLevel = level.left
          flag = false
        }
      }
      if (level.right) {
        if (prevHead) {
          prevHead.next = level.right
        }
        prevHead = level.right
        if (flag) {
          nextLevel = level.right
          flag = false
        }
      }
      level = level.next
    }
    level = nextLevel
  }
  return root
}
