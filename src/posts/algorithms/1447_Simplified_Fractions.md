---
title: Simplified Fractions
number: 1447
date: 2020.05.16

---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/simplified-fractions

# Recursion
How to detect if a fraction is "simple"?

ODD DENOMINATOR ans = [(1/9), (2/9), (4/9), (5/9), (7/9), (8/9)] divisors = {3}

1/9 2/9 9%2 != 0 3/9 9%3 = 0 -> ADD TO DIVISORS LIST 4/9 9%4 != 0 5/9 9%5 != 0 6/9 9%6 != 0, 6%3 = 0 7/9 8/9

EVEN DENOM = 14

ans = [] divisors = {}

1/14 2/14 4/14 14%4 !=0 14%2

### Recursive
Since the question wants us to include all the simple fractions for every n <= n, we will recurse the function with every n - 1.

```python
class Solution:
    def simplifiedFractions(self, n):
        return self._recurse(n, [])

    def _recurse(self, n, ans):
        ans = ["1/" + str(n)]
        divisors = set()
        if n == 1:
            return []
        for num in range(2, n):
            fraction = str(num) + "/" + str(n)
            new = fraction not in ans
            if n%num == 0:
                divisors.add(num)
            else: # check if divided by divisor of n
                if not divisors and new:
                    ans.append(fraction)
                else:
                    add_to_ans = True
                    for divisor in divisors:
                        if num%divisor == 0:
                            add_to_ans = False
                            break
                    if add_to_ans == True and new:
                        ans.append(fraction)

        ans += self._recurse(n-1,ans)
        return ans


s = Solution()
print(s.simplifiedFractions(1))
print(s.simplifiedFractions(2))
print(s.simplifiedFractions(3))
print(s.simplifiedFractions(5))
print(s.simplifiedFractions(9))
print(s.simplifiedFractions(10))
# print(s.simplifiedFractions(15))
# print(s.simplifiedFractions(23))
```
