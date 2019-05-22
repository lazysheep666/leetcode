/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// dfs
let cloneGraph = function(node) {
  let map = new Map()
  return dfs(node, map)
}

let dfs = (node, map) => {
  if (node === null) {
    return null
  }

  if (!map.has(node)) {
    let cloneNode = new Node(node.val, [])
    map.set(node, cloneNode)
    for (let neighbor of node.neighbors) {
      map.get(node).neighbors.push(dfs(neighbor, map))
    }
  }

  return map.get(node)
}

// bfs
let cloneGraph = function(node) {
  if (node === null) {
    return null
  }

  let map = new Map()
  map.set(node, new Node(node.val, []))
  let queue = [node]

  while (queue.length > 0) {
    let node = queue.shift()

    for (let neighbor of node.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val, []))
        queue.push(neighbor)
      }
      map.get(node).neighbors.push(map.get(neighbor))
    }
  }
  return map.get(node)
}
