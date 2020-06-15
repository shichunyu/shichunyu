---
title: Majority Element
number: 169
date: 2020.05.06
tags: ["array","divide and conquer"]
---

```toc

```

# Resources

Question Source: https://leetcode.com/problems/majority-element

# Dictionary: O(n) / O(n)
```python
from collections import defaultdict

class Solution:
    def majorityElement(self, nums):
        dic = defaultdict(int)
        for num in nums:
            dic[num] += 1
            if dic[num] > len(nums)//2:
                return num

s = Solution()
print(s.majorityElement([2,2,1,1,1,2,2])) # 2
```

# Using Collections.Counter(): O(n) / O(n)

Instead of building the dictionary ourselves, we can use the built in python `collections.Counter()` method.

**Resources:**

*   Counter from Collections:[https://docs.python.org/2/library/collections.html#collections.Counter](https://docs.python.org/2/library/collections.html#collections.Counter)

*   To understand `max(iterable, key)`: [https://stackoverflow.com/questions/27486309/how-does-iter-and-key-in-python-max-min-function-work](https://stackoverflow.com/questions/27486309/how-does-iter-and-key-in-python-max-min-function-work)

```python
from collections import Counter

class Solution:
    def majorityElement(self, nums):
        counts = Counter(nums)
        return max(counts.keys(), key=counts.get) # uses the value of the count to compare, and returns the key with the highest count.

s = Solution()
print(s.majorityElement([2, 2, 1, 1, 1, 2, 2]))  # 2
```

# Sorted One-Pointer: O(n*log(n)) / O(1)

If we sort the values in `nums` then we can simply iterate through `nums` and count each number. This saves us some space but increases our time complexity.

```python
class Solution:
    def majorityElement(self, nums):
        nums.sort()
        cur_count = 0
        prev_num = nums[0]
        for num in nums:
            if prev_num == num:
                cur_count += 1
            else: cur_count = 1
            if cur_count > len(nums)//2:
                return num
            prev_num = num

s = Solution()
print(s.majorityElement([2, 2, 1, 1, 1, 2, 2])) # 2
```

# ⭐️ Boyer-Moore: O(n) / O(1)

## Intuition

`[2, 2, 1, 3, 1, 2, 2]` Since the majority element is more than half the array, this means that if were to subtract the the **count** of all non-majority elements from the **count** for the majority element, the majority element would still have some counts left.

**For example:**

`count_2 = 4` and `count_1 = 2` and `count_3 = 1`

`count_2 - (count_1 + count_3) = 1` = `4 - (2+1) = 1`

Without having to count all the elements (saving space), we can have all the non-majority elements "cancel" out the majority element. The last element standing is the majority element.

To do this, we start with the first element as a potential majority element, and iterate through the array.

If the element is the same, we increase the count by 1 for the majority element. If different, subtract by 1.

If the counter becomes 0, then it means it's not the majority element, and we see if the next one is the majority element.

## Trace

```
[2, 2, 1, 1, 1, 2, 2]
 ^
maj = 2
count = 1

[2, 2, 1, 1, 1, 2, 2]
    ^
maj = 2
count = 2

[2, 2, 1, 1, 1, 2, 2]
       ^
maj = 2
count = 1

[2, 2, 1, 1, 1, 2, 2]
          ^
maj = 2
count = 0

[2, 2, 1, 1, 1, 2, 2]
             ^
maj = 1
count = 1

[2, 2, 1, 1, 1, 2, 2]
                ^
maj = 1
count = 0

[2, 2, 1, 1, 1, 2, 2]
                   ^
maj = 2
count = 1

Return answer = 2
```

## Code

```python
class Solution:
    def majorityElement(self, nums):
        cur_count = 0
        maj_ele = None
        for num in nums:
            if cur_count == 0:
                maj_ele = num
            if num == maj_ele:
                cur_count += 1
            else:
                cur_count -= 1
        return maj_ele

s = Solution()
print(s.majorityElement([2, 2, 1, 1, 1, 2, 2])) # 2
```

