# 45. Jump Game II
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

- dsfasdf
- asdfasdf
- asdf

1. sadfsdaf
2. asdfsdaf
3. asdf
4. asdfsdf
```
Example:

Input: [2, 3, 1, 1, 4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

> Note: You can assume that you can always reach the last index.  

## Time Limit Exceeded - May 30, 2020
```py
 1. 1. 2. 3. 4. 
[2, 3, 1, 1, 4]
 0  1  1  2  2

class Solution:
    def jump(self, nums):
        n = len(nums) #2
        jumps = [float('inf')] * n # [inf,inf]
        jumps[0] = 0 # [0,-inf]
        for i in range(n-1): # 0,1
            for j in range(1,nums[i]+1): # 1->1
                if i+j <= n-1:
	                jumps[i+j] = min(jumps[i]+1,jumps[i+j])
        return jumps[n-1]
```

## Time Limit Exceeded - May 30, 2020
```py
 0. 1. 2. 3. 4. 
[2, 3, 1, 1, 4, 3, 2, 0, 1]
 0  1  1  2  2  3  3  3  3

class Solution:
    def jump(self, nums):
        n = len(nums)  # 2
        jumps = [float('inf')] * n  # [inf,inf]
        jumps[0] = 0  # [0,-inf]
        for i in range(n-1):  # 0,1
            if jumps[n-1] != float('inf'):
                break
            for j in range(1, nums[i]+1):  # 1->1
                if jumps[n-1] != float('inf'):
                    break
                if i+j <= n-1:
                    if jumps[i+j] == float('inf'):
                      jumps[i+j] = jumps[i]+1
        return jumps[n-1]


s = Solution()
print(s.jump([2, 3, 1, 1, 4]))

```

# Recursive (incomplete - not working) - May 30, 2020
```py
 0. 1. 2. 3. 4. 
[2, 3, 1, 1, 4, 3, 2, 0, 1]
 0  1  1. 2  2. 3        4 

 0 1 2 3 4 5 6
[4,1,1,3,1,1,1]
 0     1 1 
i = 0
jt = 4
class Solution:
    def jump(self, nums):
        jumps = [float('inf')] * len(nums)
        jumps[0] = 0
        i = 0

        return self._recursion(0, nums, jumps)

    def _recursion(self, i, nums, jumps):
        while jumps[len(nums)-1] == float('inf'):
            cur_val = nums[i]
            if i + cur_val <= len(nums)-1:
                jump_to = i + cur_val
            else:
                jump_to = len(nums)-1
            jumps[jump_to] = jumps[i] + 1
            i = jump_to - 1
            if jumps[i] == float('inf'):
                jumps[i] = jumps[i+1]
                self._recursion(i, nums, jumps)
            else:
                while jumps[i] != float('inf'):
                    if i+1 <= len(nums) -1:
                        i += 1
                    else:
                        break
            
        return jumps[len(nums)-1]

s = Solution()
print(s.jump([1,2,3]))

```











