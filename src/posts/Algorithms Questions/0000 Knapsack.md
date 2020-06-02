# 1/0 Knapsack Problem
- [1/0 Knapsack Problem](#10-knapsack-problem)
- [Top-Down Recursive Apprach](#top-down-recursive-apprach)
    - [Intuition](#intuition)
    - [Implementation](#implementation)
- [Dynamic Programming Approach @shichunyu on May 29, 2020](#dynamic-programming-approach-shichunyu-on-may-29-2020)

See the question here referenced at [Byte-to-Byte](https://www.byte-by-byte.com/01knapsack/)

Given a list of items with values and weights, as well as a max weight, find the maximum value you can generate from items where the sum of the weights is less than the max.

```
Example:

items = {(w:1, v:6), (w:2, v:10), (w:3, v:12)}
maxWeight = 5
knapsack(items, maxWeight) = 22
```

# Top-Down Recursive Apprach

## Intuition
- We can start with a full knapsack
- If the knapsack is NOT over capacity, then we have our answer - every item should be added.
- If the knapsack IS over capacity, then we have to take out an item. Which item do we remove?
- We can remove any of the items, so we have n possible branches in our decision tree.

```
                                                         (1,6) (2,10) (3,12) (2,4) w:6 v:28
              /                                       |                                        |                                       \
(2,10) (3,12) (2,4) w:7 v:26            (1,6) (3,12) (2,4) w:6 v:22               (1,6) (2,10) (2,4) w:5 v:20              (1,6) (2,10) (3,12) w:6 v:28

```

- The third branch from the left has already meet the weight limit, so we are going to leave it as is.
- For all the other branches, we need to keep removing items

> For the purposes of saving space, I am going to hide the 3rd branch from the graph for now, and use its vale as the placeholder

```
                                                         (1,6) (2,10) (3,12) (2,4) w:6 v:28
                  /                                                       |                      |                                    \
   (2,10) (3,12) (2,4) w:7 v:26                              (1,6) (3,12) (2,4) w:6 v:22       V:20                      (1,6) (2,10) (3,12) w:6 v:28
    /            |           \                               /            |           \                                   /            |           \  
(3,12) (2,4) (2,10) (2,4) (2,10) (3,12)               (3,12) (2,4)   (1,6) (2,4)    (1,6) (3,12)                   (2,10) (3,12)  (1,6) (3,12)  (1,6) (2,10)
  w:5 v:16     w:4 v:14     w:5 v:12                    w:5 v:16       w:3 v:6        w:4 v:18                       w:5 v:22       w:4 v:18      w:3 v:16
```

- We can see that all of the leaf nodes now are within the weight limit.
- Now we just have to pick the leaf node with the highest value, and find the answer.
- Note that we have that "placeholder" leaf node with v:20 as well. It should be considered along with the other leaf nodes.
- The leaf node with the highest value is the one with v:22. 
- So, the leaf node is (2,10) (3,12) with w:5 v:22.
- For this question we would return the value "22" as the answer.

## Implementation
- This lends itself naturally to a recursive tree traversal, where the base case is that the weight limit is no longer exceeded.
- Note that there is the opportunity for memoization, because a lot of the problems are solved more than once.
- For example, in the 2nd diagram, you can find the pair (1,6) (2,4) multiple times, as well as (3,12) (2,4), etc.
- The downstream branches are the same for all the repeating pairs, so there is no need to re-calculate them each time

**Algorithm Steps:**
1. Start at the original array. If the weight limit is not exceeded, simply return the total value as the answer.
2. Have a recursive call for each item in the remaining array, where the item is removed to form a new array
3. The new array must be passed downstream to its own recursive calls, so that the array gets smaller and smaller
4. At each recursive call stack layer, the value of the array must be compared the the maximum value we have encountered so far. The greater of the two is saved.
5. Repeat until there are no more leaf nodes with weight exceeding the limit.

A good exmaple explaining the time complexity from [Educative](https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/RM1BDv71V60#top-down-dynamic-programming-with-memoization)

**Runtime:** O(N*M) where N = num of items and M = max_weight\
**Space:** O(N*M) as well for storing the dictionary

```py
# items = {(w:1, v:6), (w:2, v:10), (w:3, v:12)}
# maxWeight = 5
# knapsack(items, maxWeight) = 22

class Solution:
    def knapsack(self, items, max_weight):
        """
        items type: List[tuple()]
        maxWeight type: int
        rtype: int

        returns the maxValue possible from putting items into knapsack without going over the maxWeight
        """
        max_value = float('-inf')
        cur_weight = 0
        cur_value = 0
        memo = {}

        for item in items:
            cur_weight += item[0]
            cur_value += item[1]
        # print(cur_weight)
        # print(cur_value)
        if cur_weight <= max_weight:
            return cur_value
        else:
            ans = self._recursion(items, max_weight, cur_weight, cur_value, max_value, memo)
            # print(memo)
            return ans
        
    def _recursion(self, items, max_weight, cur_weight, cur_value, max_value, memo):
        for i in range(len(items)):
            new_items = items[:]
            new_weight = cur_weight
            new_value = cur_value
            new_weight -= items[i][0]
            new_value -= items[i][1]
            # print(new_items)
            # print(new_weight)
            # print(new_value)
            if new_weight <= max_weight:
                max_value = max(new_value, max_value)
                max_value = max(new_value, max_value)   
            else:
                if (tuple(new_items)) in memo:
                    max_value = max_value = max(memo[tuple(new_items)], max_value)
                del new_items[i]
                max_value = self._recursion(new_items, max_weight, new_weight, new_value, max_value, memo)
        memo[tuple(items)] = max_value
        return max_value
                
s = Solution()
items = [(1, 6), (2, 10), (3, 12)]
print(s.knapsack(items, 5)) # 22
items = [(10,60),(20,100),(30,120)]
print(s.knapsack(items, 50)) # 220
items = [(5,10),(4,40),(6,30),(3,50)]
print(s.knapsack(items, 10)) # 90
items = [(1,10),(2,15),(3,40)]
print(s.knapsack(items, 6)) # 65
items = [(1,1),(2,6),(5,18),(6,22),(7,25)]
print(s.knapsack(items, 11)) # 40
items = [(1,20),(2,5),(3,10),(8,40),(7,15),(4,25)]
print(s.knapsack(items, 10)) # 60
items = [(5,10),(4,40),(6,30),(3,50)]
print(s.knapsack(items, 10)) # 90
```

# Dynamic Programming Approach @shichunyu on May 29, 2020

m is the width and n is the height of the DP table

**Runtime:** O(mxn) because we visit each cell of the table once\
**Space:** O(mxn) where we build a table of mxn size

Great explanation: [Back-to-Back SWE](https://www.youtube.com/watch?v=xCbYmUPvc2Q) and AlgoExpert.io

Here is what the DP table looks like for our solution:

```
[       0  1   2   3   4   5
       [0, 0,  0,  0,  0,  0], 
(1, 6) [0, 6,  6,  6,  6,  6], 
(2,10) [0, 6, 10, 16, 16, 16], 
(3,12) [0, 6, 10, 16, 18, 22]
]
```

```py
class Solution:
    def knapsack(self, items, max_weight):
        """
        items type: List[tuple()]
        maxWeight type: int
        rtype: int

        returns the maxValue possible from putting items into knapsack without going over the maxWeight
        """
        # Create our table with 1 extra width & height to account for 0 and []
        table_width = max_weight + 1
        table_height = len(items) + 1
        table = [[0] * table_width for _ in range(table_height)]
        # print(table)
        # print(table_width,table_height)

        # Iterative through table, skipping the first row because we know [] is always 0 value
        for i in range(1,table_height):
            cur_weight = items[i-1][0]
            cur_val = items[i-1][1]
            # go through all the knapsack sizes
            for j in range(table_width):
                prev_val = table[i-1][j]
                if j < cur_weight:
                    table[i][j] = prev_val
                else:
                    new_val = table[i-1][j-cur_weight] + cur_val
                    table[i][j] = max(new_val, prev_val)
        
        # print(table)
        return table[-1][-1]


s = Solution()
items = [(1,6),(2,10),(3,12)]
print(s.knapsack(items,5))
```