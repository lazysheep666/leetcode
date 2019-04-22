/**
 * 思路
 * 解决办法1：
 * 记录字符串s所有存在于wordDict中的子字符串sub的起始下标
 * 若果最终所记录的下标可以合并为 [0, s.length - 1]
 * 那么就可以将s拆分
 * 比如 "leetcode" ["leet", "code"]
 * 所记录的子串下标集合为
 * [[0, 3], [0, 7]]
 * 可以合并为[0, 8]
 * 满足
 * 解决办法2：
 *
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let wordBreak = function(s, wordDict) {
  let dicMap = new Map()
  let intervalMap = new Map()
  for (let i = 0; i < wordDict.length; i++) {
    dicMap.set(wordDict[i], true)
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let subString = s.substring(i, j + 1)
      if (dicMap.has(subString)) {
        if (intervalMap.has(i)) {
          intervalMap.get(i).push([i, j])
        } else {
          intervalMap.set(i, [[i, j]])
        }
      }
    }
  }
  if (!intervalMap.has(0)) {
    return false
  }
  let queue = []
  queue.push(0)
  while (queue.length !== 0) {
    let size = queue.length
    while (size) {
      let start = queue.shift()
      if (intervalMap.has(start)) {
        for (let interval of intervalMap.get(start)) {
          let end = interval[1]
          if (end === s.length - 1) {
            return true
          }
          if (intervalMap.has(end + 1) && queue.indexOf(end + 1) === -1) {
            queue.push(end + 1)
          }
        }
      }
      size--
    }
  }
  return false
}

let wordBreak = function(s, wordDict) {
  let dp = []
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === i) {
        if (wordDict.indexOf(s.substring(0, i + 1)) !== -1) {
          dp[i] = true
          break
        }
      } else {
        if (dp[j] === true && wordDict.indexOf(s.substring(j + 1, i + 1)) !== -1) {
          dp[i] = true
          break
        }
      }
      dp[i] = false
    }
  }
  return dp[s.length - 1]
}
