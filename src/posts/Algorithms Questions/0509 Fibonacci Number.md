# 0509. Fibonacci Number

## 509. Fibonacci Number

The Fibonacci numbers, commonly denoted F\(n\) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

```text
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
```

Given N, calculate F\(N\).

## Top Down - Recursive

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

## Bottom Up - Dynamic Programming

```python
def dp_fib(n):
   partial_answers = [1, 1]
   while len(partial_answers) <= n:
     partial_answers.append(partial_answers[-1] + partial_answers[-2])
   return partial_answers[n]

print memo_fib(5), dp_fib(5)
```

## Dynamic Programming @shichunyu on May 25, 2020

> Runtime: O\(N\) Space: O\(N\)
>
> \`\`\`python class Solution: def fib\(self, N\): """ type N: int rtype: int

```text
    returns the Nth fibonacci number, starting with 0
    """
    cur = 2
    fib = [0,1]
    if N >= 2:
        while cur <= N:
            fib.append(fib[cur-1]+fib[cur-2])
            # print(fib)
            cur += 1
    return fib[N]
```

s = Solution\(\) print\(s.fib\(3\)\) \`\`\`

