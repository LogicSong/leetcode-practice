/*
 * @Author: songyipeng
 * @Date: 2022-02-24 11:21:37
 */
// 4. 寻找两个正序数组的中位数

// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const length = Math.ceil((nums1.length + nums2.length) / 2) - 1;
    const isOdd = (nums1.length + nums2.length) % 2 === 1;
    let count1 = 0,
        count2 = 0,
        mergeNums = [];

    while (count1 < nums1.length && count2 < nums2.length) {
        if (nums1[count1] <= nums2[count2]) {
            mergeNums.push(nums1[count1]);
            count1++;
        }else {
            mergeNums.push(nums2[count2]);
            count2++;
        }
    }
    while (count1 < nums1.length) {
        mergeNums.push(nums1[count1]);
        count1++;
    }
    while (count2 < nums2.length) {
        mergeNums.push(nums2[count2]);
        count2++;
    }
    if (isOdd) {
        return mergeNums[length];
    }else {
        return (mergeNums[length] + mergeNums[length + 1]) / 2;
    }
};