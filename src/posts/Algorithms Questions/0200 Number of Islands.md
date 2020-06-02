# 200. Number of Islands

* ID: 200
* Level: Medium
* Minyoung: May 03, 2020
* Tags: Recursion

Given a 2d grid map of `'1'`s \(land\) and `'0'`s \(water\), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**

```text
Input:
11110
11010
11000
00000

Output: 1
```

**Example 2:**

```text
Input:
11000
11000
00100
00011

Output: 3
```

## ⭐Depth First Search

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

