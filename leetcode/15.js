/*
 * @Author: songyipeng
 * @Date: 2022-03-03 19:50:02
 */
// 15.三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);
  
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
      let left = i + 1,
        right = nums.length - 1;
  
      if (nums[i] === nums[i - 1]) continue;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (sum > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
    return result;
  };