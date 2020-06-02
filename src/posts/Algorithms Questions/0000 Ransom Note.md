# Ransom Note

* ChunYu: May 03, 2020
* ID: 20200501
* Level: unknown

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

**Note:**You may assume that both strings contain only lowercase letters.

```text
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## ChunYu May 03, 2020

```python
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        mag = list(magazine)
        for i in ransomNote:
            if i in mag:
                mag.remove(i)
            else:
                return False
        return True
"""
[aca]
 ^
[baac]
  ^
"""
```

