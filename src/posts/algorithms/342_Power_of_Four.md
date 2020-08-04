---
title: Power of Four
number: 342
date: 2020.08.04
tags: ["bit manipulation"]

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/power-of-four/

# Bit Manipulation (with Loop): O(n) / O(1)

Time Complexity: `n` is the number of digits we have to search before finding the first right_most digit.

## Intuition

In binary (base-2) we can easily find if a number is a power of 2

Since 4 = 2^2^, if we can also use base 2 to find a number is a power of 4.

```
 256 128 64 32 16 8 4 2 1
   0   0  0  0  0 0 0 0 0 <- powers of 2 (base 2)
   0      0     0   0   0 <- powers of 4 (base 4)
```

A power of 4 can only have a single digit `1` with the rest as `0`s.

```
1  =       1 = 0 zeroes
4  =     100 = 2 zeroes
16 =   10000 = 4 zeores
64 = 1000000 = 6 zeroes
etc.
```

### Check placement of right-most bit

The number of zeroes before the first digit must be **even** or divisble by 2, meaning the remainder must be `0`. We can check the number of zeroes by finding the right-most bit by taking `1` and doing left-shifts on it.

We use `&` and the number `1` to find the right-most `1` digit.

```
1 & 1 = 1 & 1 = 1 -> no zeroes
1 & 4 = 1 & 100 = 0 -> failed
```

In the case of `1&4` since the result is `0` we need to left-shift on `1` until the result is `1`:

```
right_bit = 1
right_bit & 4 = 1 & 100 = 0 -> one zero
right_bit = << right_bit
right_bit & 4 = 10 & 100 = 0 -> two zeros
right_bit = << right_bit
100 & 4 = 100 & 100 = 1 -> success! found the right bit
```

### Check if number is equal to right-most bit

Additionally, we need to make sure there are no other zeroes to the left of the right-most `1`. Basically, the right-most bit, if it has an even number of zeroes, is already a power of 4. So we need to see if the number is equal to the right_most bit. We can check this using "or" `|` and seeing if the result returns the right_bit back to us.

```
    110 (6) <- not a power of 4
  | 010
    110 <- Fail: the number 6 or right_most bit does not return right_most bit
    
    010 (4) <- power of 4
  | 010
    010 <- Success! the number 4 or right_most does return right_most bit.
```

## Code

```python
class Solution:
    def isPowerOfFour(self, num):
        # 0 or negative numbers are not powers of 4
        if num <= 0:
            return False
        # first find the right_most bit
        right_bit = 1
        num_zeroes = 0
        while right_bit & num != right_bit:
            right_bit = right_bit << 1
            num_zeroes += 1
        # check if the number is a power of 4
        if num_zeroes % 2 == 0 and right_bit | num == right_bit:
            return True
        else:
            return False

s = Solution()
print(s.isPowerOfFour(0))
print(s.isPowerOfFour(16))
print(s.isPowerOfFour(10))
print(s.isPowerOfFour(32))
print(s.isPowerOfFour(64))
```

# Bit Manipulation (without Loop): O(1) / O(1)

This solution assumes that the system is using 32 bits so the max integer value possible is 2^32^.

```python
class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        return (
            # check if greater than zero
            num > 0 
            # check if a power of two
            and num & (num - 1) == 0 
            # check if 1 digit is in even spot
            # 0xaaaaaaaa is 101010101010... with 32 places
            and num & 0xaaaaaaaa == 0
        )

s = Solution()
print(s.isPowerOfFour(0))
print(s.isPowerOfFour(16))
print(s.isPowerOfFour(10))
print(s.isPowerOfFour(32))
print(s.isPowerOfFour(64))
```

# Bit Manipulation (without Loop): O(1) / O(1)

In this case, the trick is to figure out that a power of four minus 1 must be divisible by 3.

In any 3 consecutive integers, one of them must be divisible by 3:

```
1,2,3
5,6,7
4,5,6
...
```

If our number is a power of 4, then the numbers to the left and right of it would be:

```
  3,   4,   5
 15,  16,  17
 63,  64,  65
127, 128, 129
```

As you can see, the number to the left of the power of 4 is always divisible by 3. So, `num - 1` must be divisible by 3.

```python
class Solution(object):
    def isPowerOfFour(self, num):
        return (
            # check if power of two
            num & (num - 1) == 0 
            # check if num - 1 is divisible by 3
            and (num - 1) % 3 == 0
        )

s = Solution()
print(s.isPowerOfFour(0))
print(s.isPowerOfFour(16))
print(s.isPowerOfFour(10))
print(s.isPowerOfFour(32))
print(s.isPowerOfFour(64))
```

