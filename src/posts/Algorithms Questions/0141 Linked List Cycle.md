# 0141. Linked List Cycle

## 141. Linked List Cycle

* [141. Linked List Cycle](0141.-linked-list-cycle.md#141-linked-list-cycle)
* [✅ Two Pointer ChunYu @ May 4, 2020](0141.-linked-list-cycle.md#-two-pointer-chunyu--may-4-2020)
* [⭐️ Two Pointer Walker & Runner - elegant code](0141.-linked-list-cycle.md#️-two-pointer-walker--runner---elegant-code)
* [✅ Dictionary \(Hash Map\) ChunYu @ May 5, 2020](0141.-linked-list-cycle.md#-dictionary-hash-map-chunyu--may-5-2020)

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position \(0-indexed\) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

```text
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

Example 2:

```text
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

Example 3:

```text
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

Follow up:

Can you solve it using O\(1\) \(i.e. constant\) memory?

## ✅ Two Pointer ChunYu @ May 4, 2020

!!! Success O\(N\) Time & O\(1\) Space Runtime: 56 ms, faster than 18.60% of Python3 online submissions for Linked List Cycle. Memory Usage: 17 MB, less than 100.00% of Python3 online submissions for Linked List Cycle.

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

## ⭐️ Two Pointer Walker & Runner - elegant code

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

## ✅ Dictionary \(Hash Map\) ChunYu @ May 5, 2020

!!! Success O\(N\) Time & Space Runtime: 56 ms, faster than 18.60% of Python3 online submissions for Linked List Cycle. Memory Usage: 17 MB, less than 100.00% of Python3 online submissions for Linked List Cycle.

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

