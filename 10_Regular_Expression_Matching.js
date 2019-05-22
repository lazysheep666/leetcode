/**
 * 思路：
 * dynamic programming
 * 如果字符串中的最后一位已经跟parttern的最后一位匹配
 * 那么如果剩下的字符串跟剩下的parttern匹配的，则整个字符串与整个parttern匹配
 * 状态方程为：
 * f(n, m) = match(s[n], p[m]) && f(n remain, m remian)
 * 这里需要考虑到p[m] === '*' 的情况
 * 这种情况下p[m]与p[m - 1]有两种状态，舍去不匹配，不舍弃可以匹配多个（跟完全背包有点类似）
 * 如果舍弃 那么 f(n, m) = f(n, m - 2)
 * 如果不舍弃 那么 f(n, m) = match (s[n], p[m - 2]) && f(n - 1, m) (因为还可以匹配多次而不是只匹配一次所以是m而不是 m - 2)
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
let isMatch = function(s, p) {
  if (p === '') {
    return s === ''
  }
  let firstMatch = s.length > 0 && ((s[0] === p[0]) || (p[0] === '.'))
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p))
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1))
  }
}

let isMatch = function(s, p) {
  let dp = []
  for (let i = 0; i < s.length; i++) {
    dp.push([])
  }
  return helper(s, p, s.length - 1, p.length - 1, dp)
}

// dynamic programming top-down
let helper = (s, p, sEnd, pEnd, dp) => {
  if (pEnd === -1 && sEnd === -1) {
    return true
  }
  if (dp[sEnd] && dp[sEnd][pEnd]) {
    return dp[sEnd][pEnd]
  }
  let match
  if (p[pEnd] !== '*') {
    let charMatch = s[sEnd] === p[pEnd] || (sEnd >= 0 && p[pEnd] === '.')
    match = charMatch && helper(s, p, sEnd - 1, pEnd - 1, dp)
  } else {
    let charMatch = s[sEnd] === p[pEnd - 1] || (sEnd >= 0 && p[pEnd - 1] === '.')
    match = helper(s, p, sEnd, pEnd - 2, dp) || (charMatch && helper(s, p, sEnd - 1, pEnd, dp))
  }
  if (dp[sEnd]) {
    dp[sEnd][pEnd] = match
  }
  return match
}

// bottom-up
let isMatch = function(s, p) {
  let dp = []
  for (let i = 0; i <= s.length; i++) {
    dp.push([false])
  }
  dp[0][0] = true

  for (let i = 0; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') {
        let charMatch = s[i - 1] === p[j - 2] || (i - 1 >= 0 && p[j - 2] === '.')
        dp[i][j] = dp[i][j - 2] || (charMatch && dp[i - 1][j])
      } else {
        let charMatch = s[i - 1] === p[j - 1] || (i - 1 >= 0 && p[j - 1] === '.')
        dp[i][j] = charMatch && dp[i - 1][j - 1]
      }
    }
  }

  return dp[s.length][p.length]
}
