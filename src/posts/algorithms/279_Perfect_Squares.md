---
title: Perfect Squares

number: 279
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/h-index-ii



# Dynamic Programming: O(n*sqrt(n)) / O(n)

```python
import math

class Solution:
    def numSquares(self, n):
        # create list of perfect squares less than n
        perf_sqs = []
        i = 0
        while i <= int(math.sqrt(n)):
            perf_sqs.append(i**2)
            i += 1
        print(perf_sqs)
        # create DP table to keep track of num of perf squares in sum
        table = [float('inf')]*(n+1)
        table[0] = 0
        for i in range(n+1):
            for square in perf_sqs:
                if square > i:
                    break
                table[i] = min(table[i], table[i-square]+1)
        return table[-1]
```



