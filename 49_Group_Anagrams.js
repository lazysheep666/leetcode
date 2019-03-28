/**
 * 思路:
 * 解决办法：
 * 这里最主要的是如何判断两个字符串是同样的字母permuatation变换来的，有两个思路
 * 1： 将两个字符串sort，如果两个字符串sort后的结果一样那么两个字符串就是相同的字符串得来的不同的permutation
 * 2： 分别记录两个字符串所组成的字母的各自个数，如果一致那么两个字符串就是相同字符串得来的不同的permutation
 * 判断了两个字符串是同一个字符串变化来的之后，就需要将这样的字符串group
 * 这时最好的储存办法就是hashmap（映射）
 * 将相同字符串得来的不同的permutation储存到相同的映射中去
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    let temp = strs[i]
    temp = temp.split('').sort().join('')
    if (map.has(temp)) {
      let tempGroup = map.get(temp)
      tempGroup.push(strs[i])
      map.set(temp, tempGroup)
    } else {
      map.set(temp, [strs[i]])
    }
  }
  return [...map.values()]
}

let groupAnagrams = function(strs) {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
    let tempArray = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
      tempArray[strs[i][j].charCodeAt() - 'a'.charCodeAt()] += 1
    }
    let tempStr = tempArray.join('#')
    if (map.has(tempStr)) {
      let tempGroup = map.get(tempStr)
      tempGroup.push(strs[i])
      map.set(tempStr, tempGroup)
    } else {
      map.set(tempStr, [strs[i]])
    }
  }
  return [...map.values()]
}
