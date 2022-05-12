/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let queue = []
  let res = []
  if (root) queue.push(root)

  while (queue.length) {
    let levelCount = queue.length
    let level = []

    for (let i = 0; i < levelCount; i++) {
      let node = queue.shift()
      level.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(level[level.length - 1])
  }

  return res
};
