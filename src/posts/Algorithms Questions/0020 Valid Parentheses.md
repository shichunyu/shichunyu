# 0020. Valid Parentheses

## 20. Valid Parentheses

Given a string containing just the characters '\(', '\)', '{', '}', '\[' and '\]', determine if the input string is valid.

An input string is valid if:

* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.

Note that an empty string is also considered valid.

Example 1:

```text
Input: "()"
Output: true
```

Example 2:

```text
Input: "()[]{}"
Output: true
```

Example 3:

```text
Input: "(]"
Output: false
```

Example 4:

```text
Input: "([)]"
Output: false
```

Example 5:

```text
Input: "{[]}"
Output: true
```

## ✅ Stacks @shichunyu on May 5, 2020

`O(N) Time & Space` Runtime: 28 ms, faster than 72.47% of Python3 online submissions for Valid Parentheses. Memory Usage: 13.9 MB, less than 5.22% of Python3 online submissions for Valid Parentheses.

```python
class Solution:
    def isValid(self, s: str) -> bool:
        parens = ['(',')','[',']','{','}']
        stack = []

        if len(s) == 0:
            return True
        elif len(s) == 1 or parens.index(s[0]) % 2 != 0:
            return False

        for c in s:
            c_idx_p = parens.index(c)

            if c_idx_p % 2 == 0: # modulus checks if there is a remainder, if yes, output 1
                stack.append(c)
            else:
                if len(stack) != 0:
                    idx_last_stack_item = parens.index(stack[len(stack)-1])
                    if c_idx_p == idx_last_stack_item + 1:
                        pop = stack.pop()
                    else:
                        return False
                else:
                    return False

        if len(stack) == 0:
            return True
        else:
            return False

s = Solution()
print(s.isValid("{[]}")) # true
print(s.isValid("")) # true
print(s.isValid("(")) # false
print(s.isValid("()")) # true
print(s.isValid("[])")) # false
```

## ⭐️ Elegant Fast Solution

20ms

```python
def isValid(self, s):
    bracket_map = {"(": ")", "[": "]",  "{": "}"}
    open_par = set(["(", "[", "{"])
    stack = []
    for i in s:
        if i in open_par:
            stack.append(i)
        elif stack and i == bracket_map[stack[-1]]:
                stack.pop()
        else:
            return False
    return stack == []
```

