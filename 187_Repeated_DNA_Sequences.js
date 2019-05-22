/**
 * @param {string} s
 * @return {string[]}
 */
let findRepeatedDnaSequences = function(s) {
  let map = new Map()
  let res = []
  for (let i = 0; i < s.length - 9; i++) {
    let sub = s.substring(i, i + 10)
    if (map.has(sub)) {
      map.set(sub, map.get(sub) + 1)
    } else {
      map.set(sub, 1)
    }
  }

  for (let [key, value] of map.entries()) {
    if (value > 1) {
      res.push(key)
    }
  }

  return res
}

/**
 * @param {string} s
 * @return {string[]}
 */
let findRepeatedDnaSequences = function(s) {
  let subs = new Set()
  let rep = new Set()
  for (let i = 0; i < s.length - 9; i++) {
    let sub = s.substring(i, i + 10)
    if (subs.has(sub)) {
      rep.add(sub)
    } else {
      subs.add(sub)
    }
  }

  return [...rep]
}
