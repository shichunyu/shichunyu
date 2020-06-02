# Flood Fill

## Flood Fill

!Graphs, !BFS

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image \(from 0 to 65535\).

Given a coordinate \(sr, sc\) representing the starting pixel \(row and column\) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels \(also with the same color as the starting pixel\), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

```text
Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
```

### Note:

The length of image and image\[0\] will be in the range \[1, 50\]. The given starting pixel will satisfy 0 &lt;= sr &lt; image.length and 0 &lt;= sc &lt; image\[0\].length. The value of each color in image\[i\]\[j\] and newColor will be an integer in \[0, 65535\].

## ✅ BFS @shichunyu on May 11, 2020

```python
from collections import deque

class Solution:
    def floodFill(self, image, sr, sc, new_color):
        # get the color of the current block
        old_color = image[sr][sc] # color: 1
        if old_color == new_color:
            return image
        first_px = [sr,sc]
        # queue up the current block
        queue = deque()
        queue.append(first_px)
        while queue:
            cur_px = queue.popleft() # [sr,sc]
            # change color of current block
            image[cur_px[0]][cur_px[1]] = new_color
            # get the neighbors of current block
            dirs = {(0,1),(1,0),(0,-1),(-1,0)}
            for dir in dirs:
                new_r = cur_px[0] + dir[0]
                new_c = cur_px[1] + dir[1]
                # make sure 1) we're not off the map 2) should be same as old_color
                if (0 <= new_r < len(image) and 
                    0 <= new_c < len(image[0]) and 
                    image[new_r][new_c] == old_color):
                    queue.append([new_r,new_c])
        return image

if __name__ == '__main__':
    s = Solution()
    # image1 = [[1,1,1],[1,1,0],[1,0,1]]
    # print(s.floodFill(image1, 1, 1, 2))
    image2 = [[0, 0, 0], [0, 1, 1]]
    print(s.floodFill(image2, 1, 1, 1))
```

