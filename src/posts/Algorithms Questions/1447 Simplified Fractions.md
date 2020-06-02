# 1447. Simplified Fractions

Given an integer n, return a list of all simplified fractions between 0 and 1 \(exclusive\) such that the denominator is less-than-or-equal-to n. The fractions can be in any order.

```text
Example 1:

Input: n = 2
Output: ["1/2"]
Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.
```

```text
Example 2:

Input: n = 3
Output: ["1/2","1/3","2/3"]
```

```text
Example 3:

Input: n = 4
Output: ["1/2","1/3","1/4","2/3","3/4"]
Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".
```

```text
Example 4:

Input: n = 1
Output: []
```

### Constraints:

1 &lt;= n &lt;= 100

## Recursive Solution @shichunyu on May 16, 2020

How to detect if a fraction is "simple"?

ODD DENOMINATOR ans = \[\(1/9\), \(2/9\), \(4/9\), \(5/9\), \(7/9\), \(8/9\)\] divisors = {3}

1/9 2/9 9%2 != 0 3/9 9%3 = 0 -&gt; ADD TO DIVISORS LIST 4/9 9%4 != 0 5/9 9%5 != 0 6/9 9%6 != 0, 6%3 = 0 7/9 8/9

EVEN DENOM = 14

ans = \[\] divisors = {}

1/14 2/14 4/14 14%4 !=0 14%2

### Recursive

Since the question wants us to include all the simple fractions for every n &lt;= n, we will recurse the function with every n - 1.

```python
class Solution:
    def simplifiedFractions(self, n):
        return self._recurse(n, [])

    def _recurse(self, n, ans):
        ans = ["1/" + str(n)]
        divisors = set()
        if n == 1:
            return []
        for num in range(2, n):
            fraction = str(num) + "/" + str(n)
            new = fraction not in ans
            if n%num == 0:
                divisors.add(num)
            else: # check if divided by divisor of n
                if not divisors and new:
                    ans.append(fraction)
                else:
                    add_to_ans = True
                    for divisor in divisors:
                        if num%divisor == 0:
                            add_to_ans = False
                            break
                    if add_to_ans == True and new:
                        ans.append(fraction)

        ans += self._recurse(n-1,ans)
        return ans


s = Solution()
print(s.simplifiedFractions(1))
print(s.simplifiedFractions(2))
print(s.simplifiedFractions(3))
print(s.simplifiedFractions(5))
print(s.simplifiedFractions(9))
print(s.simplifiedFractions(10))
# print(s.simplifiedFractions(15))
# print(s.simplifiedFractions(23))
```

