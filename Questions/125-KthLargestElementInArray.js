/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    const pq = new MaxHeap();
    
    for (let i = 0; i < nums.length; i++) {
        pq.insert(nums[i]);
    }
    
    for (let i = 0; i < k - 1; i++) {
        pq.extractMax();
    }
    
    return pq.extractMax();
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }
    
    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }
    
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] <= this.heap[parentIndex]) {
                break;
            }
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
        }
    }
    
    heapifyDown() {
        let currentIndex = 0;
        const length = this.heap.length;
        
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let largestIndex = currentIndex;
            
            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }
            
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }
            
            if (largestIndex === currentIndex) {
                break;
            }
            
            [this.heap[currentIndex], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[currentIndex]];
            currentIndex = largestIndex;
        }
    }
}
