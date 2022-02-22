/*
 * @Author: songyipeng
 * @Date: 2022-02-22 18:35:10
 */
// 2. 两数相加

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let result,
        currentNode1 = l1,
        currentNode2 = l2,
        resultCurrentNode,
        flag = 0;

    while(currentNode1 !== null && currentNode2 !== null) {
        let val = currentNode1.val + currentNode2.val + flag;
        let f = 0;
        if(val >= 10) {
            val = val % 10;
            f = 1;
        }
        const newNode = new ListNode(val);
        if(!result) {
            result = newNode;
            resultCurrentNode = newNode;
        }else{
            resultCurrentNode.next = newNode;
            resultCurrentNode = resultCurrentNode.next;
        }
        flag = f;
        currentNode1 = currentNode1.next;
        currentNode2 = currentNode2.next;
    }
    while(currentNode1) {
        let val = currentNode1.val + flag;
        let f = 0;
        if(val >= 10) {
            val = val % 10;
            f = 1;
        }
        const newNode = new ListNode(val);
        resultCurrentNode.next = newNode;
        resultCurrentNode = resultCurrentNode.next;
        currentNode1 = currentNode1.next;
        flag = f;
    }
    while(currentNode2) {
        let val = currentNode2.val + flag;
        let f = 0;
        if(val >= 10) {
            val = val % 10;
            f = 1;
        }
        const newNode = new ListNode(val);
        resultCurrentNode.next = newNode;
        resultCurrentNode = resultCurrentNode.next;
        currentNode2 = currentNode2.next;
        flag = f;
    }
    if (flag > 0) {
        const newNode = new ListNode(flag);
        resultCurrentNode.next = newNode;
    }
    return result;
};