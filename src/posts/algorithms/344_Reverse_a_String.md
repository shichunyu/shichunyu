---
title: Reverse a String
number: 344
date: 2020.06.04
tags: ["recursion","two-pointer"]
---

```toc

```

# Resources
**Question Source:** [Reverse String - LeetCode](https://leetcode.com/problems/reverse-string/solution/)
**Useful References:** 

- [Complexity of Python Built-In Functions](https://www.ics.uci.edu/~pattis/ICS-33/lectures/complexitypython.txt)
- [Time and Space complexity analysis of Python’s list.reverse() method - The Coding Bot](https://thecodingbot.com/time-and-space-complexity-analysis-of-pythons-list-reverse-method/)
- [algorithm - Why is the big O of pop() different from pop(0) in python - Stack Overflow](https://stackoverflow.com/questions/34633178/why-is-the-big-o-of-pop-different-from-pop0-in-python)
- [algorithm - Why does Python take O(n) time to remove the first element from a list? - Stack Overflow](https://stackoverflow.com/questions/37582225/why-does-python-take-on-time-to-remove-the-first-element-from-a-list)

## Iterate append  and delete: O(n^2^) / O(n)
Because of the `del s[0]` operation inside the while loop, the time complexity is O(n^2^)
```python
class Solution:
    def reverseString(self, s):
        length = len(s)
        for i in range(len(s)-1,-1,-1):
            s.append(s[i])
        while length > 0:
            del s[0]
            length -= 1
        return s

s = Solution()
print(s.reverseString(["h", "e", "l", "l", "o"]))
```

# Recursive Swap: O(n) / O(n)
```python
class Solution:
    def reverseString(self, s):
        return self._recurse(s,0,len(s)-1)

    def _recurse(self, s, left, right):
        if left < right:
            s[left], s[right] = s[right], s[left]
            self._recurse(s, left+1, right-1)
        return s

s = Solution()
print(s.reverseString(["h", "e", "l", "l", "o"]))
```

# ⭐️ Two-Pointer Swap: O(n) / O(1)
```python
class Solution:
    def reverseString(self, s):
        i = 0
        j = len(s)-1

        while i < j:
            s[i], s[j] = s[j], s[i]
            i += 1
            j -= 1
        return s

s = Solution()
print(s.reverseString(["h", "e", "l", "l", "o"]))
```

# Slice: O(n) / O(n)
```python
class Solution:
    def reverseString(self, s):
        s[:] = s[::-1]
```

# `Reverse()` Function: O(n) / O(1)
The underlying implementation is using the swaps.

```python
class Solution:
    def reverseString(self, s):
        s.reverse()
```

