/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let ips = []
  helper(0, 0, s, '', ips)
  return ips
}

let helper = function(start, step, s, ip, ips) {
  if (step > 4) {
    return
  }
  if (step === 4 && start === s.length) {
    ips.push(ip)
  }
  for (let i = 1; i < 4; i++) {
    let ipItem = s.substring(start, start + i)
    if (Number.parseInt(ipItem) > 255 || (ipItem.length > 1 && ipItem[0] === '0')) {
      return
    }
    helper(start + i, step + 1, s, ip + ipItem + (step === 3 ? '' : '.'), ips)
  }
}
