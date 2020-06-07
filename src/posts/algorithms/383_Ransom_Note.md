---
title: Ransom Note
number: 383
date: 2020.05.05
tags: ["string"]
---

```toc
```

# Overview
## Sources
Question Source: [Ransom Note - LeetCode](https://leetcode.com/problems/ransom-note/)

## Description

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

**Note:**You may assume that both strings contain only lowercase letters.

```text
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

# Brute Force: O(n^2^) / O(n)
The time complexity of Python's `in` operator on a list is O(n). Since we have an O(n) operation inside the for-loop, which is also O(n), the total time complexity is O(n^2^).
The space complexity is O(n) since we are creating a list of size n.
```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        # Strings are immutable, so we create a list
        mag = list(magazine)
        for i in ransomNote:
            if i in mag:
                mag.remove(i)
            else:
                return False
        return True
```

# ⭐️ Dictionary: O(n) / O(n)
We can improve time complexity by avoiding a nested loop. Instead, we create a dictionary and then iterate over the dictionary.

The Python `in` operation for dictionary is O(1), so we will have O(n) + O(n) runtime, which is O(n).

Leetcode argues that since there are only 26 letters in the alphabet, the space complexity is really constant at O(1). ¯¯\_(ツ)_/¯ that's true but not inspiring. What if the ransom note now has numbers?

```py
from collections import defaultdict

class Solution:
    def canConstruct(*self*, ransomNote: str, magazine: str) -> bool:
        dic = defaultdict(int)
        for letter in magazine:
            dic[letter] += 1
        for letter in ransomNote:
            if letter in dic and dic[letter] != 0:
                dic[letter] -= 1
                # print(dic)
            else:
                return False
        return True

s = Solution()
print(s.canConstruct('abce','acacebij'))
```

## Stacks: O(n*log(n)) / O(n)
Yes you can implement the solution with stacks, but the dictionary solution is easier and more intuitive.

From Leetcode:

```py
def canConstruct(self, ransomNote: str, magazine: str) -> bool:
    
    # Check for obvious fail case.
    if len(ransomNote) > len(magazine): return False
    
    # Reverse sort the note and magazine. In Python, we simply 
    # treat a list as a stack.
    ransomNote = sorted(ransomNote, reverse=True) 
    magazine = sorted(magazine, reverse=True)
    
    # While there are letters left on both stacks:
    while ransomNote and magazine:
        # If the tops are the same, pop both because we have found a match.
        if ransomNote[-1] == magazine[-1]:
            ransomNote.pop()
            magazine.pop()
        # If magazine's top is earlier in the alphabet, we should remove that 
        # character of magazine as we definitely won't need that letter.
        elif magazine[-1] < ransomNote[-1]:
            magazine.pop()
        # Otherwise, it's impossible for top of ransomNote to be in magazine.
        else:
            return False   
    # Return true iff the entire ransomNote was built.
    return not ransomNote
```