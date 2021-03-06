---
title: Invert Binary Tree
number: 226
tags: ["binary tree","graphs"]
date: 2020.06.01
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/invert-binary-tree

# BFS Solution: O(n) / O(n)

**Runtime:** O(N) where N is the number of nodes in the tree
**Space:** O(N) where N is the number of nodes in the tree

```py
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import deque

class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        
        if root is None:
            return root
        
        queue = deque()
        queue.append(root)
        
        while queue:
            node = queue.popleft()
            node.left, node.right = node.right, node.left
            
            if node.left is not None:
                queue.append(node.left)
            
            if node.right is not None:
                queue.append(node.right)
                
        return root
```
