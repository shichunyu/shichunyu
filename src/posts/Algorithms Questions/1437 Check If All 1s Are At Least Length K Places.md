# 1437. Check If All 1's Are at Least Length K Places Away

* ChunYu: May 02, 2020
* ID: 5401
* Level: Medium
* Minyoung: May 02, 2020
* Tags: 2-Pointer

Given an array `nums` of 0s and 1s and an integer `k`, return `True` if all 1's are at least `k` places away from each other, otherwise return `False`.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/04/15/sample\_1\_1791.png](https://assets.leetcode.com/uploads/2020/04/15/sample_1_1791.png)

```text
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.
```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/04/15/sample\_2\_1791.png](https://assets.leetcode.com/uploads/2020/04/15/sample_2_1791.png)

```text
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
```

**Example 3:**

```text
Input: nums = [1,1,1,1,1], k = 0
Output: true
```

**Example 4:**

```text
Input: nums = [0,1,0,1], k = 1
Output: true
```

**Constraints:**

* `1 <= nums.length <= 10^5`
* `0 <= k <= nums.length`
* `nums[i]` is `0` or `1`

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

