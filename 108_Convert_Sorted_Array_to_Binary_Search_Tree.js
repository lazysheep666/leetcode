/**
 * 思路
 * 解决办法1：
 * BTS的子树也是BTS，我们只需要找到数组的中点为root, root左边部分为左子树，右边部分为右子树即可
 * 然后再递归，对于左子树，我们找到左半部分的中点为root.....
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function(nums) {
  return helper(0, nums.length - 1, nums)
}

let helper = function(start, end, nums) {
  if (start > end) {
    return null
  }
  let mid = Math.floor((start + end) / 2)
  let node = new TreeNode(nums[mid])
  node.left = helper(start, mid - 1, nums)
  node.right = helper(mid + 1, end, nums)
  return node
}
