---
title: Design Hashmap
number: 706
date: 2020.05.08
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/design-hashmap

# Using a list
`Put: O(1) Runtime` `Get: O(1) Runtime` `Remove: O(1) Runtime`

Runtime: 328 ms, faster than 39.84% of Python3 online submissions for Design HashMap. Memory Usage: 16.9 MB, less than 9.09% of Python3 online submissions for Design HashMap.

```python
class MyHashMap:

    def __init__(self):
        self.map = []

    def put(self, key: int, value: int) -> None:
        # increase size of map to fit key as index
        while len(self.map) -1 < key:
            self.map.append(-1)
        self.map[key] = value

    def get(self, key: int) -> int:
        if len(self.map) - 1 >= key:
            return self.map[key]
        else:
            return -1

    def remove(self, key: int) -> None:
        if len(self.map) -1 >= key:
            if self.map[key] == -1:
                print("Not in hashtable")
            else:
                self.map[key] = -1
        else:
            print("Not in hashtable - greater than length")
            return -1

    def __str__(self):
        out = ""
        for i in self.map:
            out += str(i) + ", "
        return out


# Your MyHashMap object will be instantiated and called as such:
obj = MyHashMap()
obj.put(3,4)

print(obj)
print(obj.get(3)) # 4
print(obj.get(1)) # -1
print(obj.get(5)) # -1
obj.put(6,3)
obj.put(0,2)
print(obj)
print(obj.get(6)) # 3
print(obj.get(0)) # 2
obj.remove(0)
print(obj.get(0)) # -1
obj.remove(11) # Not in hashtable
obj.remove(0) # Not in hashtable
print(obj)
# obj.remove(key)
```
