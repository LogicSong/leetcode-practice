/*
 * @Author: songyipeng
 * @Date: 2022-03-28 14:38:24
 */
/*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
*/
var generateParenthesis = function (n) {
    if (n <= 0) {
      return [];
    }
  
    const result = [];
  
    func(n, '', 0, '(', result);
  
    return result;
  };
  
  function func(n, currentTotal, leftPartNum, current, result) {
    currentTotal += current;
  
    if (current === '(') {
      leftPartNum++;
      if (currentTotal.length + leftPartNum > 2 * n) {
        return;
      }
    } else {
      leftPartNum--;
      if (leftPartNum < 0) {
        return;
      } else if (currentTotal.length === 2 * n && leftPartNum === 0) {
        result.push(currentTotal);
      }
    }
  
    func(n, currentTotal, leftPartNum, '(', result);
    func(n, currentTotal, leftPartNum, ')', result);
  }

/*
执行用时：64 ms, 在所有 JavaScript 提交中击败了69.93%的用户
内存消耗：42.7 MB, 在所有 JavaScript 提交中击败了20.90%的用户
*/