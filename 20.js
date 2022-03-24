/*
 * @Author: songyipeng
 * @Date: 2022-03-10 10:22:44
 */
//20. 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 1) {
      return false;
    }
    var isLeft = function (ch) {
      return ch === '(' || ch === '{' || ch === '[';
    };
    let index = 0,
      length = s.length,
      leftArr = [];
    const map = {
      ')': '(',
      '}': '{',
      ']': '['
    };
    while (index < length) {
      const ch = s.charAt(index);
      if (isLeft(ch)) {
        leftArr.push(ch);
        index++;
      } else {
        if (leftArr.length > 0 && map[ch] === leftArr.pop()) {
          index++;
        } else {
          return false;
        }
      }
    }
    return leftArr.length === 0;
  };