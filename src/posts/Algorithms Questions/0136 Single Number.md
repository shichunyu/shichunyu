# 0136. Single Number

## 136. Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

```text
Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

4: 0
1: 1
2: 2

i = 3 // 1
```

## ✅ Chunyu @ May 4, 2020

Runtime: 1660 ms, faster than 13.76% of Python3 online submissions for Single Number. Memory Usage: 16.4 MB, less than 6.56% of Python3 online submissions for Single Number.

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

## Solution using Dictionary \(Hash Table\)

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

## Solution using Math & Sets

[https://docs.python.org/2/library/sets.html](https://docs.python.org/2/library/sets.html)

```python
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return 2 * sum(set(nums)) - sum(nums)
```

sadfsdfsdf asdfsdf

## Solution using XOR

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

Further Reading: [https://www.youtube.com/watch?v=VPw9vPN-3ac](https://www.youtube.com/watch?v=VPw9vPN-3ac)

