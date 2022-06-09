/*
 * @Author: songyipeng
 * @Date: 2022-06-08 16:01:33
 */
/*给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let dummyHead = new ListNode(-Math.pow(10, 4));
  lists.forEach((list) => {
    mergeTwoLists(dummyHead, list);
  });
  return dummyHead.next;
};

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }

  let dummyHead = new ListNode(0),
    current = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    }
  }

  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  return dummyHead.next;
};

/*
执行用时：224 ms, 在所有 JavaScript 提交中击败了33.09%的用户
内存消耗：45.3 MB, 在所有 JavaScript 提交中击败了98.94%的用户
*/
