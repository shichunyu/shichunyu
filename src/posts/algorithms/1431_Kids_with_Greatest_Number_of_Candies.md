---
title: Kids with Greatest Number of Candies
number: 1431
date: 2020.06.11
tags: ["Array"]
---

```toc

```

# Resources
Question Source: [Kids With the Greatest Number of Candies - LeetCode](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

# Append to New Array: O(n) / O(n)
```python
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        most = max(candies)
        ans = []
        for i in candies:
            if most - i > extraCandies:
                ans.append(False)
            else:
                ans.append(True)
        return ans
```

# Modify Array in Place: O(n) / O(1)
```python
class Solution:
    def kidsWithCandies(self, candies, extraCandies):
        maxCandies = max(candies)
        for i in range(len(candies)):
            # Ternary Operator
            candies[i] = False if candies[i] < maxCandies - extraCandies else True
        # print(maxCandies)
        return candies

s = Solution()
print(s.kidsWithCandies([2, 3, 5, 1, 3],3))
print(s.kidsWithCandies([4,2,1,1,2],1))
print(s.kidsWithCandies([12,1,2],10))
```