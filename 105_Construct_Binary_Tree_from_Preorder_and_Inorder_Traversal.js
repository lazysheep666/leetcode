/**
 * 思路
 * 先序遍历的第一个节点一定是一个根节点
 * 于是通过这个根节点就可以把中序遍历分成两半
 * 第一半为左子树的节点，第二半为右子树的节点
 * 把中序遍历的两半节点依次放入前序遍历中
 * 那么前序遍历也可以被拆分成两个subarray
 * 分别把两个subarray进行同样的操作
 * 如此递归下去就可以构造一个树了
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function(preorder, inorder) {
  return helper(0, preorder.length - 1, 0, preorder.length - 1, preorder, inorder)
}

let helper = function(preStart, preEnd, inStart, inEnd, preorder, inorder) {
  if (preStart > preEnd) {
    return null
  }
  let root = new TreeNode(preorder[preStart])
  let mid = inorder.indexOf(preorder[preStart])
  let leftNodesNum = mid - inStart
  root.left = helper(preStart + 1, preStart + leftNodesNum, inStart, mid - 1, preorder, inorder)
  root.right = helper(preStart + leftNodesNum + 1, preEnd, mid + 1, inEnd, preorder, inorder)
  return root
}
