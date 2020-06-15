---
title: Check If All 1's are at Least Length K Places Away
number: 1437
date: 2020.05.03

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away

## @shichunyu Shi May 03, 2020

```python
class Solution:
    def kLengthApart(self, nums, k):
        ans = True
        start = 0
        finished = False
        while finished == False:
            coor = self._movePointer(nums, start)
            if coor[1] - coor[0] > k:
                ans = True
            elif coor == (-1,-1):
                finished = True
                return ans
            else:
                ans = False
                return ans
            if coor[1] != len(nums)-1:
                start = coor[1]
            else:
                return ans

    def _movePointer(self, nums, start):
        x = start
        y = None
        while nums[x] != 1:
            if x == len(nums)-1 and y == None:
                return (-1,-1)
            else:
                x+=1
        for i in range(x+1,len(nums)):
            if nums[i] == 1:
                y = i
                return (x,y)
            elif i == len(nums) -1:
                return (-1,-1)

problem = Solution()
print(problem.kLengthApart([0,0,0],2)) # true
```
