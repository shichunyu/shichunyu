# 160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins. Example 1:

```text
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
```

Example 2:

```text
Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
```

Example 3:

```text
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
```

**Notes:**

If the two linked lists have no intersection at all, return null. The linked lists must retain their original structure after the function returns. You may assume there are no cycles anywhere in the entire linked structure. Your code should preferably run in O\(n\) time and use only O\(1\) memory.

## ✅ ChunYu @ May 5, 2020

Runtime: 196 ms, faster than 10.04% of Python3 online submissions for Intersection of Two Linked Lists. Memory Usage: 30.5 MB, less than 100.00% of Python3 online submissions for Intersection of Two Linked Lists.

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        a = headA
        b = headB
        memo = {}

        if not a or not b:
            return None
        elif a.next == b:
            return b
        elif b.next == a:
            return a
        elif a == b:
            return a

        while a.next or b.next:
            if a.next == b.next:
                return a.next
            elif a.next and id(a.next) in memo: 
                return a.next
            elif a.next == headB:
                return headB
            elif b.next == headA:
                return headA
            elif b.next and id(b.next) in memo:
                return b.next
            else:
                if a.next:
                    memo[id(a.next)] = a
                    a = a.next
                if b.next:
                    memo[id(b.next)] = b
                    b = b.next
        return None

if __name__ == '__main__':
    # Set up the linked lists
    a1 = ListNode('1')
    a2 = ListNode('2')
    a3 = ListNode('3')
    a4 = ListNode('4')

    b1 = ListNode('1')
    b2 = ListNode('2')
    b3 = ListNode('3')

    a1.next = a2
    a2.next = a3
    a3.next = a4
    b1.next = b2
    b2.next = b3

    s = Solution()
    assert s.getIntersectionNode(a1,b1)
```

## ⭐️ Solution using Set

```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        node_set = set()
        node = headA
        while node:
            node_set.add(node)
            node = node.next

        node2 = headB
        while node2:
            if node2 in node_set:
                break
            node2 = node2.next

        if node2:
            return node2
        return None
```

