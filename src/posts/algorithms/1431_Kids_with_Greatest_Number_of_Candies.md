---
title: Kids with Greatest Number of Candies
number: 1431
date: 2020.06.06
tags: ["Array"]
---

```toc
```

# Overview
## Sources
Question Source: [Kids With the Greatest Number of Candies - LeetCode](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

## Description
Given the array `candies` and the integer `extraCandies`, where `candies[i]` represents the number of candies that the ***ith*** kid has.

For each kid check if there is a way to distribute `extraCandies` among the kids such that he or she can have the **greatest** number of candies among them. Notice that multiple kids can have the **greatest** number of candies.

**Example 1:**

```text
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
```

**Example 2:**

```text
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
```

**Example 3:**

```text
Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
```

**Constraints:**

* `2 <= candies.length <= 100`
* `1 <= candies[i] <= 100`
* `1 <= extraCandies <= 50`

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
```py
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