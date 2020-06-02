# 1446. Consecutive Characters

Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

Return the power of the string.

**Example 1:**

```text
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.
```

**Example 2:**

```text
Input: s = "abbcccddddeeeeedcba"
Outv
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
```

**Example 3:**

```text
Input: s = "triplepillooooow"
Output: 5
```

**Example 4:**

```text
Input: s = "hooraaaaaaaaaaay"
Output: 11
```

**Example 5:**

```text
Input: s = "tourist"
Output: 1
```

## Constraints:

* 1 &lt;= s.length &lt;= 500
* s contains only lowercase English letters.

```python
class Solution:
    def maxPower(self, s: str) -> int:
        power = 0
        cur_power = 1
        prev_char = None
        if s == None:
            return -1
        for char in s:
            if char == prev_char:
                cur_power += 1
            else:
                cur_power = 1
            if cur_power > power:
                power = cur_power
            prev_char = char
        return power

s = Solution()
print(s.maxPower("leetcode")) # 2
print(s.maxPower("abbcccddddeeeeedcba")) # 5
print(s.maxPower("triplepillooooow")) # 5
print(s.maxPower("hooraaaaaaaaaaay")) # 11
print(s.maxPower("tourist")) # 1
print(s.maxPower(""))
```

