# Resources

Question Source: https://leetcode.com/problems/surrounded-regions

# Graph Traversal:

## Intuition

A region is NOT surrounded if any of the `o`s are able to reach the edge of the map. We can use either BFS or DFS to traverse any region and see if it reaches the edge.

**Main tasks:**
1.  Determine where the regions are: [[200_Number_of_Islands]]
2.  Traverse every region
3.  Toggle `o`s to `x`s if the region is surrounded

**Detailed Steps**
1. Start at cell (0,0). 
	1. If not `o` move to next cell
	2. If `o` start BFS
	3. Keep track of cells that have already been visited
2. BFS:
	1. Add the cell to visited set
	2. Add the cell to current region set
	3. Traverse until no more `o`s
	4. If didn't reach edge, flip all `o` to `x`
3. Continue to go through grid until last cell is reached.


## Code
```python
from collections import deque

class Solution:
    def solve(self, board):
        """
        Do not return anything, modify board in-place instead.
        """     
		from collections import deque

		class Solution:
			def solve(self, board):
				"""
				Do not return anything, modify board in-place instead.
				"""
				rows = len(board)
				cols = len(board[0]
				visited = {}
				
				def bfs(r.c):
					coor = [r,c]
					surrounded = True
					queue = deque()
					island = {}
					
					queue.append(cell)
					
					while queue:
						dir = [(0,1),(0,-1),(1,0),(-1,0)]
						for d in dir:
							r = coor[0] + dir[0]
							c = coor[1] + dir[1]
							# edge is reached - not surrounded
							if r == len(board) or c == len(board[0]):
								surrounded = False
								queue.popleft()
							# keep looking for more 'O'
							elif board[r][c] == 'O' and board[r][c] not in visited:
								queue.append((r,c))
								island.add((r,c))
								queue.popleft()
					# toggle 'O' to 'X' if surrounded
					if surrounded:
						for r,c in island:
							board[r][c] = 'X'

				for r in rows:
					for c in cols:
						island = {}
						cell = board[r][c]
						if cell not in visited and cell == 'O':
							bfs(r,c)
				
				print(board)

s = Solution()
board = [[X,X,X,X],
		 [X,O,O,X],
		 [X,X,O,X],
		 [X,O,X,X]]
s.solve(board)


```