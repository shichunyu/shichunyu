# 0933. Number of Recent Calls

## 933. Number of Recent Calls

Write a class RecentCounter to count recent requests.

It has only one method: ping\(int t\), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in \[t - 3000, t\] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

```text
Example 1:

Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
Output: [null,1,2,3,3]
```

Note:

Each test case will have at most 10000 calls to ping. Each test case will call ping with strictly increasing values of t. Each call to ping will have 1 &lt;= t &lt;= 10^9.

## Using a list @shichunyu on May 7, 2020

```python
class RecentCounter(object):

    def __init__(self):
        self.curt = 0
        self.pings = []
        self.call_num = 0

    def ping(self, t):
        """
        :type t: int
        :rtype: int
        """

        if t == None:
            return self.call_num
        self.pings.append(t) 
        self.curt = t
        i = 0
        while self.pings[i] < self.curt - 3000:
                del self.pings[i]
        self.call_num = len(self.pings)
        print(self.call_num)
        return self.call_num


# """
# inputs = [[],[1],[100],[3001],[3002]]
# Output: [null,1,2,3,3]
# """
# obj = RecentCounter()
# param_1 = obj.ping(None)
# param_1 = obj.ping(1)
# param_1 = obj.ping(100)
# param_1 = obj.ping(3001)
# param_1 = obj.ping(3002)

# print(obj.call_num)

# """
# Input: [[],[1178],[1483],[1563],[4054],[4152]]
# Output: [null,4,5,6,6,7]
# """
# obj = RecentCounter()
# param_1 = obj.ping(None)
# param_1 = obj.ping(1178)
# param_1 = obj.ping(1483)
# param_1 = obj.ping(1563)
# param_1 = obj.ping(4054)
# param_1 = obj.ping(4152)

"""
Input: [[],[642],[1849],[4921],[5936],[5957]]
Output: [null,1,2,1,2,3]
"""
obj = RecentCounter()
param_1 = obj.ping(None)
param_1 = obj.ping(642) # 
param_1 = obj.ping(1849) # 2
param_1 = obj.ping(4921) # 2
param_1 = obj.ping(5936)
param_1 = obj.ping(5957)
```

## Using DeQue - Shorter code

```python
class RecentCounter:

    def __init__(self):
        self.p = collections.deque()        

    def ping(self, t):
        self.p.append(t)
        while self.p[0] < t - 3000:
            self.p.popleft()
        return len(self.p)
```

