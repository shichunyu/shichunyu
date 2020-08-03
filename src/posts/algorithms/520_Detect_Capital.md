---
title: Detect Capital
number: 520
date: 2020.08.02

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/detect-capital

# Iterative: O(n) / O(1)

```python
class Solution:
    def detectCapitalUse(self, word):
        title_case = False # first char only is uppercaes
        num_caps = 0
        # O(n) / O(1)
        for i in range(len(word)):
            if word[i].isupper():
                if i == 0:
                    title_case = True
                num_caps += 1
        if title_case == False and num_caps == 0:
            return True
        elif title_case == True and (num_caps == 1 or num_caps == len(word)):
            return True
        else:
            return False

s = Solution()
print(s.detectCapitalUse('Google')) # True
print(s.detectCapitalUse('GLaDos')) # False
print(s.detectCapitalUse('USA')) # True
print(s.detectCapitalUse('leetcode')) # True
```

