/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// backtracking
let min = Number.POSITIVE_INFINITY
let ladderLength = function(beginWord, endWord, wordList) {
  let visited = []
  helper(beginWord, endWord, 1, wordList, visited)
  return min === Number.POSITIVE_INFINITY ? 0 : min
}

let helper = function(curWord, endWord, passLen, wordList, visited) {
  if (curWord === endWord) {
    min = Math.min(min, passLen)
    return
  }
  for (let i = 0; i < curWord.length; i++) {
    let nexts = nextChoices(i, curWord, wordList, visited)
    for (let next of nexts) {
      visited.push(next)
      helper(next, endWord, passLen + 1, wordList, visited)
      visited.pop()
    }
  }
}

let nextChoices = function(index, beginWord, wordList, visited) {
  let nextWords = []
  for (let i = 0; i < wordList.length; i++) {
    if ((visited.indexOf(wordList[i]) === -1) && (wordList[i].substring(0, index) + wordList[i].substring(index + 1) === beginWord.substring(0, index) + beginWord.substring(index + 1)) && wordList[i][index] !== beginWord[index]) {
      nextWords.push(wordList[i])
    }
  }
  return nextWords
}

// dynamic programming
let ladderLength = function(beginWord, endWord, wordList) {
  let visited = []
  let map = new Map()
  let res = helper(beginWord, endWord, wordList, visited, map)
  return res || 0
}

let helper = function(curWord, endWord, wordList, visited, cache) {
  if (curWord === endWord) {
    return 1
  }
  if (cache.has(curWord)) {
    return cache.get(curWord)
  }
  let minLen = Number.POSITIVE_INFINITY
  for (let i = 0; i < curWord.length; i++) {
    let nexts = nextChoices(i, curWord, wordList, visited)
    for (let next of nexts) {
      visited.push(next)
      let len = helper(next, endWord, wordList, visited, cache)
      visited.pop()
      if (len === false) {
        continue
      } else {
        len = 1 + len
        minLen = Math.min(len, minLen)
      }
    }
  }
  if (minLen !== Number.POSITIVE_INFINITY) {
    cache.set(curWord, minLen)
    return minLen
  } else {
    cache.set(curWord, false)
    return false
  }
}

let nextChoices = function(index, beginWord, wordList, visited) {
  let nextWords = []
  for (let i = 0; i < wordList.length; i++) {
    if ((visited.indexOf(wordList[i]) === -1) && (wordList[i].substring(0, index) + wordList[i].substring(index + 1) === beginWord.substring(0, index) + beginWord.substring(index + 1)) && wordList[i][index] !== beginWord[index]) {
      nextWords.push(wordList[i])
    }
  }
  return nextWords
}

// graph, BFS
let ladderLength = function(beginWord, endWord, wordList) {
  let patterns = new Map()
  wordList.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.substring(0, i) + '*' + word.substring(i + 1)
      if (patterns.has(pattern)) {
        patterns.get(pattern).push(word)
      } else {
        patterns.set(pattern, [word])
      }
    }
  })

  let level = 1
  let curWord = beginWord
  let queue = [{curWord, level}]
  let visited = [curWord]

  while (queue.length !== 0) {
    let {level, curWord} = queue.shift()
    for (let i = 0; i < curWord.length; i++) {
      let pattern = curWord.substring(0, i) + '*' + curWord.substring(i + 1)
      for (let nextWord of (patterns.get(pattern) ? patterns.get(pattern) : [])) {
        if (nextWord === endWord) {
          return level + 1
        }
        if (visited.indexOf(nextWord) === -1) {
          queue.push({curWord: nextWord, level: level + 1})
          visited.push(nextWord)
        }
      }
    }
  }

  return 0
}
console.log(ladderLength('hit',
  'cog',
  ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
