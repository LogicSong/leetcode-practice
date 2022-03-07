/*
 * @Author: songyipeng
 * @Date: 2022-03-07 16:42:56
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//最接近的三数之和
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

 var threeSumClosest = function (nums, target) {
    // 先排序
    nums = nums.sort((a, b) => a - b);
    //
    let result = 0,
      minDiff = Number.MAX_VALUE;
  
    for (let i = 0; i < nums.length; i++) {
      let left = i + 1,
        right = nums.length - 1;
  
      while (left < right) {
        const value = nums[i] + nums[left] + nums[right] - target;
        const absValue = Math.abs(value);
  
        if (value === 0) {
          return target;
        } else {
          if (absValue < minDiff) {
            minDiff = absValue;
            result = nums[i] + nums[left] + nums[right];
          }
          if (value > 0) {
            right--;
          } else if (value < 0) {
            left++;
          }
        }
      }
    }
    return result;
  };
  