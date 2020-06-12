---
title: Destination City
number: 1436
date: 2020.06.12
tags: ["dictionary/hash", "sets"]
---

```toc

```

# Overview
Question Source: [Destination City - LeetCode](https://leetcode.com/problems/destination-city/)

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
## Intuition

The question states that there are no loops, and it looks like each city can only lead to one other city. Because of this property, we know that all the "Departure" cities are unique, and all the "Arrival" cities are unique. For unique values, we can represent them in a set:

```
Departure: {"London", "New York", "Lima"}
Arrival: {"New York", "Lima", "Sao Paolo"}
```

Notice that New York and Lima are common to both sets. We can subtract the common elements form the Arrival set to isolate Sao Paolo, which is the destination city.

```
Arrival - Departure = {"Sao Paolo"}
```

For a review on how sets work, see [Python Set Operations](https://www.programiz.com/python-programming/set)

The last thing we have to do is to get the value for the only element in the set. We can do this easily using `set.pop()`

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

The below code is the same as above, but written in one line to be fancy 🤷🏻‍♀️:
```py
class Solution(object):
    def destCity(self, paths):
        return (set([path[1] for path in paths]) - set([path[0] for path in paths])).pop()
```
