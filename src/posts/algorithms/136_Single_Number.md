---
title: Single Number
number: 136
date: 2020.06.06
tags: ["bit manipulation","dictionary/hash","sets","math"]
---

```toc

```

# Resources
Question Source: https://leetcode.com/problems/single-number

References:

- How to use XOR: [YouTube](https://www.youtube.com/watch?v=VPw9vPN-3ac)
- Python Sets: [8.7. sets — Unordered collections of unique elements — Python 2.7.18 documentation](https://docs.python.org/2/library/sets.html)

# Iteration: O(n^2^) / O(n)
```python
class Solution:
    def singleNumber(self, nums):
        ans = []
        for i in nums:
            if i not in ans:
                ans.append(i)
            else:
                ans.remove(i)
        return ans[0]

s = Solution()

print(s.singleNumber([4,1,2,1,2]))
```

# ⭐️ Default Dictionary: O(n) / O(n)
The reason we must use `defaultdict` here is that we need to insert the dictionary key if it doesn't exist while we count the number of occurrences. If we do not use `defaultdict` we will get a `key not found` error.

```python
from collections import defaultdict
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hash_table = defaultdict(int)
        for i in nums:
            hash_table[i] += 1

        for i in hash_table:
            if hash_table[i] == 1:
                return i
```

# ⭐️ Math & Sets: O(n) / O(n)
## Intuition
In the example `[4,1,2,1,2]`  the odd one out is `4`. This means that `1` and `2` should cancel each other out.

When we use `set()` only unique values are included, so `set([4,1,2,1,2])` results in `{4,1,2}`.
If we double the set, we'll get two of everything: `4,4,1,1,2,2` . Then if we subtract the original list from it, everything cancels out, except the `4`.

This is why we can do `sum(set([4,1,2,1,2]))*2` and then subtract the sum of the original set `sum([4,1,2,1,2])` from it to achieve `14 - 10 = 4`.

## Code
```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return 2 * sum(set(nums)) - sum(nums)
```

# ⭐️ XOR: O(n) / O(1)
## Explanation
How the bit calculation works with XOR ^

```text
[4,1,2,1,2]

100, 001, 010, 001, 010

XOR:
if diff => 1
if same => 0

100 ^ 001 = 101
101 ^ 010 = 111
111 ^ 001 = 110
110 ^ 010 = 100
```

## Code

```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        a = 0
        for i in nums:
            a ^= i
        return a
```

