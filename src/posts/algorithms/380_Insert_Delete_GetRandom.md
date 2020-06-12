---
title: Insert Delete GetRandom O(1)
number: 380
date: 2020.06.12
---

```toc

```

# Overview

Question Source: https://leetcode.com/problems/insert-delete-getrandom-o1/

# Dictionary + List: O(1) / O(n)

## Intuition

Let's review what data structures can help us achieve O(1) runtime for each operation required by the question below:

*   insert(): add a value to data structure
    *   Linked List: append()
    *   deque.append() or deque.appendleft()
    *   set.add()
    *   list.append()
    *   dic[key] = value
*   remove(): remove a value from data structure
    *   Linked List: pop()
    *   deque.pop() or deque.popleft()
    *   list.pop()
    *   del dic[key]
*   getRandom: basically the question wants us to do [random access](https://en.wikipedia.org/wiki/Array_data_structure) in constant time.
    *   list[idx]

The data structure that allows [random access](https://en.wikipedia.org/wiki/Array_data_structure) is an Array, and [in Python, Lists are really Dynamic Arrays](https://www.reddit.com/r/learnprogramming/comments/5ppg78/how_is_the_python_list_implemented/).

So we know that we have to use Lists, but lists don't give us constant time to insert or remove elements (except at the very end, using `append()` and `pop()`).

In this case, we can use another data structure in combination with the List - the dictionary.

The reason we choose a Dictionary is because we need to *relate* this Dictionary to the List. We'll use the Dictionary for constant time `insert()` and `remove()` but the List for `getRandom()`. 

We need the Dictionary and the List to stay in sync, so that if `insert()` is called, it inserts into both in constant time, and if `remove()` is called, it removes from both in constant time.

The tricky bit is `remove()` because we can `del` a key from a Dictionary in constant time, but we only `pop()` the last element of a List. In this case, we need the Dictionary and the List to work together.

This is where the Dictionary being able to store key-value pairs becomes helpful. We can store the index of the List element in the Dictionary, so that we always have a relationship between the Dictionary and the List.

**Example:**

```
dic = {         array = [3,2,5,7,4]
	3:0,
	2:1,
	5:2,
	7:3,
	4:4
}
```

So we can see that the dictionary stores the index value for each element in the List.

## Trace

Let's see how the Dictionary and List works with each of the operations required by the question.

### Insert()

```
dic = {}  array = []
```

`insert(3)` actually results in two operations:

1.  `array.append(3)`
2.  `dic[3] = len(array) -1`

```
dic = {   array = [3]
	3:0
}
```

We know the length of the List at any time. When we append `3` to the list it goes to the end, so its index will be `len(array)-1`. We can store the index in the dictionary as the value for key `3`.

## Remove()

This one gets a little trickier. Say our Dictionary and List looks like this:

```
dic = {         array = [3,2,5,7,4]
	3:0,
	2:1,
	5:2,
	7:3,
	4:4
}
```

`remove(7)` will result in these operations:

1.  Find the index of 7: `idx = dic[7]`. In this case, `idx = 3`
2.  To get rid of 7 in the array, simply replace its value with the last element:
    -   Get the value of the last element: `last_val = array[-1]`. In this case, `last_val = 4`
    -   Replace 7 with 4: `array[3] = 4`'

```
dic = {         array = [3,2,5,4,4]
	3:0,                       ^
	2:1,                       value has changed
	5:2,
	7:3,
	4:4
}
```

Now we can just get rid of the last element, since its redundant: `array.pop()`

```
dic = {         array = [3,2,5,4]
	3:0,                         ^
	2:1,                         the extra 4 is gone
	5:2,
	7:3,
	4:4
}
```

But now, we must update the index of the last element in the dictionary: `dic[4] = 3`

```
dic = {         array = [3,2,5,4]
	3:0,                         
	2:1,                         
	5:2,
	7:3,
	4:3 <- value is updated to the new index
}
```

Finally, delete 7 from the dictionary: `del dic[7]`

```
dic = {         array = [3,2,5,4]
	3:0,           
	2:1,           
	5:2,
	4:3 <- the key 7 is deleted
}
```

Voila! Our Dictionary and List are now in-sync.

### getRandom()

Since the indexes for our List start from `0` and end at `len(array)-1` we can generate a random number `r` in that range.

We can do this in two ways:

1.  `r = math.floor(random.random()*(len(array)))`
    -   `random.random()` returns a random float between [0,1). Ie: 0.656345293423123...
    -   If our array is length 4, we want the number to be an integer and between [0,3].
    -   We multiply our random float by 4, but that can get us something like: 3.235564134 which is out of range.
    -   By using math.floor() we can round down all the float values to a value between [0,3]. 
        -   3.xxxx -> 3
        -   2.xxxx -> 2
        -   1.xxxx -> 1
        -   0.xxxx -> 0
2.  `r = random.randint(0,len(array)-1)`
    -   This is a built in method in Python that returns a value between [val1,val2].
    -   <mark>Note that it is inclusive of upper bound (val2)!</mark>

Then, we'll return the value for `r` with `return array[r]`.

## Code

```python
import random

class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.dic = {}
        self.array = []

    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.dic:
            return False
        self.array.append(val)
        self.dic[val] = len(self.array)-1
        # print(self.dic)
        # print(self.array)
        return True

    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val not in self.dic:
            return False
        last_val = self.array
        idx = self.dic[val]
        self.array[idx] = last_val
        self.dic[last_val] = idx
        self.array.pop()
        del self.dic[val]
        # print(self.dic)
        # print(self.array)
        return True

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        r = random.randint(0,len(self.array)-1)
        return self.array[r]


obj = RandomizedSet()
action = ["RandomizedSet","insert","insert","remove","insert","remove","getRandom"]
val = [[],[0],[1],[0],[2],[1],[]]

for i in range(len(action)):
    if action[i] == "insert":
        obj.insert(val[i][0])
    elif action[i] == "remove":
        obj.remove(val[i][0])
    elif action[i] == "getRandom":
        print(obj.getRandom())
```