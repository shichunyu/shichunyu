# 0234. Palindrome Linked List

## 234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

```text
Example 1:

Input: 1->2
Output: false
```

```text
Example 2:

Input: 1->2->2->1
Output: true
```

**Follow up:** Could you do it in O\(n\) time and O\(1\) space?

## ✅ Two Pointer @shichunyu on May 6, 2020

Runtime: 80 ms, faster than 22.80% of Python3 online submissions for Palindrome Linked List. Memory Usage: 28.9 MB, less than 7.69% of Python3 online submissions for Palindrome Linked List.

```python
# Definition for singly-linked list.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        left = head
        right = head
        idx = 0
        memo = {}

        # If empty ListNode [] return False
        if head == None:
            return True

        # If only one number [0] return True
        if right.next == None:
            return True

        # move right pointer to very end
        # initialize dictionary to allow back-tracking
        while right.next:
            memo[idx] = right
            right = right.next
            idx += 1

        # check if is palindrome until the middle
        while right != left and left.next != right:
            if right.val == left.val:
                print('checks out')
            else:
                return False
            left = left.next
            right = memo[idx-1]
            idx -= 1
        # if ODD: both at center node
        if right == left:
            return True
        # If EVEN: check if values are same
        if right.val == left.val:
            return True
        else:   
            return False

# d = ListNode(1)
# c = ListNode(2,d)
# b = ListNode(2,c)
# a = ListNode(1,b)

# s = Solution()
# print (s.isPalindrome(a)) # True

# f = ListNode(2) 
# e = ListNode(1,f)

# s = Solution()
# print(s.isPalindrome(e)) # False

e = ListNode(1,)
d = ListNode(2,e)
c = ListNode(0,d)
b = ListNode(2,c)
a = ListNode(1,b)

s = Solution()
print (s.isPalindrome(a)) # True

"""
1 -> 2 -> 2 -> 1 Even
     l    r
1 >2 > 3 > 2 > 0 > 2 > 3 > 2 > 1 Odd
^          ^       ^             ^

"""
```

## Find Midpoint & Using Stack

`O(N) Time` `O(N/2) Space`

**Question:** would this work for odd lists?

```python
def isPalindrome(self, head):

    if not head or not head.next:
        return True

    # 1. Get the midpoint (slow)
    slow = fast = cur = head
    while fast and fast.next:
        fast, slow = fast.next.next, slow.next

    # 2. Push the second half into the stack
    stack = [slow.val]
    while slow.next:
        slow = slow.next
        stack.append(slow.val)

    # 3. Comparison
    while stack:
        if stack.pop() != cur.val:
            return False
        cur = cur.next

    return True
```

## Reversing List

`O(N) Time` `O(1) Space`

```python
"""
node = 0
1 >2 > 3 > 2 > 0 < 2 < 3 < 2 < 1 Odd
h                              n

"""
def isPalindrome(self, head):
    fast = slow = head
    # find the mid node
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
    # reverse the second half
    node = None
    while slow:
        nxt = slow.next
        slow.next = node
        node = slow
        slow = nxt
    # traverse forward & backwards & compare the first and second half nodes
    while node: # while node and head:
        if node.val != head.val:
            return False
        node = node.next
        head = head.next
    return True
```

## Using Dequeue

```python
# O(n) space
def isPalindrome(self, head):
    queue = collections.deque([])
    cur = head
    while cur:
        queue.append(cur)
        cur = cur.next
    while len(queue) >= 2:
        if queue.popleft().val != queue.pop().val:
            return False
    return True
```

