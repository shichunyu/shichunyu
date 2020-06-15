---
title: Number of Islands
number: 200
date: 2020.05.03
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/number-of-islands

# ⭐Depth First Search

```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # island is formed by connecting adjacent lands horizontally and vertically
        # 1. number of islands - dfs

        # edge case
        if not grid:
            return 0


        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == "1": # run DFS
                    self._dfs(grid,i,j)
                    count += 1

        return count

    def _dfs(self,grid,i,j):
        if i < 0:
            return

        if j < 0:
            return

        if i >= len(grid):
            return

        if j >= len(grid[0]):
            return 

        if grid[i][j] != "1":
            return

        grid[i][j] = "0"

        self._dfs(grid,i+1,j)
        self._dfs(grid,i-1,j)
        self._dfs(grid,i,j+1)
        self._dfs(grid,i,j-1)
```
