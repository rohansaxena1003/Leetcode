/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left == 1) {
        let obj = reverseLL(head, left, right);
        // console.log(obj)
        head.next = obj.next;
        return obj.prev;
    }
    
    let newHead = head;
    let count = 1;
    while(count < left-1 ) {
        newHead = newHead.next;
        count++;
    }

    let obj = reverseLL(newHead.next, left, right);
    // console.log(newHead, obj);
    newHead.next.next = obj.next;
    newHead.next = obj.prev;
    
    return head;

};

function reverseLL(head, left, right) {
    let prev = null;
    let next = null;
    while (left <= right) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        left++;
    }
    
    return { prev, next };
}

// console.log(reverseBetween([1,2,3,4,5], 2, 4));