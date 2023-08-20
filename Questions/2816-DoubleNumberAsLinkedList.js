/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    head = reverseLL(head);
    console.log(head);
    return getNewList(head);
};

function getNewList(head) {
    let borrow = 0;
    let tail = head;
    while(tail!= null) {
        let num = tail.val*2 + borrow;
        borrow = Math.floor(num/10);
        num = num%10;
        tail.val = num;
        // console.log("num = ", num, " borrow = ", borrow);
        tail = tail.next;
    }
    
    head = reverseLL(head);
    if(borrow > 0) {
        let newNode = new ListNode(borrow);
        newNode.next = head;
        head = newNode;
    }
    // console.log(head);
    return head;
}

function reverseLL(head) {
    let prev = null;
    while (head != null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev;
}