/**
 * definition for a binary tree node.
 * function treenode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {treenode} root
 * @return {boolean}
 */
let isValidBST = function(root) {
  if (root === null) {
    return true
  }
  if (isValidBST(root.left) && isValidBST(root.right)) {
    let rightnode = root.right
    while (rightnode && rightnode.left) {
      rightnode = rightnode.left
    }
    let leftnode = root.left
    while (leftnode && leftnode.right) {
      leftnode = leftnode.right
    }
    if ((leftnode === null || root.val > leftnode.val) && (rightnode === null || root.val < rightnode.val)) {
      return true
    }
  }
  return false
}

let isValidBST = function(root) {
  return helper(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)
}
let helper = function(root, max, min) {
  if (root === null) {
    return true
  }
  if (root.val >= max || root.val <= min) {
    return false
  }
  return helper(root.left, root.val, min) && helper(root.right, max, root.val)
}
