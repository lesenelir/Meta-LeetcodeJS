/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // dp[i] 以nums[i]结尾的最大子数组和是dp[i]
  const dp = new Array(nums.length)
  // 初始化
  dp[0] = nums[0]

  for (let i = 1; i < dp.length; i++) { // 遍历顺序
    // 状态转移方程
    if (dp[i-1] > 0) {
      dp[i] = dp[i-1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
  }

  return Math.max(...dp)
};
