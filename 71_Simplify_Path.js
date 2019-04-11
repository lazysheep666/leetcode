/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function(path) {
  let stack = []
  let item = ''
  for (let i = 0; i < path.length; i++) {
    if (path[i] === '/') {
      if (item === '..') {
        stack.pop()
      } else if (item !== '' && item !== '.') {
        stack.push(item)
      }
      item = ''
    } else {
      item = item + path[i]
    }
  }
  if (item === '..') {
    stack.pop()
  } else if (item !== '' && item !== '.') {
    stack.push(item)
  }
  return '/' + stack.join('/')
}
