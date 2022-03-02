/*
 * @Author: songyipeng
 * @Date: 2022-03-02 19:43:03
 */
// 整数反转
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = 1;
    if(x < 0) {
        flag = -1;
        x = -x;
    }
    let xStr = x.toString();
    let result = 0;
    let index = 0;
    while(index < xStr.length){
        result += xStr.charAt(index) * Math.pow(10, index);
        index++;
    }
    result = flag * result;
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) {
        return 0;
    }
    
    return result;
};