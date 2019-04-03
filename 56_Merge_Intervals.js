/**
 * 思路：
 * 将区间排序后线性合并
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort((intervalA, intervalB) => {
    if (intervalA.start === intervalB.start) {
      return intervalB.end - intervalA.end
    } else {
      return intervalA.start - intervalB.start
    }
  })
  let merged = []
  intervals.forEach((interval) => {
    if (merged.length === 0 || merged[merged.length - 1].end < interval.start) {
      merged.push(interval)
    } else {
      merged[merged.length - 1].end = Math.max(merged[merged.length - 1].end, interval.end)
    }
  })
  return merged
}
