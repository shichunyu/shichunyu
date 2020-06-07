---
title: Random Pick with Weight
number: 528
date: 2020.06.05
tags: ["binary search"]
---

```toc
```

# Overview
## Sources
Question Source: [Random Pick with Weight - LeetCode](https://leetcode.com/problems/random-pick-with-weight/)

## Description
Given an array w of positive integers, where w[I] describes the weight of index I, write a function pickIndex which randomly picks an index in proportion to its weight.

**Note:**

    1 <= w.length <= 10000
    1 <= w[I] <= 10^5
    pickIndex will be called at most 10000 times.

**Example 1:**

```
Input: 
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
```

**Example 2:**

```
Input: 
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
```

**Explanation of Input Syntax:**

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.

## Explanation
This question is about randomly generating an index based on probability.

For input `w = [1,3]` the probability for index `i` is as follows:

```
i = 0: 1/(3+1) = 1/4 = 25%
i = 1: 3/(3+1)  = 3/4 = 75%
```

When the `pickIndex()` function is called, randomly pick an index based on the probability.

# Brute Force: O(n^2^) / O(n^2^)
Where _s_ is the sum of all weights in the array.

## Intuition
The idea is same as picking up objects from a bag. For `[4,2]` there are four 0 objects, and two 1 objects. So it is the same as picking up any object from `[0,0,0,0,1,1]`.

We can write an algorithm to create the array that represents the "bag" and then use `randint()` to pick up any random item from the bag.

The problem with this solution is the the time and space complexity are horrible, because if we have simply an input of `[10000000000,10000000000]` we will be creating an array of length 20 Billion, meaning 20B runtime operations and 20B in space.

In the worst case scenario such as input being `[4,4,4,4]` we will have a runtime and space complexity of `16` which is O(n^2^).

## Code

```py
from random import random, randint

class Solution:
    def __init__(self, w):
        self.w = w

    def pickIndex(self) -> int:
        if len(self.w) < 1:
            return -1
        sum = 0
        for weight in self.w:
            sum += weight
        array = []
        for i in range(len(self.w)):
            counter = self.w[i]
            while counter > 0:
                array.append(i)
                counter -=1
        # print(randint(0,sum))
        # print(array)
        random_int = randint(0,len(array)-1)
        return array[random_int]

obj = Solution([4,2])
print(obj.pickIndex())
obj = Solution([3,2,4])
print(obj.pickIndex())
```

We know that `math.random()` returns a value between 0 and 1. We need to combine this with the weight of the index.

# Cumulative Sum
## Linear Search: O(n) / O(n)

```py
from random import random, randint

class Solution:
	  # O(n) / O(n)
    def __init__(self, w):
        self.w = w

	  # O(n) / O(1)
    def pickIndex(self) -> int:
        if len(self.w) < 1:
            return -1
        array = [self.w[0]]
        for i in range(1,len(self.w)):
            array.append(self.w[i]+array[i-1])
        num = randint(1,array[-1])
        # print(array)
        # print(num)
        for i in range(len(array)):
            if array[i] >= num:
                return i
```

## Binary Search: O(log(n)) / O(n)
Since `array` will always be in sorted order, we can find the position of the target `num` faster by using binary search.

```py
from random import random, randint

class Solution:
    def __init__(self, w):
        self.w = w
        self.array = [self.w[0]]
        for i in range(1,len(self.w)):
            self.array.append(self.w[i]+self.array[i-1])

    def pickIndex(self) -> int:
        num = randint(1,self.array[-1])
        # binary search
        left = 0
        right = len(self.array)
        while left < right:
            middle = left + (right - left) // 2
            if num > self.array[middle]:
                left = middle + 1
            elif num <= self.array[middle]:
                right = middle
        return left

obj = Solution([4,2])
print(obj.pickIndex())
obj = Solution([3,2,4])
print(obj.pickIndex())
```
