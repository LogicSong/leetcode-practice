/*
 * @Author: songyipeng
 * @Date: 2022-03-24 12:32:45
 */

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {

    let result = null,
        current = null,
        current1 = list1,
        current2 = list2;

    // 确定头节点
    if(current1 === null) {
        return current2;
    }else if(current2 === null) {
        return current1;
    }else {
        if(current1.val <= current2.val) {
            result = current1;
            current = current1;
            current1 = current1.next;
        }else {
            result = current2;
            current = current2;
            current2 = current2.next;
        }
    }

    while(current1 !== null && current2 !== null) {
        if(current1.val <= current2.val) {
            current.next = current1;
            current = current.next;
            current1 = current1.next;
        }else {
            current.next = current2;
            current = current.next;
            current2 = current2.next;
        }
    }

    if(current1 !== null) {
        current.next = current1;
    }else if(current2 !== null) {
        current.next = current2;
    }

    return result;
};

/*
一次通过
执行用时：64 ms, 在所有 JavaScript 提交中击败了89.30%的用户
内存消耗：43.2 MB, 在所有 JavaScript 提交中击败了32.93%的用户
*/