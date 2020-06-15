---
title: Linked List Cycle
number: 141
date: 2020.05.04
---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/linked-list-cycle

# ✅ Two Pointer: O(n) / O(1)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class LinkedList:
    def __init__(self):
        self.head = ListNode("head")
        self._size = 0

    def insertEnd(self,item): # item is a ListNode
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = ListNode(item)
        self._size += 1

    def __str__(self):
        output = ""
        cur_node = self.head.next
        while(cur_node):
            output += str(cur_node.val) + "→"
            cur_node = cur_node.next
        return output

    def cycle(self,node_val):
        if self._size == 0:
            return False
        cur_node = self.head.next
        while cur_node is not None:
            if cur_node.val == node_val:
                dest_node = cur_node
            if cur_node.next == None:
                last_node = cur_node
            cur_node = cur_node.next
        print(last_node)
        print(dest_node)

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        slow = head
        fast = head

        if head == None or head.next == None:
            return False

        while fast.next != None or slow.next != fast:
            slow = slow.next
            fast = fast.next
            if fast != None:
                fast = fast.next
            if fast == None:
                return False
            elif id(slow) == id(fast):
                return True

linked_list = LinkedList()

# Create the linked list
for i in range(1,4):
    linked_list.insertEnd(i)

# Link the list
linked_list.cycle(1)

s = Solution()
print(s.hasCycle(linked_list.head))
```

# ⭐️ Two Pointer Walker & Runner - elegant code

```python
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        walker = head
        runner = head
        while runner != None and runner.next != None:
            walker = walker.next
            runner = runner.next.next
            if walker == runner:
                return True
        return False
```

# ✅ Dictionary (Hash Map) ChunYu @ May 5, 2020

!!! Success O(N) Time & Space Runtime: 56 ms, faster than 18.60% of Python3 online submissions for Linked List Cycle. Memory Usage: 17 MB, less than 100.00% of Python3 online submissions for Linked List Cycle.

```python
class LinkedList:
    def __init__(self):
        self.head = ListNode("head")
        self._size = 0

    def insertEnd(self,item): # item is a ListNode
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = ListNode(item)
        self._size += 1

    def __str__(self):
        output = ""
        cur_node = self.head.next
        while(cur_node):
            output += str(cur_node.val) + "→"
            cur_node = cur_node.next
        return output

    def cycle(self,node_val):
        if self._size == 0:
            return False
        cur_node = self.head.next
        while cur_node is not None:
            if cur_node.val == node_val:
                dest_node = cur_node
            elif cur_node.next == None:
                last_node = cur_node
            cur_node = cur_node.next
        print(last_node)
        print(dest_node)
        last_node.next = dest_node

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        memo = {}
        if head == None or head.next == None:
            return False
        cur_node = head.next
        while cur_node != None:
            if id(cur_node) not in memo:
                memo[id(cur_node)] = 1
            else:
                return True
            cur_node = cur_node.next
        return False

linked_list = LinkedList()

# Create the linked list
for i in range(1,4):
    linked_list.insertEnd(i)

# Link the list
linked_list.cycle(1)

s = Solution()
print(s.hasCycle(linked_list.head))
```