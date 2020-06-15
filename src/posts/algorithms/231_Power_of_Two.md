---
title: Power of Two
number: 231
date: 2020.06.08
tags: ["bit manipulation"]
---

```toc

```

# Resources

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

## Code

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

There's two ways of doing bit manipulation. First, let's look at the unique properties of powers of two in binary:

-   2^0^ = 1 => 0001~2~ 
-   2^1^ = 2 => 0010~2~
-   2^2^ = 4 => 0100~2~
-   2^3^ = 8 => 1000~2~

As we can see, in binary, any powers of two only has a single `1` digit. How can we use that to our advantage?

## Checking the right-most 1digit

If a number if binary, then the right-most `1` is the only `1` to exist, so it should be the same as the original number.

**For example:**

*   4 in binary is `0100`. The right-most `1` digit is: `0100`. Since `0100` = `0100` = 4 we know that 4 is a power of two.
*   7 in binary is `0111`. The right-most `1` digit is: `0001`. Since `0001` != `0111` or 7, we know that `0111` is not a power of two.

The way to check the right-most `1` digit would be to use the formula:

>   `x&(-x) = x`

How does this formula work?

`x` is our original number

`-x` is the negative of our original number, in binary.

Python uses **Two's Complement** so `-x = ~x + 1`. If `x&(-x) = x` then the number is a power of two.

### Trace

Let's see a trace of a few examples to see how the formula works:

``` 
x = 4          x = 7         x = 6          x = 5
0100  x        0111  x       0110  x        0101  x
1011 ~x        1000 ~x       1001 ~x        1010 ~x
1100 -x        1001 -x       1010 -x        1011 -x
                      
0100  x        0111 x        0110  x        0101  x
1100 -x        1001 -x       1010 -x        1011 -x
0100  x&(-x)   0001 x&(-x)   0010  x&(-x)   0001  x&(-x)    
```

 When the number is a power of 2, `x&(-x) = x` and that is the formula we can use in our code below.

### Code

```python
class Solution:
    def isPowerOfTwo(self, n):
        # edge case
        if n == 0:
            return False
        # formula
        return n & (-n) == n
```

## Removing the right-most 1 digit

Since powers of 2 only have a single `1` digit in binary, if we were to remove the right-most `1` digit, since that is the *only* `1` digit, then the value of the number should become `0`. This wouldn't work if the number is not a power of 2.

For example:

*   4 in binary is `0100`. The right-most `1` digit is: `0100`. Remove it and we'll get `0000`. Since the result is `0`, we know that 4 is a power of 2.
*   7 in binary is `0111`. The right-most `1` digit is: `0001`. Remove it and we'll get `0110` which is `6`. Since the result is not `0` we know that 7 is not a power of 2.

The way to check if removing the right-most `1` digit will result in `0` is to use the formula

>   `x&(x-1) = 0 `

`x` is our original number

`x-1` is our original number minus 1.

If the result is `0` then we know the number is a power of 2.

### Trace

Let's see a trace of a few examples to see how the formula works:

```
x = 4          x = 7         x = 6          x = 5
0100  x        0111  x       0110  x        0101  x
0011  x-1      0110  x-1     0101  x-1      0100  x-1
0000  x&(x-1)  0110  x&(x-1) 0100  x&(x-1)  0100  x&(x-1)  
```

When the number is a power of 2, `x&(x-1) = 0` and that is the formula we use in our code below.

### Code

```python
class Solution:
    def isPowerOfTwo(self, n):
        # edge case
        if n == 0:
            return False
        # formula
        return n & (n-1) == 0
```

