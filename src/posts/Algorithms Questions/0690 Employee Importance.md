# 690. Employee Importance

* [690. Employee Importance](0690.-employee-importance.md#690-employee-importance)
  * [BFS](0690.-employee-importance.md#bfs)
  * [DFS](0690.-employee-importance.md#dfs)

You are given a data structure of employee information, which includes the employee's unique id, his importance value and his direct subordinates' id.

For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like\[1, 15, \[2\]\], and employee 2 has\[2, 10, \[3\]\], and employee 3 has\[3, 5, \[\]\]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all his subordinates.

```text
Example 1:

Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
Output: 11
Explanation:
Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.
```

**Note:** One employee has at most one direct leader and may have several subordinates. The maximum number of employees won't exceed 2000.

```python
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
```

## BFS

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

## DFS

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

