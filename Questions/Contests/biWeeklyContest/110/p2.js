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
var insertGreatestCommonDivisors = function(head) {
    insertNodes(head, head.next);
    return head;
};

function insertNodes(head, tail) {
    while(tail != null) {
        newNode = new ListNode(gcd(head.val, tail.val), tail); // gcd(head.val, tail.val)
        head.next = newNode;
        head = tail;
        tail = tail.next;
    } 
}

function gcd(a,b) {
    if(a%b == 0) {
        return b;
    }    
    return gcd(b, a%b);
}

// console.log(insertGreatestCommonDivisors());
