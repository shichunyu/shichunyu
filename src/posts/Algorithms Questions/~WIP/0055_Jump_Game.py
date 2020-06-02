"""
Greedy Solution

Always jump the farthest possible distance.
If cannot get to the end, backtrack one jump, and take a slightly smaller jump.

Case 1: True
list = [2,3,1,5,4]
len(list) = 5

1. idx = 0 | val = 2 -> not >= len(list) - 1 - idx = 4. idx += val = 0 + 2 = 2
2. idx = 2 | val = 1 -> not >= len(list) - 1 - idx = 2. idx += val = 2 + 1 = 3
3. idx = 3 | val = 5 => IS >= len(list) - 1 - idx. return True.

Case 2: True
list = [2,3,1,0,4]
len(list) = 5
set = {0,2,3,}

1. idx = 0 | val = 2 -> not >= len(list) - 1 - idx = 4. idx += val = 0 + 2 = 2 | add idx to set
2. idx = 2 | val = 1 -> not >= len(list) - 1 - idx = 2. idx += val = 2 + 1 = 3 | add idx to set
3. idx = 3 | val = 0 -> stuck | add idx to set | idx -= 1 aleady in set. idx -=1 not yet in set
4. idx = 1 | val = 1 -> IS >= len(list) 0 1 0 idx  = 3 | return True.

Case 3: False
list = [2,0,1,0,4]
len(list) = 5
set = {0,2,3,1}

1. idx = 0 | val = 2 -> not >= len(list) - 1 - idx = 4. idx += val = 0 + 2 = 2 | add idx to set
2. idx = 2 | val = 1 -> not >= len(list) - 1 - idx = 2. idx += val = 2 + 1 = 3 | add idx to set
3. idx = 3 | val = 0 -> stuck | add idx to set | idx -= 1 aleady in set. idx -=1 not yet in set
4. idx = 1 | val = 0 -> stuck | add idx to set | len(set) = len(list) | return False.

Steps:
1. set = {}
2. start at idx = 0. 
3. check if idx can traverse to end.
    - If yes, return True
    - If no, move idx based on value
    - Add idx to set

Base cases:
1. If idx == 0 and val != 0 move back by 1 step
2. If idx == 0 and val == 0 return False
3. If set length == list length return False

jumps = 2
memo = {
    0 : 0
    2 : 1
    3 : 2
}


"""

class Solution:
    def canJump(self, nums) -> bool:
        bestIndex = 0
        for i in range(len(nums)):
            if i > bestIndex:
                return False
            bestIndex = max(bestIndex, nums[i] + 1)
        return True

if __name__ == '__main__':
    # test cases
    s = Solution()
    # print(s.canJump([0]))  # True
    # print(s.canJump([2, 3, 1, 5, 4])) # True
    # print(s.canJump([2, 3, 1, 0, 4])) # True
    print(s.canJump([2, 0, 1, 0, 4])) # False
    print(s.canJump([2, 0, 3, 2, 1, 0, 4]))  # False

