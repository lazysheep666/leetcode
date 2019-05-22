/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isOneEditDistance = function(s, t) {
  let ns = s.length
  let nt = t.length

  if (ns > nt) {
    return isOneEditDistance(t, s)
  }

  if (nt - ns > 1) {
    return false
  }

  for (let i = 0; i < ns; i++) {
    if (s[i] !== t[i]) {
      if (ns === nt) {
        return s.substring(i + 1) === t.substring(i + 1)
      } else {
        return s.substring(i) === t.substring(i + 1)
      }
    }
  }

  return ns + 1 === nt
}
