/*
 * @Author: songyipeng
 * @Date: 2022-02-23 18:56:37
 */
// 3. 无重复字符的最长子串
//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    let left = 0,
        right = 0,
        set = [],
        number = 0;
    while (right < s.length) {
        const ch = s.charAt(right);
        const index = set.indexOf(ch);
        if (index === -1) {
            set.push(ch);
            if (set.length > number) {
                number = set.length;
            }
            right++;
        }else {
            set.shift();
            left++;
        }
    }
    return number;
};