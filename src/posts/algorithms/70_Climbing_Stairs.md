---
title: Climbing Stairs
number: 70
date: 2020.06.02
tags: [“recursion”, “dynamic programming”]
---

```toc

```

# Resources
Question Source: https://leetcode.com/problems/climbing-stairs/

Video Explanation: [Back-to-Back SWE Youtube](https://www.youtube.com/watch?v=NFJ3m9a1oJQ)

# Recursive Solutions
## Intuition

* At each step, there is a decision to either take one step, or two steps.
* The decision tree looks like the following, assuming we start on “floor” 0.
* The left branch is taking 1 step, the right branch is taking 2 steps.
* Each node represents the “floor” we are on after taking the step(s)

```text
                                    0
                /                                       \
                1                                        2
        /                   \                  /                   \
       2                     3                3                     4
 /         \          /          \     /          \           /           \
3           4        4            5   4            5         5             6
```

**Insight:** We can already see from the decision tree above that there are overlapping subproblems. For example:

* on both floor 1 and floor 0 we have to solve floor 2
* on both floor 1 and floor 2 we have to solve floor 3

## Basic Recursive Solution: O(2^n^) / O(n)
We can write a recursive function that goes through the tree: 1. The total number of paths = the total number of leaf nodes at the bottom of the tree 2. Our recursive function should return “1” or increment the answer by 1 whenever it reaches the top floor (which is the bottom of the tree). This is our *base case*. 3. Our recursive function should increment by “1” every time the top floor is reached.

**Runtime:** 2^n^ because at every step there are 2 possible decisions. 
**Space:** O(n) because the height of the recursion stack is n

```python
class Solution:
    def climbStairs(self, n):
        """
        Returns the total number of possible ways to climb stairs by taking either 1 step or 2 steps at each steps. n is the number of total steps.
        n type: int
        rtype: int
        """
        cur_floor = 0
        ans = 0

        ans = self.recursion(n, cur_floor, ans)
        return ans

    def recursion(self, n, cur_floor, ans):
        if cur_floor == n:
            ans += 1
            return ans
        if cur_floor <= n-1:
            ans = self.recursion(n, cur_floor+1, ans)
        if cur_floor <= n-2:
            ans = self.recursion(n, cur_floor+2, ans)

        return ans
```

## Recursion with Memoization: O(n) / O(n)
The previous solution has an exponential runtime, because we solve the same problems over and over. We can memoize the problems we already solved: 1. Every time we go up to a certain floor, cache the solution for that floor in the memo 2. When we revisit a floor, if that floor has already been cached, look up the solution in the memo.

**Runtime:** O(N) because we evaluate every single “floor” only once, and there are N floors **Space:** O(N) because we have the height of recursion stack is still N

```python
class Solution:
    def climbStairs(self, n):
        """
        Returns the total number of possible ways to climb stairs by taking either 1 step or 2 steps at each steps. n is the number of total steps.
        n type: int
        rtype: int
        """
        cur_floor = 0
        ans = 0
        memo = {}

        ans = self.recursion(n, cur_floor, ans, memo)
        return ans

    def recursion(self, n, cur_floor, ans, memo):
        if cur_floor == n:
            ans += 1
            memo[cur_floor] = ans
            return ans
        if cur_floor in memo:
            ans += memo[cur_floor]
            return ans
        else:
            if cur_floor <= n-1:
                ans = self.recursion(n, cur_floor+1, ans, memo)
                memo[cur_floor] = ans
            if cur_floor <= n-2:
                ans = self.recursion(n, cur_floor+2, ans, memo)
                memo[cur_floor] = ans
        return ans
```

**A slightly different way to write the above code** Here the top floor returns “1” instead of incrementing the answer by 1

```python
class Solution:
    def climbStairs(self, n):
        """
        Returns the total number of possible ways to climb stairs by taking either 1 step or 2 steps at each steps. n is the number of total steps.
        n type: int
        rtype: int
        """
    floor = 0
    memo = {}

    return recursion(n,floor,memo)

    def recursion(n,floor,memo):
        ans = 0
        if floor in memo:
            return memo[floor]
        if floor == n:
            return 1
        if floor + 1 <= n:
            ans += recursion(n,floor+1,memo)
        if floor + 2 <= n:
            ans += recursion(n,floor+2,memo)
        memo[floor] = ans
        return ans
```

# Dynamic Programming Solutions
## Linear Space - Tabulation: O(n) / O(n)
If we run our recursive solution on many values of n, we will begin to see a pattern

```text
  n = 1,2,3,4,5, 6, 7, 8, 9,10
ans = 1,2,3,5,8,13,21,34,55,89
```

The sequence for `ans` is actually the fibonacci sequence.

`climbStairs(n) = climbStairs(n-1)+climbStairs(n-2)`

We can use this insight for a Dynamic Programming solution.

**Runtime:** O(n) because we have to evaluate n numbers 
**Space:** O(n) because we are storing an array of length n

```python
class Solution:
    def climbStairs(self, n):
        """
        Returns the total number of possible ways to climb stairs by taking either 1 step or 2 steps at each steps. n is the number of total steps.
        n type: int
        rtype: int
        """
        class Solution:
    def climbStairs(self, n):
        ways = [1,1]
        for i in range(2,n+1):
            ways.append(ways[i-1] + ways[i-2])
        print(ways)
        return ways[-1]

s = Solution()
print(s.climbStairs(5))
```

## Constant Space - Pure Fibonacci: O(n) / O(1)
Since the solution is a Fibonacci sequence, we don’t even need to tabluate, and can save space by doing the same solution as [509. Fibonacci Number.md](https://shichunyu.github.io/algos/509_Fibonacci_Number)

**Runtime:** O(n) because we have to evaluate N numbers 
**Space:** O(1) because we are only storing values in variables

```python
class Solution:
    def climbStairs(self, n):
        """
        Returns the total number of possible ways to climb stairs by taking either 1 step or 2 steps at each steps. n is the number of total steps.
        n type: int
        rtype: int
        """
        first_step = 1
        second_step = 2
        third_step = 3
        if n == 1:
            return first_step
        for i in range(3,n+1):
            third_step = first_step + second_step
            first_step = second_step
            second_step = third_step
        return second_step
```

Here is how the algorithm plays out:

```text
climbStairs(5)

for 3:
    third_step = 3
    first_step = 2
    second_step = 3

for 4:
    third_step = 5
    first_step = 3
    second_step = 5

for 5:
    third_step = 8
    first_step = 5
    second_step = 8

return second_step // 8
```

> Note: You may have noticed that by the time we hit the return, second_step = third_step. But the reason we return second_step instead of third_step is for the case where n = 2. In that case, we skip the for loop and return second_step = 2.  

- - - -
**Question Source:** [Leetcode](https://leetcode.com/problems/climbing-stairs/)
