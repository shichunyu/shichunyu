---
title: Remove Nth Node From End of List
number: 19
date: 2020.05.05
---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list

# 2-Pointer @shichunyu on May 5, 2020

`O(N) Time & Space Complexity` Runtime: 36 ms, faster than 32.41% of Python3 online submissions for Remove Nth Node From End of List. Memory Usage: 13.9 MB, less than 6.06% of Python3 online submissions for Remove Nth Node From End of List.

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode('d',head)
        dummy.next = head
        front = dummy
        back = dummy
        c = 0

        while c <= n:
            front = front.next
            c += 1

        while front:
            front = front.next
            back = back.next

        back.next = back.next.next

        return dummy.next


n5 = ListNode(5)
n4 = ListNode(4,n5)
n3 = ListNode(3,n4)
n2 = ListNode(2,n3)
n1 = ListNode(1,n2)

s = Solution()
print(s.removeNthFromEnd(n1,2))
```
