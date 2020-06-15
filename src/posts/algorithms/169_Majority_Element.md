---
title: Majority Element
number: 169
date: 2020.05.06
tags: ["array","divide and conquer"]
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/majority-element

## Dictionary @shichunyu on May 6, 2020
`O(N) Time & Space`

```python
class Solution:
    def majorityElement(self, nums):
        d = {}
        maj = None
        count = 0
        if nums == None:
            return -1
        for i in nums:
            if i in d:
                d[i] = d[i]+1
            else:
                d[i] = 1
            if d[i] > count:
                maj = i
                count += 1
        return maj

s = Solution()
print(s.majorityElement([2, 2, 1, 1, 1, 2, 2])) # 2
print(s.majorityElement([2])) # 2
print(s.majorityElement([2, 2, 1])) # 2
print(s.majorityElement([2, 2])) # 2
print(s.majorityElement([1, 2, 2])) # 2
print(s.majorityElement([])) # 2

"""
[2,2,1,1,1,2,2]

maj_el: 2
count: 1

2: 2
1: 3
"""
```

## ⭐️ Elegant Solution using Collections
Counter from Collections:[https://docs.python.org/2/library/collections.html#collections.Counter](https://docs.python.org/2/library/collections.html#collections.Counter)

To understand max(iterable, key): [https://stackoverflow.com/questions/27486309/how-does-iter-and-key-in-python-max-min-function-work](https://stackoverflow.com/questions/27486309/how-does-iter-and-key-in-python-max-min-function-work)

```python
from collections import Counter


class Solution:
    def majorityElement(self, nums):
        counts = Counter(nums)
        return max(counts.keys(), key=counts.get) # uses the value of the count to compare, and returns the key with the highest count.

s = Solution()
print(s.majorityElement([2, 2, 1, 1, 1, 2, 2]))  # 2
```