/**
 * 思路
 * 解决办法1：
 * brute force 算出所有的值
 * 解决办法2:
 * 先从两边开始，将小的一边向前（后）移动，依次算出面积（这里只有低边跟宽度限制面积，所以选择更改低边，缩短宽度的方式）
 */
/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function(height) {
  let i = 0
  let j = height.length - 1
  let maxArea = Math.min(height[i], height[j]) * (j - i)
  while (i < j - 1) {
    if (height[j] >= height[i]) {
      i++
    } else {
      j--
    }
    maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j - i))
  }
  return maxArea
}
maxArea()
