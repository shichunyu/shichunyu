---
title: Sort Colors (Dutch National Flag)
number: 75
date: 2020.06.11
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/sort-colors/

# Insertion Sort: O(n^2^) / O(1)

This is a typical insertion sort algorithm. It goes every element in the array and inserts the item into the correct spot relative to elements before it. It is the same way we would sort cards in our hands in a card game.

```python
class Solution:
    def sortColors(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in range(1,len(nums)):
            for j in range(i):
                if nums[i] < nums[j]:
                    val = nums[i]
                    del nums[i]
                    nums.insert(j,val)
        print(nums)

s = Solution()
s.sortColors([2,0,2,1,1,0])
```

# Three-Pointer: O(n) / O(1)

## Intuition

This approach takes advantage of the fact that we have only 3 numbers: `0,1,2`

We know that `0` must be on the very left, `2` must be on the very right, and `1` in between them.

The key is to know where the 0's end and where the 2's start, so we initialize 2 variables to keep track of them: `l` and `r`.

*   We initialize `l` at `-1` or right before the start of the array
*   We initialize `r` at `len(array)` or right after the last element of the array.

We will have another variable to keep track of the element we are assessing, called `i` which iterates over the array starting from index 0:

-   If the element is a `0` and it is after the `l`, we should move it to the front of the array.

-   If the element is a `2` and it is before the `r` we should move it ot the right of the array.

Otherwise, for 0s and 1s we should simply move our pointer `i` forward.

If we encounter a 2 and it is equal to the `r` it means we can stop our sorting because we've sorted everything

## Trace

In the below trace, we'll use `|` to indicate the position of the `l` and `r`.

```
[|2,0,2,1,1,0|] i = 2 and is before r, so move it to the end. Decrement r by 1
  i
[|0,2,1,1,0|2] i = 0 and it is before the first_zero, so move it to the front. Increment l by 1
  i
[0|2,1,1,0|2] i = 0 but it is equal to l, so increment i by 1.
 i
[0|2,1,1,0|2] i = 2 and is before r, so move it to the end. Decrement r by 1
   i
[0|1,1,0|2,2] i = 1. Increment i by 1
   i
[0|1,1,0|2,2] i = 1. Increment i by 1
     i
[0|1,1,0|2,2] i = 0 and it is before the first_zero, so move it to the front. Increment l by 1
       i
[0,0|1,1|2,2] i = 1. Increment i by 1
       i
[0,0|1,1|2,2] i = 2 but it is equal to r. Our sorting is done!
         i
```

## Code

```python
class Solution:
    def sortColors(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        l = -1
        r = len(nums)
        i = 0
        while i < len(nums):
            if nums[i] == 0 and i != l:
                del nums[i]
                nums.insert(0,0)
                l += 1
                i += 1
            elif nums[i] == 0 and i == l:
                i += 1
            elif nums[i] == 2 and i != r:
                del nums[i]
                nums.append(2)
                r -= 1
            elif nums[i] == 2 and i == r:
                break
            else:
                i += 1
        print(nums)

s = Solution()
s.sortColors([1,2,0])
s.sortColors([2,0,1])
s.sortColors([2,2,1])
s.sortColors([2])
s.sortColors([2,0,2,1,1,0])
```

## Three-Pointer w/ Swap: O(n) / O(1)

Instead of deleting the element and moving it to the front, we can also swap elements. This makes the code a bit shorter.

-   Instead of initializing `l` at `-1`, we initialize it at `0` or the first index of the array.

-   Instead of initializing `r` at `len(nums)` we initialize it at `len(nums)-1` or the last index of the array.
-   Instead of iterating `i` trhough the entire array, we only need to iterate i until it reaches `first-two` (technically this is true of the previous code as well).

### Trace

In the below trace, we'll use `|` to indicate the position of the `l` and `r`.

```
[2|0,2,1,1,|0] i = 2 and is before right, so swap it with the element at right. Decrement r by 1
 i
[0,0,2,1|1,2] i = 0 so swap it with the element at l (which happens to be itself). Increment i and l by 1
 i
[0,0|2,1|1,2] i = 0 so swap it with the element at l. Increment i and l by 1
   i
[0,0,2|1,|1,2] i = 2 and is before right, so swap it with the element at r. Decrement r by 1
     i
[0,0,1||1,2,2] i = 1. Increment i by 1
     i
[0,0,1||1,2,2] i > r. We are done sorting!
        i
```

### Code

```python
class Solution:
    def sortColors(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        l = 0
        r = len(nums)-1
        i = 0
        while i <= r:
            if nums[i] == 0:
                nums[l], nums[i] = nums[i], nums[l]
                l += 1
                # note that we can increment i here because all the numbers before i are guaranteed to be 0s, so they are already sorted
                i += 1
            elif nums[i] == 2:
                nums[r], nums[i] = nums[i], nums[r]
                r -= 1
                # notice that we don't increment i here. This is because we still need to sort the new number that we swapped with.
            else:
                i += 1


s = Solution()
print(s.sortColors([2, 0, 2, 1, 1, 0]))
```