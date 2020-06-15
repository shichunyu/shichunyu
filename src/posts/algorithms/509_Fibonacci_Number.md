---
title: Fibonacci Number
number: 509
date: 2020.05.25

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/fibonacci-number/

# Recursion w/ Memoization: O(n) / O(n)

```python
fib_cache = {}

def memo_fib(n):
  global fib_cache
  if n == 0 or n == 1:
     return 1
  if n in fib_cache:
     return fib_cache[n]
  ret = memo_fib(n - 1) + memo_fib(n - 2)
  fib_cache[n] = ret
  return ret
```

# Dynamic Programming: O(n) / O(n)

```python
class Solution:
    def fib(self, N):
        cur = 2
        fib = [0,1]
        if N >= 2:
            while cur <= N:
                fib.append(fib[cur-1]+fib[cur-2])
                # print(fib)
                cur += 1
        return fib[N]
```

# Iterative: O(n) / O(1)

```python
class Solution:
    def fib(self, n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        prev_two = 0
        prev_one = 1
        for i in range(2, n+1):
            current = prev_one + prev_two
            prev_two = prev_one
            prev_one = current
        return prev_one
```

# Matrix Exponentiation: O(log(n)) / O(log(n))

Recommended video: [Gaurav Sen Youtube](https://www.youtube.com/watch?v=EEb6JP3NXBI&t=154s)

By using binary exponentiation, we reduce the runtime from N to log(n).

```python
class Solution:
    def fib(self, N):
        if (N <= 1):
            return N

        A = [[1, 1], [1, 0]]
        self.matrix_power(A, N-1)

        return A[0][0]

    def matrix_power(self, A: list, N: int):
        if (N <= 1):
            return A

        self.matrix_power(A, N//2)
        self.multiply(A, A)
        B = [[1, 1], [1, 0]]

        if (N%2 != 0):
            self.multiply(A, B)

    def multiply(self, A: list, B: list):
        x = A[0][0] * B[0][0] + A[0][1] * B[1][0]
        y = A[0][0] * B[0][1] + A[0][1] * B[1][1]
        z = A[1][0] * B[0][0] + A[1][1] * B[1][0]
        w = A[1][0] * B[0][1] + A[1][1] * B[1][1]

        A[0][0] = x
        A[0][1] = y
        A[1][0] = z
        A[1][1] = w
```

