---
title: Power of Two
number: 231
date: 2020.06.08
tags: ["bit manipulation"]
---

```toc

```

# Overview

Question Source: [Power of Two - LeetCode](https://leetcode.com/problems/power-of-two/)

# Multiplying Up: O(n^2^) / O(1)

## Intuition
We can find all the exponent values of 2 starting with exponent 1:

2^0^ = 1
2^1^ = 2
2^2^ = 4
etc.

When we reach the input `n` then we know that `n` is a power of 2.
If we go past the input `n` then we know that `n` is not a power of 2.

## Code
The downside of this code is that it runs in O(n^2^) time because we have a for loop with an exponential operation inside it.

`2**exp` is an O(n) operation: `2*2*2*2*2...` for `n` times

This O(n) operation is done on the `while` loop and then in the `if` statement, resulting in O(n^2^) runtime.

```python
class Solution:
    def isPowerOfTwo(self, n):
        if n == 0:
            return False
        exp = 0
        while 2**exp <= n:
            if 2**exp == n:
                return True
            exp += 1
        return False

s = Solution()
print(s.isPowerOfTwo(1))
print(s.isPowerOfTwo(16))
print(s.isPowerOfTwo(218))
```

# Multiplying Up: O(log(n)) / O(1)

## Intuition

We can optimize the code above by storing the final value so that it doesn't have to be re-calculated every time. Instead, we only have to multiply the value by 2 in the while loop.

Since our value is doubling for every loop, the time complexity is O(log(n))

## Code

```python
class Solution:
    def isPowerOfTwo(self, n):
        if n == 0:
            return False
        val = 1
        while val <= n:
            if val == n:
                return True
            val *= 2
        return False
```

# Dividing Down: O(log(n)) / O(1)
## Intuition

This is the same concept as the solution above, but instead of multiplying up to the target number, this time we are dividing downwards from the target number.

Since the target number is halving for every loop, the time complexity is O(log(n)).

The intuition is a little more tricky, because we have to have arrive at a few insights:
- No odd number can be a power of 2
- Power of 2 number will never result in an odd number if we keep dividing it by 2.
- Power of 2 number will eventually become 1.
- Odd numbers divided by 2 have a remainder, so we can use that to check if any number becomes odd while we divide it.

If n = 8, then we get: 8 -> 4 -> 2 -> 1. No remainders, it is a power of 2
If n = 9, then 9%2 = 1. It is NOT a power of 2
If n = 24, then we get: 24 -> 12 -> 6 -> 3. 2%2 = 1. It is NOT a power of 2

### ## Code

```python
class Solution:
    def isPowerOfTwo(self, n):
        while n > 0:
            if n == 1:
                return True
            if n%2 != 0:
                return False
            
            n /= 2 
```

A more condensed version:
```python
class Solution:
    def isPowerOfTwo(self, n):
        if n == 0:
            return False
        while n % 2 == 0:
            n //= 2
        return n == 1
```

# Bit Manipulation: O(1) / O(1)
