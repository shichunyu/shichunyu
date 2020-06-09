---
title: Bike Rental Scheduling
number: 0
date: 2020.05.24
tags: ["heaps"]
---

```toc

```

# Overview
You are a bike shop. You rent bikes out to people every day, but you need to order the bikes in advance for a given day. As such, you need to know how many bikes will be used on any given day. However, if a bike is used in the morning for example, we can use it again in the evening(or whenever it is returned to the shop)

To calculate the negative of a number in binary with Two's Complement, the formula is: (2^3^ - n)~2~

> input: list of times bikes are checked out from output: how many bikes we need for that given day  

inline `code`

```text
example: [[8, 11], [15, 16]]
output: 1

example: [[8, 11], [10, 16]]
output: 2

example: [[8, 11], [9, 10], [10, 16]]
output: 3
```

# Building Dictionary of every bike's schedules
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24

1. start time
2. does the start time of next one overlap?
3. is there a free bike?
	1. if yes, use that bike, if no, initialize a new bike

Data structure: nested array, or a dictionary

print(s.numBikes([[1,5],[2,4],[3,9],[4,8],[5,11]])) #3

```text
dic = {
    1: [1,5],[5,11]
    2: [2,4],[4,8]
    3: [3,9]
}
```

Code Steps:

* for each schedule item, check if first dic item has a conflict.
* if not, add to first dic item.
* if yes, look to next dic item. repeat until no dic items left
* if no dic item left, create new dic item, add the item.

```python
class Solution:
    def numBikes(self, schedule):
        """
        type schedule: list[list[]]
        rtype: int 
        """
        dic = {}
        numbikes = 0
        if schedule != []:
            dic[1] = []
            numbikes = 1
        for item in schedule:
            i = 1
            added = False
            if dic[i] == []:
                dic[i].append(item)
                continue
            # check schedule for bike i
            while i in dic:
                conflict = False
                # check every bike schedule item
                for bike_item in dic[i]:
                    # is the schedule item conflicting with this bike i's schedule item j
                    if bike_item[0] <= item[0] < bike_item[1]:
                        conflict = True
                        break
                # if no conflict after checking every time, add item to bike i's schedule
                if not conflict:
                    dic[i].append(item)
                    added = True
                    break
                # if conflict with the bike, then try the next bike
                else:
                    i += 1
            # add a new bike, and add item to its schedule
            if added == False:
                dic[i] = []
                dic[i].append(item)
                numbikes += 1
        print(dic)
        return numbikes

s = Solution()
print(s.numBikes([[8,11], [15,16]])) # 1
print(s.numBikes([[8,11], [10,16]])) #2
print(s.numBikes([[8,11],[9,10],[10,16]])) #2
print(s.numBikes([[1,5],[2,4],[3,9],[4,8],[5,11]])) #3
print(s.numBikes([[1,5],[2,4],[3,9],[4,8],[5,11],[8,10]])) #3
print(s.numBikes([])) #0
```

# Heaps Solution
use heaps because we want to know when the next bike is available as soon as possible

```python
minheap = [4,5,9]
minheap = [5,8,9]
minheap = [8,9,11]
```
