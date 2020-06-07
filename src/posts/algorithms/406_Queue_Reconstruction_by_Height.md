---
title: Queue Reconstruction by Height
number: 406
date: 2020.06.06
tags: ["Greedy","Array"]
---

```toc
```

# Overview
## Sources
Question Source: [Queue Reconstruction by Height - LeetCode](https://leetcode.com/problems/queue-reconstruction-by-height/)

## Description
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

**Note:**
The number of people is less than 1,100.
 
**Example**
```
Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
```

# Greedy: O(n^2^) / O(n)
**Note:**
The following
```py
people.sort(key=itemgetter(1),reverse=False)
people.sort(key=itemgetter(0),reverse=True)
```
Can also be written using lambda as follows:
```py
people.sort(people, key=lambda x: (-x[0], x[1]))
```

## Intuition
We first sort the input array by `h` desc, then `k` asc.

```
This 
[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]
becomes
[7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]
```

Then, we can iterate from left to right to find the final index of each person. Assign `k` as the final index. However, if another person has the same index or higher, then increase that person's index by 1.

```
       [7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]
index:    0       1 

       [7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]
index:    0       2       1

       [7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]
index:    1       3       2       0

       [7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]
index:    1       4       3       0       2

       [7, 0], [7, 1], [6, 1], [5, 0], [5, 2], [4, 4]
index:    1       5       3       0       2       4
```

In the code we store the index of each person in a dictionary, with the person as a tuple, so the final dictionary looks like this:

```py
dic = {
    (7,0): 1
    (7,1): 5
    (6,1): 3
    (5,0): 0
    (5,2): 2
    (4,4): 4
}
```

Lastly we iterate through the dictionary to create the final array using the indexes:
```
ans = [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
index:   0      1      2      3      4      5
```

## Code w/ Dictionary
```py
from operator import itemgetter
class Solution:
    def reconstructQueue(self, people):
        people.sort(key=itemgetter(1),reverse=False)
        people.sort(key=itemgetter(0),reverse=True)
        print(people)
        dic = {}
        for item in people:
            for entry in dic:
                if dic[entry] >= item[1]:
                    dic[entry] += 1
            if tuple(item) not in dic:
                dic[tuple(item)] = item[1]
        print(dic)
        ans = [None] * len(people)
        for entry in dic:
            ans[dic[entry]] = list(entry)
        return ans

s = Solution()
print(s.reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))
```

## Code using Insert
Instead of using a dictionary, we could also just directly insert the people into the final array., pushing everyone after them over by 1. This is because when we update the indexes, we are essentially pushing everything after that person in the array up by 1 as well.

```py
class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        people.sort(key = lambda x: (-x[0], x[1]))
        ans = []
        for person in people:
            ans.insert(person[1], person)
        return output
```
