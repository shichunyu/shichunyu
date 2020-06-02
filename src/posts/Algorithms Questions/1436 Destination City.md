# 1436. Destination City

* ChunYu: May 02, 2020
* ID: 5400
* Level: Easy
* Minyoung: May 02, 2020

You are given the array `paths`, where `paths[i] = [cityAi, cityBi]` means there exists a direct path going from `cityAi` to `cityBi`. _Return the destination city, that is, the city without any path outgoing to another city._

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

**Example 1:**

```text
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
```

**Example 2:**

```text
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".
```

**Example 3:**

```text
Input: paths = [["A","Z"]]
Output: "Z"
```

**Constraints:**

* `1 <= paths.length <= 100`
* `paths[i].length == 2`
* `1 <= cityAi.length, cityBi.length <= 10`
* `cityAi != cityBi`
* All strings consist of lowercase and uppercase English letters and the space character.

## @shichunyu Shi May 02, 2020

```python
class Solution:
    def destCity(self, paths):
        at = paths[0][0]
        memo = {}

        for i in paths:
            on = i[0]
            off = i[1]
            if at in memo:
                at = memo[at]
            memo[on] = off
        while at in memo:
            at = memo[at]
        return at

problem = Solution()
print(problem.destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
```

