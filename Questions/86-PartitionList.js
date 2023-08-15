/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */


var partition = function (head, x) {
    let {
        headA,
        tailA,
        headB,
        tailB
    } = makeDivision(head, x);

    // console.log(headA, tailA, headB, tailB);

    if (headA == null || headB == null) {
        // console.log(headA, headB)
        return headA || headB;
    } else {
        tailA.next = headB;
        return headA;
    }


};

function makeDivision(head, x) {
    let headA = null,
        tailA = null;
    let headB = null,
        tailB = null;

    let tail = head;
    while (tail != null) {
        if (tail.val < x) {
            if (tailA == null) {
                tailA = new ListNode(tail.val, null);
                headA = tailA;
            } else {
                let temp = new ListNode(tail.val, null);
                tailA.next = temp;
                tailA = temp;
            }
        } else {
            if (tailB == null) {
                tailB = new ListNode(tail.val, null);
                headB = tailB;
            } else {
                let temp = new ListNode(tail.val, null);
                tailB.next = temp;
                tailB = temp;
            }
        }

        tail = tail.next;
    }

    return {
        headA,
        tailA,
        headB,
        tailB
    };
}

function makeList(array) {
    let head = null,
        tail = null;
    for (let i = 0; i < array.length; i++) {
        let temp = new ListNode(array[i], null);
        if (i == 0) {
            tail = temp;
            head = tail;
        } else {
            tail.next = temp;
            tail = temp;
        }
    }

    return head;
}

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    printList() {
        let tail = this;
        let ans = [];
        while(tail != null) {
            ans.push(tail.val);
            tail = tail.next;
        }
    
        return ans;
    }
}

const head = makeList([1, 4, 3, 2, 5, 2]);
// console.log(head.printList());
console.log(partition(head, 3).printList());