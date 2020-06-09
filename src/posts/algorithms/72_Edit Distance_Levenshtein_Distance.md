---
title: Edit Distance (Levenshtein Distance)
number: 72
tags: ["dynamic programming"]
date: 2020.06.01
---

```toc

```

# Description

Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

1. Insert a character
2. Delete a character
3. Replace a character

**Example 1:**

```
Input: word1 = “horse”, word2 = “ros”
Output: 3
Explanation: 
horse -> rorse (replace ‘h’ with ‘r’)
rorse -> rose (remove ‘r’)
rose -> ros (remove ‘e’)
```

**Example 2:**

```
Input: word1 = “intention”, word2 = “execution”
Output: 5
Explanation: 
intention -> inention (remove ’t’)
inention -> enention (replace ‘I’ with ‘e’)
enention -> exention (replace ’n’ with ‘x’)
exention -> exection (replace ’n’ with ‘c’)
exection -> execution (insert ‘u’)

```

# Dynamic Programming Solution - June 1, 2020
Word 1 = “horse”
Word 2 = “ros”

![](72_Edit%20Distance_Levenshtein_Distance/2231F871-96A4-4BD7-A937-50B2F6AE4544.png)

```py
class Solution:
    def minDistance(*self*, word1, word2):
        “””
        Returns the minimum number of operations needed to change word1 into word2
        word1 type: str
        word2 type: str
        rtype: int
        “””
        # word1 = “ros”
        # word2 = “horse”
        table = [[0] * (len(word2)+1) for _ in range(len(word1)+1)]
        print(table)

        # populate the first row and first column
        for row in range(1,len(word1)+1): # 0 - 3
            table[row][0] = table[row-1][0] + 1
        for col in range(1,len(word2)+1): # 0 - 5
            table[0][col] = table[0][col-1] + 1
        print(table)
                
        # populate the rest of the table
        for row in range(1, len(word1)+1):
            for col in range(1, len(word2)+1):
                # if the characters match, simply “cancel them out”
                if word1[row-1] == word2[col-1]:
                    table[row][col] = table[row-1][col-1]
                else:
                    table[row][col] = min(table[row-1][col]+1,table[row][col-1]+1,table[row-1][col-1]+1)
        print(table)
        return table[-1][-1]

s = Solution()
print(s.minDistance(“ros”,”horse”))
```