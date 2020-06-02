# 78. Subsets \(Power Set\)

* ChunYu: May 03, 2020
* ID: 78
* Level: Medium

Given a set of **distinct** integers, _nums_, return all possible subsets \(the power set\).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```text
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

## ✔While Loop @shichunyu Shi

Runtime: 76 ms, faster than 5.12% of Python3 online submissions for Subsets.

Memory Usage: 14.1 MB, less than 5.95% of Python3 online submissions for Subsets.

```python
class Solution:
    def subsets(self, nums):
        index = 0
        value=nums[index]
        ans = [[]]
        memo = {0:None}

        ans.append([])
        # base case [1,2,3]
        for i in nums:
            ans[1].append(i)

        for i in ans:
            if len(i) > 1:
                j=len(i)-1
                while j >= 0:
                    copy = i[:]
                    copy.remove(i[j])
                    if copy not in ans:
                        ans.append(copy)
                    j-=1
        return ans

problem = Solution()

print(problem.subsets([1,2,3]))
```

## ⭐Recursive

```python
def powerSet(array, idx = None):
    if idx is None:
        idx = len(array) - 1
    elif idx < 0:
        return [[]]
    ele = array[idx]
    subsets = powerSet(array, idx - 1)
    for i in range(len(subsets)):
        currentSubset = subsets[i]
        subsets.append(currentSubset + [ele])
    return subsets

powerSet([1,2,3])
```

## 🌟Iterative

```python
def powerSet(array):
    subsets=[[]]
    for ele in array:
        for i in range(len(subsets)):
            currentSubset = subsets[i]
            subsets.append(currentSubset + [ele])
    return subsets

powerSet([1,2,3])
```

