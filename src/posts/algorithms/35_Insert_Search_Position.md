---
title: Insert Search Position
number: 35
date: 2020.06.10

---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/search-insert-position/

# Binary Search: O(log(n)) / O(1)

## Intuition

Since we are given a sorted array to work with, we can easily find the location of the target using binary search.

In the event that the target does nto exist, we want to find the index of the element that would come just after the element if the element were inserted.

This happens nicely with binary search because our pointers will converge on the index that the element needs to be inserted at.

## Trace

Given `nums = [1,3,5,6]` and `target = 2`

```text
 0 1 2 3
[1,3,5,6]
 l m   r  middle > target. Move right pointer
 
 0 1 2 3
[1,3,5,6] middle < target. Move left pointer
 l r
 m

 0 1 2 3
[1,3,5,6] all pointers converge. Return index 1.
   r
   l
   m
```

Given `nums = [1,3,5,6]` and `target = 5`

```text
 0 1 2 3
[1,3,5,6]
 l m   r  middle < target. Move left pointer
 
 0 1 2 3
[1,3,5,6] middle == target. Return index 2
     l r
     m
```

Given `nums = [1,3,5,6]` and `target = 7`

```
 0 1 2 3
[1,3,5,6]
 l m   r  middle < target. Move left pointer
 
 0 1 2 3
[1,3,5,6] middle < target. Move left pointer
     l r
     m

 0 1 2 3
[1,3,5,6] middle < target. Move left pointer
       r 
       l 
       m

0 1 2 3
[1,3,5,6] left > right. Exit loop. Return last index.
       r l 
       m
```

## Code

```python
class Solution:
    def searchInsert(self, nums, target):
        # Edge cases
        if len(nums) == 0 or target == 0:
            return 0
        left = 0
        right = len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            # If we found the number, return it
            if nums[mid] == target:
                return mid
            # Move pointers if target is not found
            elif nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid
            # If all pointers converge, then return the index at which they converge
            if left == right == mid:
                return mid
        # Edge case: target is greater than the last element of the array
        # We know this because left > right
        return len(nums)

s = Solution()
print(s.searchInsert([1,3,5,6],7)) # 4
print(s.searchInsert([1,3,5,6],5)) # 2
print(s.searchInsert([1,3,5,6],2)) # 1
```

# Binary Search 2: O(log(n)) / O(1)

This version is slightly different. Instead of moving the right pointer to middle, the right pointer moves to one left of middle. 
When left > right, we return the left value.

## Trace

Given `nums = [1,3,5,6]` and `target = 2`

```text
 0 1 2 3
[1,3,5,6]
 l m   r  middle > target. Move right pointer
 
 0 1 2 3
[1,3,5,6] middle < target. Move left pointer
 l 
 r
 m

 0 1 2 3
[1,3,5,6] left > right. Break loop. Return left = 1.
 r l
 m
```

Given `nums = [1,3,5,6]` and `target = 5`

```text
 0 1 2 3
[1,3,5,6]
 l m   r  middle < target. Move left pointer
 
 0 1 2 3
[1,3,5,6] middle == target. Return middle = 2
     l r
     m
```

Given `nums = [1,3,5,6]` and `target = 7`

```
 0 1 2 3
[1,3,5,6]
 l m   r  middle < target. Move left pointer
 
 0 1 2 3
[1,3,5,6] middle < target. Move left pointer
     l r
     m
     
 0 1 2 3
[1,3,5,6] middle < target. Move left pointer
       r 
       l 
       m

 0 1 2 3
[1,3,5,6] left > right. Exit loop. Return left.
       r l 
       m
```

## Code

```python
class Solution:
    def searchInsert(self, nums, target):
        left = 0, 
        right = len(nums) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            if target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        return left
```

