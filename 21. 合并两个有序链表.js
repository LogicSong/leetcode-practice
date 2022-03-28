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

    if(list1 === null) {
        return list2;
    }else if(list2 === null) {
        return list1;
    }

    let dummyHead = new ListNode(0),
        current = dummyHead;

    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            current.next = list1;
            current = current.next;
            list1 = list1.next;
        }else {
            current.next = list2;
            current = current.next;
            list2 = list2.next;
        }
    }

    if(list1 !== null) {
        current.next = list1;
    }else if(list2 !== null) {
        current.next = list2;
    }

    return dummyHead.next;
};

/*
一次通过
执行用时：64 ms, 在所有 JavaScript 提交中击败了89.30%的用户
内存消耗：43.2 MB, 在所有 JavaScript 提交中击败了32.93%的用户
*/