/**
 * 思路：
 * 解决方法1:
 * 两次遍历
 * 解决方法2:
 * KMP：
 * 只移动pattern
 * 由于text在之前已经与parttern匹配了一部分字符串
 * 对于这部分字符串，parttern上已匹配的部分可以看做是前缀
 * 而text上已匹配的字符串可以看做是后缀
 * 于是这就成为了前缀跟后缀匹配的问题
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) {
        return i
      }
      if (i + j === haystack.length) {
        return -1
      }
      if (haystack[i + j] !== needle[j]) {
        break
      }
    }
  }
}

//
let kmp = function(haystack, needle) {
  let arr = maxStrArr(needle)
  let j = 0
  for (let i = 0; ; i++) {
    if (j === needle.length) {
      return i - j
    }
    if (i === haystack.length) {
      return -1
    }
    if (haystack[i] === needle[j]) {
      j++
    } else {
      if (j !== 0) {
        j = arr[j - 1]
        i--
      }
    }
  }
}

let maxStrArr = function(str) {
  let maxStrArr = []
  let j = 0
  let count = 0
  maxStrArr.push(count)
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[j]) {
      maxStrArr.push(++count)
      j++
    } else {
      let flag = true
      if (count > 0) {
        while (j !== 0) {
          j = maxStrArr[j - 1]
          if (str[j] === str[i]) {
            count = j + 1
            maxStrArr.push(count)
            flag = false
            j++
            break
          }
        }
        if (flag) {
          count = 0
          maxStrArr.push(count)
        }
      } else {
        count = 0
        maxStrArr.push(count)
      }
    }
  }
  return maxStrArr
}

console.log(maxStrArr('ababcaabc'))
