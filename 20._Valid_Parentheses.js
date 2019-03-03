/**
 * 思路：
 * 解决方法1：构建一个stack, 每次遇到open就push到stack, 如果遇到了close就进行匹配，如果跟栈顶的open匹配成功则栈顶出栈，
 * 否则匹配失败
 */
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else if (s[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        return false
      }
    } else if (s[i] === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop()
      } else {
        return false
      }
    } else if (s[i] === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  if (stack.length === 0) {
    return true
  }
  return false
}

isValid()
