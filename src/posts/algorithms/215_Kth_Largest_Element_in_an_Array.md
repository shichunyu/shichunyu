---
title: Kth Largest Element in an Array
number: 215
tags: ["binary tree","graphs"]
date: 2020.05.22
---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/kth-largest-element-in-an-array

# Minimum Priority Queue w/ MinHeap

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

## Heap Solutions
**Solution 1:** use heapsort or some other sort to sort array and count back to Kth largest. => O(N*LogN)

```python
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        return sorted(nums)[-k]
```

**Solution 2:** Use Minimum Priority Queue with MinHeap. => O(N*LogK) where K is the size of the PQ

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
