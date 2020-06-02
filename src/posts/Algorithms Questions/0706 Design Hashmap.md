# 0706. Design HashMap

## 706. Design HashMap

> Note: Other answers on Leetcode are either LOL or cheat.

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

* put\(key, value\) : Insert a \(key, value\) pair into the HashMap. If the value already exists in the HashMap, update the value.
* get\(key\): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
* remove\(key\) : Remove the mapping for the value key if this map contains the mapping for the key.

```text
Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)
```

Note:

* All keys and values will be in the range of \[0, 1000000\].
* The number of operations will be in the range of \[1, 10000\].
* Please do not use the built-in HashMap library.

## Using a list @shichunyu on May 8, 2020

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

