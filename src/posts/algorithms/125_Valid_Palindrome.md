---
title: Valid Palindrome
number: 125
date: 2020.08.03
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/valid-palindrome

# Two-pointer: O(n) / O(1)

This is a rather long version

```python
class Solution:
    def isPalindrome(self, s):
        if s == "":
            return True
        left, right = 0, len(s)-1
        # ensure both pointers start on a letter
        while not s[left].isalnum():
            left += 1
            if left > len(s)-1:
                return True
        while not s[right].isalnum():
            right -= 1
            if right < 0:
                return True
        # once both pointers are on a letter, we can start checking
        while s[left].lower() == s[right].lower():
            if left >= right:
                return True
            left += 1
            right -= 1
            while not s[left].isalnum():
                left += 1
            while not s[right].isalnum():
                right -= 1
        return False

s = Solution()
print(s.isPalindrome("")) # True
print(s.isPalindrome(" ")) # True
print(s.isPalindrome(".,")) # True
print(s.isPalindrome(".,a")) # True
print(s.isPalindrome("0P")) # False
print(s.isPalindrome("a.")) # True
print(s.isPalindrome("kitty")) # False
print(s.isPalindrome("tacocaT")) # True
print(s.isPalindrome("A man, a plan, a canal: Panama")) # True
```

# Two-Pointer (shorter): O(n) / O(1)

```python
class Solution:
    def isPalindrome(self, s):
        if s == "":
            return True
        left, right = 0, len(s)-1
        while left < right:
            while left < right and not s[left].isalnum():
                left += 1
            while left < right and not s[right].isalnum():
                right -= 1
            if left < right and s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True

s = Solution()
print(s.isPalindrome("")) # True
print(s.isPalindrome(" ")) # True
print(s.isPalindrome(".,")) # True
print(s.isPalindrome(".,a")) # True
print(s.isPalindrome("0P")) # False
print(s.isPalindrome("a.")) # True
print(s.isPalindrome("kitty")) # False
print(s.isPalindrome("tacocaT")) # True
print(s.isPalindrome("A man, a plan, a canal: Panama")) # True
```

