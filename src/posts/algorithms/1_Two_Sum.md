---
title: Two Sum
number: 1
date: 2020.06.05
tags: ["dictionary/hash","binary search","recursion"]
---

```toc

```

# Overview
## Todo
- [ ] Add in time/space complexity for all solutions

## Sources
Question Source: [Two Sum - LeetCode](https://leetcode.com/problems/two-sum/)
Resources: AlgoExpert.io

## Description
Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

`hello`

You may assume that each input would have ***exactly*** one solution, and you may not use the *same* element twice.

**Example:**

```text
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

# Brute Force: O(n^2^) / O(1)
Due to the nested loop, this solution is O(n^2^) runtime.

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        a = 0
        b = 1
        while a < len(nums):
            while b < len(nums):
                sum = nums[a] + nums[b]
                if sum == target:
                    ans = []
                    ans.extend([a,b])
                    return ans
                else:
                    b += 1
            a += 1
            b = a+1
```

# Brute Force - Slicing

```python
class Solution:
    def twoSum(self, nums, target):
        a = 0

        while a < len(nums):
            left = target - nums[a]

            if left != nums[a]:
                if left in nums:
                    b = nums.index(left)
                    ans = []
                    ans.extend([a, b])
                    return ans
                else:
                    a += 1
            else:
                nums_temp = nums[a+1:]
                if left in nums_temp:
                    b = nums_temp.index(left)
                    ans = []
                    ans.extend([a, b+a+1])
                    return ans
                else:
                    a += 1
```

# Binary Search: O(n*log(n)) / O(log(n))
## Intuition
This is an optimization of the Brute Force solution. By sorting the array, we can use binary search to find the amount left.

## Code
**Runtime:** For each item in the array, we have to perform a binary search of log(n) time, so the total runtime is n*log(n)
**Space:** In the below code, we store the sorted array in a new variable, so space would be O(n). However, technically we can just sort the given input array. In that case, Quick Sort requires O(log(n)) space only and the space required would be O(log(n))

```python
class Solution:
    def twoSum(self, nums, target):
        sorted_nums = sorted(nums)

        for i in range(len(sorted_nums)):
            left = target - sorted_nums[i]
            if left != 0 or (left == 0 and sorted_nums[i] != 0):
                sub_nums = sorted_nums[i+1:]
                values = self._binarySearch(i, sub_nums, target, left)
                if values:
                    x = values[0]
                    x_value = sorted_nums[x]
                    y_value = values[1]

                    x_index = nums.index(x_value)
                    y_index = nums.index(y_value)

                    if x_index == y_index:
                        new_nums = nums[x_index+1:]
                        y_index = new_nums.index(y_value) + x_index + 1
                        return [x_index, y_index]
                    return [x_index, y_index]
            else:
                x_index = nums.index(0)
                new_nums = nums[x_index+1:]
                y_index = new_nums.index(0) + x_index + 1
                return [x_index, y_index]

        return -1

    def _binarySearch(self, i, nums, target, left):
        if len(nums) == 0:
            return -1

        lo = 0
        hi = len(nums) - 1
        while lo <= hi:
            mid = (lo + hi) // 2
            if nums[mid] == left:
                values = (i, nums[mid])
                return values
            elif nums[mid] < left:
                lo = mid + 1
            else:
                hi = mid - 1
```

# Recursive
```python
# recursion
# bruteforce: timeout
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = []
        return self._helper(nums,target,result,0)

    def _helper(self,nums,target,result,index):
        if index == len(nums):
            return result

        # current num = nums[index]
        num = nums[index]

        # iterate over array and find match that does != same index
        for i in range(len(nums)):
            if index == i:
                continue

            # if num and num[i] == target push to result array
            if num + nums[i] == target:
                result.append(index)
                result.append(i)
                return result

        return self._helper(nums,target,result,index+1)
```

# Recursion w/ Memoization
```python
# hashmap
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        memo = {}
        return self._helper(nums,target,memo,0)

    def _helper(self,nums,target,memo,index):
        if index == len(nums):
            return []

        # current num = nums[index]
        num = nums[index]

        if target - num in memo:
            return [memo[target-num],index]
        else:
            memo[num] = index

        return self._helper(nums,target,memo,index+1)
```

# ⭐️ Hashtable/Dictionary Solution: O(n) / O(1)
## Intuition
If `target = num1 + num2` then:
* `num1 = target - num2`
* `num2 = target - num1`

We can iterate over the input array for each and see if we have encounter its opposite before. To keep track of which numbers we have already visited previously, we use a dictionary to store the value and its index.

**Runtime:** O(n) because in the worst case, we iterate over the entire given array once
**Space:** O(n) because in the worst case, we must store a dictionary of the length of the array

## Code
```py
class Solution:
    def twoSum(self, nums, target):
        memo = {}
        for i in range(len(nums)):
            if nums[i] not in memo:
                memo[nums[i]] = i
            if ((target - nums[i]) in memo
                    and memo[target-nums[i]] != i):
                return [memo[target-nums[i]],i]

s = Solution()
print(s.twoSum([2, 7, 9, 3, 5, 1],7)) # [0,4]
print(s.twoSum([3,2,4],6)) # [1,2]
print(s.twoSum([3,3],6))
```
