---
title: Is Subsequence
number: 392
date: 2020.06.09
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/is-subsequence/

# Two-Pointer: O(n) / O(1)

## Intuition

```
Given t_str = 'abcdef'
Given s_str = 'cef'
```

Since the subsequence has to be in the same order as the original string, we only need to iterate through the original string `t_str` once in order to check if `s_str` is a subsequence.

We can use 2 pointers starting from the first index of each string, and check for matches.
Let's call the `t` pointer for `t_str` and `s` the pointer for `s_str`

## Trace: Positive Case

```
Given t_str = 'abcdef'
Given s_str = 'cef'
```

```
abcdef   cef
t        s    no match - move t forward
abcdef   cef
 t       s    no match - move t forward
abcdef   cef
  t      s    match! - move both t and s forward
abcdef   cef
   t      s   no match - move t forward
abcdef   cef
    t     s   match! - move both t and s foward
abcdef   cef
     t     s  match! - move both t and s foward
abcdef   cef
      t     s both t and s are now at an outside of range. Return True
```

## Trace: Negative Case

```
Given t_str = 'abcdef'
Given s_str = 'fcd'
```

```
abcdef   fcd
t        s    no match - move t forward
abcdef   fcd
 t       s    no match - move t forward
abcdef   fcd
  t      s    no match - move t forward
abcdef   fcd
   t     s    no match - move t forward
abcdef   fcd
    t    s    no match - move t forward
abcdef   fcd
     t   s    match! - move both t and s forward
abcdef   fcd
      t   s   t is outside of range, but s is not. Return False.
```

## Code

```python
class Solution:
    def isSubsequence(self, s_str, t_str):
        """
        Checks if s is a subsequence of t
        s type: str
        t type: str
        rtype: bool
        """
        s = 0
        t = 0
        while s <= len(s_str)-1:
            if t > len(t_str)-1 and s <= len(s_str)-1:
                return False
            if s_str[s] == t_str[t]:
                t += 1
                s += 1
            else:
                t += 1
        return True

s = Solution()
print(s.isSubsequence('a','a')) # true
print(s.isSubsequence('abb','babb')) # true
print(s.isSubsequence('hgc','ahbgdc')) # true
print(s.isSubsequence('bbb','bbbbb')) # true
print(s.isSubsequence('ab','a')) # false
print(s.isSubsequence('hac','ahbgdc')) # false
```