/*
 * @Author: songyipeng
 * @Date: 2022-03-09 09:40:18
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
     const result = [];
    if(nums.length < 4) {
        return result;
    }
    nums = nums.sort((a, b) => a - b);
    let lastNum = NaN;
    while(nums.length >= 4) {
        const currentNum = nums.shift();
        if(currentNum !== lastNum) {
            lastNum = currentNum;
            const midResult = threeSum(nums, currentNum, target);
            result.push(...midResult);
        }
    }
    return result;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSum = function (nums, current, target) {
    const result = [];
    if(nums.length < 3) {
        return result;
    }
  
    for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
      let left = i + 1,
        right = nums.length - 1;
  
      if (nums[i] === nums[i - 1]) continue;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right] + current;
        if (sum === target) {
          result.push([current, nums[i], nums[left], nums[right]]);
          left++;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
    return result;
  };

  const result = fourSum([1,0,-1,0,-2,2],0);
  console.log(JSON.stringify(result));