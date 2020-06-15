---
title: Employee Importance
number: 690
date: 2020.06.09

---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/employee-importance

# BFS

```python
# BFS
class Solution:
    def getImportance(self, employees, id):
        dic = {}
        # construct dictionary
        for employee in employees:
            adjList[employee.id] = employee

        q = deque()
        q.append(id)
        ans = 0

        while q:
            first_e = q.popleft()
            if first_e not in dic: return 'error'
            ans += dic[first_e].importance
            for sub in dic[first_e].subordinates:
                q.append(sub)
        return res
```

# DFS

```python
# DFS
class Solution:
    def getImportance(self, employees, id):
        adjList = {}
        # construct dictionary
        for employee in employees:
            adjList[employee.id] = employee
        # look up employee by id
        return self._dfs(adjList, id)

    def _dfs(self, adjList, id):
        ans = adjList[id].importance
        for sub in adjList[id].subordinates: # int
            ans += self._dfs(adjList, sub)
        return ans
```
