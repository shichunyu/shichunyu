---
title: Design Hashset
number: 705
date: 2020.08.02

---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/design-hashset/

# Hashset using Array: O(1) / O(k)

The space is O(k) where `k` is the size of the constraint. In this problem the constraint is 1,000,000.

```python
class MyHashSet:

    def __init__(self):
        self.set = [False for _ in range(1000000)]

    def add(self, key: int) -> None:
        self.set[key] = True
        return True

    def remove(self, key: int) -> None:
        if self.set[key] == False:
            return False
        else:
            self.set[key] = False
            return True

    def contains(self, key: int) -> bool:
        return self.set[key]

s = MyHashSet()
print(s.add(1)) # True
print(s.add(2)) # True
print(s.contains(1)) # True
print(s.contains(3)) # False
print(s.add(2)) # True
print(s.contains(2)) # True
print(s.remove(2)) # True
print(s.contains(2)) # False
```

# Hashset using LinkedList: 

```python
class Node:
    def __init__(self, val, next_node=None):
        self.val = val
        self.next = next_node

class Linked_List:
    def __init__(self):
        self.head = Node("head")

    def find(self, val):
        cur_node = self.head.next
        while cur_node:
            if cur_node.val == val:
                return cur_node
            cur_node = cur_node.next
        return False
    
    def add(self, val):
        if self.find(val) == False:
            new_node = Node(val, self.head.next)
            self.head.next = new_node
        # print(self.__str__())

    def remove(self, val):
        cur_node = self.head.next
        prev_node = self.head
        while cur_node:
            if cur_node.val == val:
                prev_node.next = cur_node.next
            prev_node = cur_node
            cur_node = cur_node.next
        # print(self.__str__())

    def __str__(self):
        output=[]
        cur_node = self.head.next
        while cur_node:
            output.append(cur_node.val)
            cur_node = cur_node.next
        string = ""
        for val in output:
            string = string + " " + str(val) + " >"
        return string

# Test the linked list
# my_list = Linked_List()
# my_list.add(3)
# my_list.add(6)
# my_list.add(4)
# print(my_list)
# my_list.remove(6)
# print(my_list)


class MyHashSet:

    def __init__(self):
        self.size = 3
        self.set = [Linked_List() for _ in range(self.size)]

    def _hash_key(self, key):
        return key % self.size

    def add(self, key: int) -> None:
        self.set[self._hash_key(key)].add(key)
        return True

    def remove(self, key: int) -> None:
        self.set[self._hash_key(key)].remove(key)
        return True

    def contains(self, key: int) -> bool:
        if self.set[self._hash_key(key)].find(key) != False:
            return True
        return False


s = MyHashSet()
print(s.add(2)) # True
print(s.add(8)) # True
print(s.add(5)) # True
print(s.remove(2)) # True
print(s.remove(5)) # True
print(s.contains(8)) # True
print(s.contains(2)) # False
```



# Hashset using Binary Search Tree:



