"""
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
[
  [2,1,1],
  [1,0,1],
  [1,1,1]
]
"""

class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        Returns the number of all possible unique paths for a given 2D matrix where 0s are valid cells and 1s are obstacles.
        Start at the top left and move either right or down at any given cell. The destination is the bottom right cell.
        obstacleGrid type: List[List[int]]
        rtype: int
        """
        
        # edge case: obstacleGrid is empty
        if obstacleGrid is None:
            return -1
        if obstacleGrid == []:
            return -1
        
        width = len(obstacleGrid[0])
        height = len(obstacleGrid)

        # create our grid to store our answers in for each cell
        paths = [[0] * width for _ in range(height)]
        print(paths)
        
        # edge case: target cell is blocked
        if obstacleGrid[height-1][width-1] != 1:
           paths[height-1][width-1] = 1

        # fill in grid values of bottom edge and right edge based on the value of their neighbors
        for col in range(width-2,-1,-1):
            if obstacleGrid[height-1][col] != 1:
                paths[height-1][col] = paths[height-1][col+1]
        for row in range(height-2,-1,-1):
            if obstacleGrid[row][width-1] != 1:
                paths[row][width-1] = paths[row+1][width-1]
        print(paths)

        # populate grid based on value which is sum of right neightbor and bottom neighbor
        for col in range(width-2,-1,-1):
            for row in range(height-2,-1,-1):
                if obstacleGrid[row][col] != 1:
                    paths[row][col] = paths[row+1][col] + paths[row][col+1]
        print(paths)
        return paths[0][0]


s = Solution()
print(s.uniquePathsWithObstacles([[0,0],[1,1],[0,0],[0,0]])) # 0
print(s.uniquePathsWithObstacles([[0,0]])) # 1
print(s.uniquePathsWithObstacles([[1,0]])) # 0
print(s.uniquePathsWithObstacles([[[0,0],[1,0]]])) # 1
print(s.uniquePathsWithObstacles([])) # -1
print(s.uniquePathsWithObstacles([[1]])) # 0
print(s.uniquePathsWithObstacles([
  [0,0,0],
  [0,0,0],
  [0,0,0]
])) # 6
