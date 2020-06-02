# 0215. Kth Largest Element in an Array

## 215. Kth Largest Element in an Array

* [215. Kth Largest Element in an Array](0215.-kth-largest-element-in-an-array.md#215-kth-largest-element-in-an-array)
* [Minimum Priority Queue w/ MinHeap @shichunyu on May 22, 2020](0215.-kth-largest-element-in-an-array.md#minimum-priority-queue-w-minheap-shichunyu-on-may-22-2020)
* [Codebreakers Solutions](0215.-kth-largest-element-in-an-array.md#codebreakers-solutions)

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

```text
Example 1:

Input: [3, 2, 1, 5, 6, 4] and k = 2
Output: 5
```

```text
Example 2:

Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
Output: 4
```

> **Note:** You may assume k is always valid, 1 ≤ k ≤ array's length.

## Minimum Priority Queue w/ MinHeap @shichunyu on May 22, 2020

```python
import heapq

class Solution:
    def findKthLargest(self, nums, k):
        minPQ = []
        # O(N*LogN) Time
        # O(N) Space
        for num in nums:
            if len(minPQ) < k:
                # O(LogN)
                heapq.heappush(minPQ,num)
            elif minPQ[0] < num:
                # O(LogN)
                heapq.heapreplace(minPQ,num)

        return minPQ[0]

if __name__ == '__main__':
    k = Solution()
    print(k.findKthLargest([3, 2, 1, 5, 6, 4],2)) #5
    print(k.findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6],4)) #4
```

## Codebreakers Solutions

**Solution 1:** use heapsort or some other sort to sort array and count back to Kth largest. =&gt; O\(N\*LogN\)

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return sorted(nums)[-k]
```

**Solution 2:** Use Minimum Priority Queue with MinHeap. =&gt; O\(N\*LogK\) where K is the size of the PQ

```python
import heapq
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        pq = []
        for i in range(k):
            heapq.heappush(pq,nums[i])

        for i in range(k,len(nums)):
            if nums[i] > pq[0]:
                heapq.heappop(pq)
                heapq.heappush(pq,nums[i])

        return pq[0]
```

