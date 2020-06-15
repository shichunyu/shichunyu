---
title: Consecutive Characters
number: 1446
date: 2020.06.09

---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/consecutive-characters

# Solution

```python
class Solution:
    def maxPower(self, s: str) -> int:
        power = 0
        cur_power = 1
        prev_char = None
        if s == None:
            return -1
        for char in s:
            if char == prev_char:
                cur_power += 1
            else:
                cur_power = 1
            if cur_power > power:
                power = cur_power
            prev_char = char
        return power

s = Solution()
print(s.maxPower("leetcode")) # 2
print(s.maxPower("abbcccddddeeeeedcba")) # 5
print(s.maxPower("triplepillooooow")) # 5
print(s.maxPower("hooraaaaaaaaaaay")) # 11
print(s.maxPower("tourist")) # 1
print(s.maxPower(""))
```
