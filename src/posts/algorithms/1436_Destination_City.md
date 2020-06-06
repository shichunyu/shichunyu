---
title: Destination City
number: 1436
date: 2020.06.05
tags: []
---

```toc
```

# Overview
## Source
Question Source: [Destination City - LeetCode](https://leetcode.com/problems/destination-city/)

## Description

You are given the array `paths`, where `paths[i] = [cityAi, cityBi]` means there exists a direct path going from `cityAi` to `cityBi`. *Return the destination city, that is, the city without any path outgoing to another city.*

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

**Example 1:**

```text
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
```

**Example 2:**

```text
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".
```

**Example 3:**

```text
Input: paths = [["A","Z"]]
Output: "Z"
```

**Constraints:**

* `1 <= paths.length <= 100`
* `paths[i].length == 2`
* `1 <= cityAi.length, cityBi.length <= 10`
* `cityAi != cityBi`
* All strings consist of lowercase and uppercase English letters and the space character.

# Dictionary: O(n) / O(n)
```python
class Solution:
    def destCity(self, paths):
        dic = {}
        for city in paths:
            dic[city[0]] = city[1]
        # print(dic)
        cur_city = paths[0][0]
        while cur_city in dic:
            cur_city = dic[cur_city]
        return cur_city

s = Solution()
s.destCity([["B","C"],["D","B"],["C","A"]]) # A
s.destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]) # Sao Paulo
s.destCity([["A","Z"]]) # Z
```

# Two Sets: O(n) / O(n)
## Note
Note that this:
```py
depart = set(paths[i][0] for i in range(len(paths)))
arrive = set(paths[i][1] for i in range(len(paths)))
```
And this
```py
depart = set(path[0] for path in range(len(paths)))
arrive = set(path[1] for path in range(len(paths)))
```
Are the same. IMO the second one is more readable.

## Code
```py
class Solution:
    def destCity(self, paths):
        depart = set(path[0] for path in range(len(paths)))
        arrive = set(path[1] for path in range(len(paths)))
        return (arrive - depart).pop()
```

The below code is the same as above, but written in one line to be fancy:
```py
class Solution(object):
    def destCity(self, paths):
        return (set([path[1] for path in paths]) - set([path[0] for path in paths])).pop()
```