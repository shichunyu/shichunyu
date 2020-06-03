---
title: Delete a Node in a Linked List
number: 237
tags: ["linked list","graphs"]
date: 2020.06.02
---

```toc
```

# Overview
## Sources
Question Source: [Leetcode](https://leetcode.com/problems/delete-node-in-a-linked-list/)

## Description
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
Given linked list — head = [4,5,1,9], which looks like following:
![](237_Delete_a_Node_in_a_Linked_List/237_example.png)

Example 1:

```
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

Example 2:

```
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

 
**Note:**
* The linked list will have at least two elements.
* All of the nodes’ values will be unique.
* The given node will not be the tail and it will always be a valid node of the linked list.
* Do not return anything from your function.

# Solution: O(1) / O(1)
## Intuition
Since we don’t have the pointer to the previous node, we can only get rid of the next node.

![](237_Delete_a_Node_in_a_Linked_List/IMG_7D6526D2B533-1.jpeg)

2. Have given node take on the value of the next node
3. Set the pointer for given node to the next next node

This effectively results in the singly-linked list looking like it has “deleted” the given node.

## Code

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
```