# 0417. Pacific Atlantic Water Flow

## 417. Pacific Atlantic Water Flow

Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions \(up, down, left, or right\) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

### Note:

The order of returned grid coordinates does not matter. Both m and n are less than 150.

```text
Example:

Given the following 5x5 matrix:

  Pacific ~   ~   ~   ~   ~ 
       ~  1   2   2   3  (5) *
       ~  3   2   3  (4) (4) *
       ~  2   4  (5)  3   1  *
       ~ (6) (7)  1   4   5  *
       ~ (5)  1   1   2   4  *
          *   *   *   *   * Atlantic

Return:

[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
```

## DFS @shichunyu on May 17, 2020

`Time & Space Complexity` Runtime: 388 ms, faster than 23.87 % of Python3 online submissions for Pacific Atlantic Water Flow. Memory Usage: 15.4 MB, less than 10.00 % of Python3 online submissions for Pacific Atlantic Water Flow.

```python
from collections import defaultdict

class Solution:
    def pacificAtlantic(self, matrix):
        """
        type matrix: List[List[int]]
        rtype: List[List[int]]
        """

        # Edge case of no matrix
        if matrix == []:
            return []

        pacific = set()
        atlantic = set()
        status_pacific = defaultdict()
        status_atlantic = defaultdict()

        ROWS = len(matrix)
        COLS = len(matrix[0])

        pacific_edges = set( [(i,0) for i in range(ROWS)] + [(0,j) for j in range(COLS)] )
        atlantic_edges = set( [(i,COLS-1) for i in range(ROWS)] + [(ROWS-1,j) for j in range(COLS)] )


        print('pacific edges: ' + str(pacific_edges))
        print('atlantic edges: ' + str(atlantic_edges))

        # traverse Pacific
        for row, col in pacific_edges:
            cur_node = (row, col)
            self.traverse(matrix, pacific, cur_node, status_pacific)

        # traverse Atlantic
        for row, col in atlantic_edges:
            cur_node = (row, col)
            self.traverse(matrix, atlantic, cur_node, status_atlantic)

        ans = pacific.intersection(atlantic)
        print('reaches pacific: ' + str(pacific))
        print('reaches atlantic: ' + str(atlantic))
        return ans

    def traverse(self, matrix, target_ocean, cur_node, target_status):
        directions = [(1,0), (-1,0), (0,1), (0,-1)]
        target_status[cur_node] = 'visited'
        cur_val = matrix[cur_node[0]][cur_node[1]]
        for dir in directions:
            neighbor = (cur_node[0]+dir[0],cur_node[1]+dir[1])
            if (0 <= neighbor[0] < len(matrix)
                and 0 <= neighbor[1] < len(matrix[0]) ):
                val_neighbor = matrix[neighbor[0]][neighbor[1]]
                if val_neighbor >= cur_val and neighbor not in target_status:
                    self.traverse(matrix, target_ocean, neighbor, target_status)
            else:
                continue
        target_ocean.add(cur_node)

s = Solution()

# matrix = []

# # matrix = [
# #     [1,2],
# #     [2,1],
# # ]
# print('ans: ' + str(s.pacificAtlantic(matrix)))


# matrix = [
#     [1, 1],
#     [1, 1],
#     [1, 1],
# ]

# print('ans: ' + str(s.pacificAtlantic(matrix)))

matrix = [
    [1,2,2,3,5],
    [3,2,3,4,4],
    [2,4,5,3,1],
    [6,7,1,4,5],
    [5,1,1,2,4],
]

# matrix = [
#     [3,2,3],
#     [2,1,4],
#     [0,2,4],
# ]

print('ans: ' + str(s.pacificAtlantic(matrix)))
```

## Leetcode BFS Solution

```python
DIRECTIONS = ((1, 0), (-1, 0), (0, 1), (0, -1))

class Solution:
    def pacificAtlantic(self, matrix: List[List[int]]) -> List[List[int]]:
        if not matrix or not matrix[0]:
            return []

        m = len(matrix)
        n = len(matrix[0])

        atlantic = set([(m - 1, bottom) for bottom in range(n)] + [(row, n - 1) for row in range(m)])
        pacific = set([(i, 0) for i in range(m)] + [(0, i) for i in range(n)])        

        def explore_oceans(start_cells):
            frontier = set(start_cells)
            visited = set()

            while frontier:
                land = frontier.pop()
                land_r, land_c  = land
                visited.add(land)

                for dr, dc in DIRECTIONS:
                    next_r, next_c = land_r + dr, land_c + dc
                    new_land = (next_r, next_c)
                    is_valid = (0 <= next_r < m and 0 <= next_c < n
                                and new_land not in visited
                                and new_land not in frontier
                                and matrix[next_r][next_c] >= matrix[land_r][land_c])

                    if is_valid:
                        frontier.add(new_land)

            return visited

        return list(explore_oceans(pacific) & explore_oceans(atlantic))
```

