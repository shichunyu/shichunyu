---
title: Evaluate Reverse Polish Notation
number: 150
date: 2020.05.07
---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/evaluate-reverse-polish-notation

# ✅ Using Stacks @shichunyu on May 7, 2020

```python
class Solution:
    def evalRPN(self, tokens):
        operators = ["+","-","*","/"]
        stack = []

        for i in tokens:
            if i not in operators:
                stack.append(int(i))
            elif  i in operators:
                self._helper(stack, i)
        return stack[0]

    def _helper(self,stack, i):
        right = stack.pop()
        left = stack.pop()
        if i == "+":
            res = left + right
        elif i == "-":
            res = left - right
        elif i == "*":
            res = left * right
        elif i == "/":
            res = int(float(left)/float(right)) # int() makes sure to truncate towards zero. For some reason Leetcode needs float() added in order to work, otherwise the last test (22) fails.
        stack.append(res)

s = Solution()
print(s.evalRPN(["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"])) #165
print(s.evalRPN(["4", "13", "5", "/", "+"]))  # 6
print(s.evalRPN(["2", "1", "+", "3", "*"]))  # 9
print(s.evalRPN(["4","3","-"]))  # 1
print(s.evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))  # 22



"""
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

["2", "1", "+", "3", "*"]
3,3,*
"""
```
