---
title: Coin Change II
number: 518
date: 2020.05.31
---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/coin-change-2
Helpful Explanations: Algoexpert.io

# ⭐️ Dynamic Programming: O(a*c) / O(a*c)

```py
class Solution:
    def change(self, amount, coins) -> int:
        """
        Given a set of coin denominations, return the total number of combinations that sum up to given amount.
        amount type: int
        coins type: List[int]
        rtype: int
        """
        # Initiate our DP table
        table = [[0] * (amount + 1) for _ in range(len(coins)+1)]
        # 0 coins and 0 amount has 1 way: no coins
        table[0][0] = 1
        # print(table)
        for i in range(1, len(coins)+1):
            for j in range(0, amount+1):
                coin_val = coins[i-1]
                amount = j
                # if the coin value is higher than the amount, we cannot use it
                # so inherit the previous coin's number of ways
                if coin_val > amount:
                    table[i][j] = table[i-1][j]
                # otherwise, the number of ways is equal to:
                # num of ways(using 1 more of current coin) + num of ways(without using 1 more of current coin) 
                else:
                    table[i][j] = table[i-1][j] + table[i][j-coin_val]
        print(table)
        return table[-1][-1]

s = Solution()
print(s.change(5,[1,2,5])) # 4
print(s.change(5,[5,2,1])) # 4
print(s.change(500, [1, 2, 5]))  # 12701
print(s.change(3,[2])) # 0
```
