/*
 * @Author: songyipeng
 * @Date: 2022-02-28 18:38:11
 */
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

    let minIndex = 0,
        maxIndex = 0;
    let dp = new Array(s.length);
    for(let i = 0; i < dp.length; i++) {
        const item = new Array(s.length);
        item[i] = true;
        dp[i] = item;
    }
    for(let r = 1; r < s.length; r++) {
        
        for(let l = 0; l < r; l++) {
            if (s.charAt(l) === s.charAt(r) && (r - l <= 2 || dp[l+1][r-1] === true)) {
                dp[l][r] = true;
                if((r - l) > (maxIndex - minIndex)) {
                    minIndex = l;
                    maxIndex = r;
                }
            }
        }
    }
    return s.slice(minIndex, maxIndex + 1);
};