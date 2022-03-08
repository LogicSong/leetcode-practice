/*
 * @Author: songyipeng
 * @Date: 2022-03-08 17:16:11
 */
/**
 * @param {string} digits
 * @return {string[]}
 */

 var letterCombinations = function (digits) {
    if (!digits.length) return [];
    if (digits === '') return [];
    let digitsStrs = digits.split('');
    return backtrack(digitsStrs);
  };
  
  var backtrack = function (digitsArr) {
    if (digitsArr.length === 1) {
      return [...letterMap[digitsArr[0]]];
    } 
    const current = letterMap[digitsArr.pop()];
    const middleResult = backtrack(digitsArr);
    const result = [];
    for (let i = 0; i < current.length; i++) {
      for (let j = 0; j < middleResult.length; j++) {
        result.push(middleResult[j] + current[i]);
      }
    }
    return result;
  };
  
  var letterMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  