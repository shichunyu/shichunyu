# 0237. Delete a Node in a Linked List

## 237. Delete Node in a Linked List

Given linked list -- head = \[4,5,1,9\], which looks like following:

```text
Example 1:

Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

```text
Example 2:

Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

Note:

* The linked list will have at least two elements.
* All of the nodes' values will be unique.
* The given node will not be the tail and it will always be a valid node of the linked list.
* Do not return anything from your function.

## Switch values @shichunyu on May 8, 2020

Runtime: 32 ms, faster than 94.47% of Python3 online submissions for Delete Node in a Linked List. Memory Usage: 14.2 MB, less than 9.38% of Python3 online submissions for Delete Node in a Linked List.

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteNode(self, node):
        node.val = node.next.val
        node.next = node.next.next


"""
head = [4,5,1,9], node = 5
"""
```

