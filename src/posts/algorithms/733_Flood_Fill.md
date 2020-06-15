---
title: Flood Fill
number: 733
date: 2020.05.11
tags: ["graphs", "BFS"]

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/flood-fill

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
