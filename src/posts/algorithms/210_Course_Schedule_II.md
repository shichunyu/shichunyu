---
title: Course Schedule II
number: 210
date: 2020.05.15

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/course-schedule-ii

# Node Indegree @shichunyu on May 15, 2020

> `O(V+E) Time & Space Complexity` Runtime: 100 ms, faster than 85.76% of Python3 online submissions for Course Schedule II. Memory Usage: 15.1 MB, less than 60.71% of Python3 online submissions for Course Schedule II.  

The problem is a topological sort

#### Setup

1. Use input to count the # of pre-reqs per course -> num_prereqs = [...]
2. Use input to create a dependencies dic -> depend = {...:...}

```python
Input: 6, [[1,0],[2,0],[2,1],[3,1],[3,2],[4,2],[4,3],[5,1],[5,2],[5,4]]
Output: [0,1,2,3,4,5]

prereqs = { # it turns out this is not necessary to build
    0: None
    1: 0
    2: 0,1
    3: 1,2
    4: 2,3
    5: 1,2,4
}

num_prereqs = [0,1,2,2,2,3]

depend = {
    0 : 1,2
    1 : 2,3,5
    2 : 3,4,5
    3 : 4
    4 : 5
    5 : None 
}
```

#### Script

1. First find starting courses that has no pre-reqs

```text
            0,1,2,3,4,5
num_prereqs = [0,1,2,2,2,3]
```

2. Add no-prereq courses to stack

queue = []

3. Add to Ans & remove from stack

ans = []

4. Search what dependencies are now removed and count down the pre-reqs by 1
5. If any counter reaches 0, add to queue
6. When queue is empty stop processing
7. Check if num_prereqs are all 0s
8. Go back to 1

```python

class Solution:

```
def findOrder\(self, numCourses, prerequisites\):
```

​```text
 """
 :type numCourses: int
 :type prerequisites: List[List[int]]
 :rtype: List[int]
 """
 depend = {}
 # build our dependencies list -> we could have also used defaultdict here
 for i in range(numCourses):
     depend[i] = []
 for i,j in prerequisites:
     depend[j].append(i)
 # build our num_prereqs counter
 num_prereqs = [0] * numCourses
 for edge in prerequisites: ,0]
     idx = edge[0]
     num_prereqs[idx] += 1
 # set up our queue & answer
 ans = []
 queue = []
 # set up our starting queue
 for idx in range(len(num_prereqs)):
     if num_prereqs[idx] == 0:
         queue.append(idx)
 # process the queue
 while queue:
     ready_course = queue.pop()
     ans.append(ready_course)
     for dependency in depend[ready_course]:
         num_prereqs[dependency] -= 1
         if num_prereqs[dependency] == 0:
             queue.append(dependency)
 # check if all edges have been removed. If not, then there is a cycle.
 if any(num_prereqs):
     return []
 else:
     return ans
```

s = Solution() print(s.findOrder(6,[[1,0],[2,0],[2,1],[3,1],[3,2],[4,2],[4,3],[5,1],[5,2],[5,4]]))

```text
# DFS Solution (Leetcode)

> `O(N) Time & Space Complexity`  


​```python
from collections import defaultdict
class Solution:

    WHITE = 1
    GRAY = 2
    BLACK = 3

    def findOrder(self, numCourses, prerequisites):
        """
        :type numCourses: int
        :type prerequisites: List[List[int]]
        :rtype: List[int]
        """

        # Create the adjacency list representation of the graph
        adj_list = defaultdict(list) 

        # A pair [a, b] in the input represents edge from b --> a
        for dest, src in prerequisites:
            adj_list[src].append(dest) # defaultdict lets you insert missing keys. Here the key will just be inserted. 

        topological_sorted_order = []
        is_possible = True

        # By default all vertces are WHITE
        color = {k: Solution.WHITE for k in range(numCourses)}
        def dfs(node):
            nonlocal is_possible # nonlocal allows you to change the global variable without having to pass it back and forth into the function.

            # Don't recurse further if we found a cycle already
            if not is_possible:
                return

            # Start the recursion
            color[node] = Solution.GRAY

            # Traverse on neighboring vertices
            if node in adj_list:
                for neighbor in adj_list[node]:
                    if color[neighbor] == Solution.WHITE:
                        dfs(neighbor)
                    elif color[neighbor] == Solution.GRAY:
                         # An edge to a GRAY vertex represents a cycle
                        is_possible = False

            # Recursion ends. We mark it as black
            color[node] = Solution.BLACK
            topological_sorted_order.append(node)

        for vertex in range(numCourses):
            # If the node is unprocessed, then call dfs on it.
            if color[vertex] == Solution.WHITE:
                dfs(vertex)

        return topological_sorted_order[::-1] if is_possible else [] # reverses the array using [::-1]
```
