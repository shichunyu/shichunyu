# 518_Coin_Change_II
```
---
title: Coin Change II
number: 518
tags: ["dynamic programming"]
date: 2020.05.31
---
```

```toc
```

# Overview
## Sources
Question Source:
Helpful Explanations: Algoexpert.io

## Description

You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.
 
```
Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

```
Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
```

```
Example 3:
Input: amount = 10, coins = [10] 
Output: 1
```
 
**Note:**
You can assume that
* 0 <= amount <= 5000
* 1 <= coin <= 5000
* the number of coins is less than 500
* the answer is guaranteed to fit into signed 32-bit integer

## ⭐️ Dynamic Programming: O(a*c) / O(a*c)

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

# Dynamic Programming: O(a*c) / O(a)