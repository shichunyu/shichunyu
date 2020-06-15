---
title: Subsets (Power Set)
number: 78
date: 2020.06.03
---

```toc

```

# Overview
Question Source: https://leetcode.com/problems/subsets



# ✔While Loop @shichunyu Shi
Runtime: 76 ms, faster than 5.12% of Python3 online submissions for Subsets.

Memory Usage: 14.1 MB, less than 5.95% of Python3 online submissions for Subsets.

```python
class Solution:
    def subsets(self, nums):
        index = 0
        value=nums[index]
        ans = [[0_Max_Sum_Increasing_Subsequence]]
        memo = {0:None}

        ans.append([])
        # base case [1,2,3]
        for i in nums:
            ans[1].append(i)

        for i in ans:
            if len(i) > 1:
                j=len(i)-1
                while j >= 0:
                    copy = i[:]
                    copy.remove(i[j])
                    if copy not in ans:
                        ans.append(copy)
                    j-=1
        return ans

problem = Solution()

print(problem.subsets([1,2,3]))
```

# ⭐Recursive

```python
def powerSet(array, idx = None):
    if idx is None:
        idx = len(array) - 1
    elif idx < 0:
        return [[0_Max_Sum_Increasing_Subsequence]]
    ele = array[idx]
    subsets = powerSet(array, idx - 1)
    for i in range(len(subsets)):
        currentSubset = subsets[i]
        subsets.append(currentSubset + [ele])
    return subsets

powerSet([1,2,3])
```

# 🌟Iterative

```python
def powerSet(array):
    subsets=[[0_Max_Sum_Increasing_Subsequence]]
    for ele in array:
        for i in range(len(subsets)):
            currentSubset = subsets[i]
            subsets.append(currentSubset + [ele])
    return subsets

powerSet([1,2,3])
```
