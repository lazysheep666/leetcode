/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function(gas, cost) {
  for (let i = 0; i < gas.length; i++) {
    let sum = 0
    for (let j = i; j < gas.length + i; j++) {
      sum = sum + (gas[j % gas.length] - cost[j % gas.length])
      if (sum < 0) {
        break
      }
    }
    if (sum > 0) {
      return i
    }
  }
  return -1
}

let canCompleteCircuit = function(gas, cost) {
  let sum = 0
  let res = 0
  let culSum = 0
  for (let i = 0; i < gas.length; i++) {
    sum = sum + (gas[i] - cost[i])
    culSum = culSum + (gas[i] - cost[i])
    if (culSum < 0) {
      res = i + 1
      culSum = 0
    }
  }
  return sum >= 0 ? res : -1
}
