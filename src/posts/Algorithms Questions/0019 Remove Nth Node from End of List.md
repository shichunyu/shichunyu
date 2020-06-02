# 0019. Remove Nth Node From End of List

## [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/)

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

```text
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

**Note:** Given n will always be valid.

**Follow up:** Could you do this in one pass?

## 2-Pointer @shichunyu on May 5, 2020

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

