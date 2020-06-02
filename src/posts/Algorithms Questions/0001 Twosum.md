# 1. TwoSum

* ChunYu: May 02, 2020
* ID: 1
* Level: Easy
* Minyoung: May 02, 2020
* Tags: Recursion

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have _**exactly**_ one solution, and you may not use the _same_ element twice.

**Example:**

```text
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## ❌ 2-Pointer @shichunyu Shi May 02, 2020

time limit exceeded

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

## ✅ Search for value left in list @shichunyu Shi May 02, 2020

Runtime: 1208 ms, faster than 24.87% of Python3 online submissions for Two Sum.

Memory Usage: 14.8 MB, less than 13.95% of Python3 online submissions for Two Sum.

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

## ✅ Using Binary Search @shichunyu Shi May 02, 2020

Runtime: 60 ms, faster than 37.64% of Python3 online submissions for Two Sum.

Memory Usage: 15.1 MB, less than 5.34% of Python3 online submissions for Two Sum.

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

## Use Memoization & Recursion

### ✅ Brute Force @Minyoung An May 02, 2020

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

### ⭐ Elegant Solution - matchmaking / card finding game @Minyoung An May 02, 2020

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

