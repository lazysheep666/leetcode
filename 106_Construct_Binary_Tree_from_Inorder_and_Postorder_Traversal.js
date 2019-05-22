/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let buildTree = function(inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) {
    return null
  }
  return helper(inorder, postorder, 0, postorder.length - 1, 0, postorder.length - 1)
}

let helper = (inorder, postorder, inStart, inEnd, postStart, postEnd) => {
  if (inStart > inEnd || postStart > postEnd) {
    return null
  }
  let root = new TreeNode(postorder[postEnd])
  let rootIndex = inorder.indexOf(postorder[postEnd])
  let leftNodesNum = rootIndex - inStart
  root.left = helper(inorder, postorder, inStart, rootIndex - 1, postStart, postStart + leftNodesNum - 1)
  root.right = helper(inorder, postorder, rootIndex + 1, inEnd, postStart + leftNodesNum, postEnd - 1)
  return root
}
