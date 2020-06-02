# 0994. Rotting Oranges

## 994. Rotting Oranges

[https://leetcode.com/problems/rotting-oranges/](https://leetcode.com/problems/rotting-oranges/)

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell; the value 1 representing a fresh orange; the value 2 representing a rotten orange. Every minute, any fresh orange that is adjacent \(4-directionally\) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1 instead.

```text
Example 1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
```

```text
Example 2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
```

```text
Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
```

### Note:

1 &lt;= grid.length &lt;= 10 1 &lt;= grid\[0\].length &lt;= 10 grid\[i\]\[j\] is only 0, 1, or 2.

## Leetcode Solution

```python
from collections import deque
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        queue = deque()

        # Step 1). build the initial set of rotten oranges
        fresh_oranges = 0
        ROWS, COLS = len(grid), len(grid[0])
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 2:
                    queue.append((r, c))
                elif grid[r][c] == 1:
                    fresh_oranges += 1

        # Mark the round / level, _i.e_ the ticker of timestamp
        queue.append((-1, -1))

        # Step 2). start the rotting process via BFS
        minutes_elapsed = -1
        directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
        while queue:
            row, col = queue.popleft()
            if row == -1:
                # We finish one round of processing
                minutes_elapsed += 1
                if queue:  # to avoid the endless loop
                    queue.append((-1, -1))
            else:
                # this is a rotten orange
                # then it would contaminate its neighbors
                for d in directions:
                    neighbor_row, neighbor_col = row + d[0], col + d[1]
                    if ROWS > neighbor_row >= 0 and COLS > neighbor_col >= 0:
                        if grid[neighbor_row][neighbor_col] == 1:
                            # this orange would be contaminated
                            grid[neighbor_row][neighbor_col] = 2
                            fresh_oranges -= 1
                            # this orange would then contaminate other oranges
                            queue.append((neighbor_row, neighbor_col))

        # return elapsed minutes if no fresh orange left
        return minutes_elapsed if fresh_oranges == 0 else -1

if __name__ = '__main__':
    # test cases
    s = Solution()
    print(s.orangesRotting([[2,1,1],[1,1,0],[0,1,1]])) # 4
    print(s.orangesRotting([[0, 2]]))  # 0
    print(s.orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))  # 0
```

