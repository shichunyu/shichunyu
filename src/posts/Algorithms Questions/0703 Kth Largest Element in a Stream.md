# 0703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

```text
Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(5);   // returns 5
kthLargest.add(3);   // returns 4
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
```

> Note: You may assume that nums' length ≥ k-1 and k ≥ 1.

## Minimum Priority Queue using Heap @shichunyu on May 22, 2020

> Time O\(N\*LogN\) \| O\(N\) Space Runtime: 140 ms, faster than 38.05% of Python3 online submissions for Kth Largest Element in a Stream. Memory Usage: 17.7 MB, less than 8.70% of Python3 online submissions for Kth Largest Element in a Stream.

```python
import heapq

class KthLargest:
    def __init__(self, k, nums):
        self.k = k
        self.nums = nums
        self.minPQ = []
        # O(N) Time / O(N) Space
        heapq.heapify(self.nums)
        # print('original heap: ' + str(self.nums))

        # O(N) Time / O(N) Space
        # Build starting minPQ
        if len(self.nums) > 0:
            for num in nums:
                self.add(num)
        # print('starting minPQ: ' + str(self.nums))

    # add the new value and return the kth largest value. 
    def add(self, val):
        # O(N*LogN) time / O(1) Space
        if len(self.minPQ) < self.k:
            heapq.heappush(self.minPQ,val)
        elif val > self.minPQ[0]:
            heapq.heapreplace(self.minPQ,val)
        # print(self.minPQ)
        return self.minPQ[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)

if __name__ == '__main__':
    """     
    k = KthLargest(1,[])
    print(k.add(-3))
    print(k.add(-2))
    print(k.add(-4))
    print(k.add(0))
    print(k.add(4)) 
    """
    k = KthLargest(7, [-10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1])

    print(k.add(3))
    print(k.add(2))
    print(k.add(3))
    print(k.add(1))
    print(k.add(2))
    print(k.add(4))
    print(k.add(5))
    print(k.add(5))
    print(k.add(6))
    print(k.add(7))
    print(k.add(7))
    print(k.add(8))
    print(k.add(2))
    print(k.add(3))
    print(k.add(1))
    print(k.add(1))
    print(k.add(1))
    print(k.add(10))
    print(k.add(11))
    print(k.add(5))
    print(k.add(6))
    print(k.add(2))
    print(k.add(4))
    print(k.add(7))
    print(k.add(8))
    print(k.add(5))
    print(k.add(6))
```

