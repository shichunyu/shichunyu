""" 
class Solution:
    def removeDuplicates(self, nums):
        prev = None
        idx = 0
        if nums == []:
            return -1
        #  O(N)
        while idx < len(nums):
            if nums[idx] != prev:
                prev = nums[idx]
                idx += 1
            else:
                while nums[idx] == prev:
                    nums.remove(prev)
                    if idx >= len(nums):
                        break
        return len(nums)

s = Solution()
print(s.removeDuplicates([0,0,0,0,0])) # 1
print(s.removeDuplicates([0,0,1,1,1,2,2,3,3,4])) #5
print(s.removeDuplicates([0,0,1,2,2,3,4])) # 5
print(s.removeDuplicates([0,1])) # 2
print(s.removeDuplicates([0])) # 1
print(s.removeDuplicates([])) # -1 
"""

class Solution:
    def removeDuplicates(self, nums):
    count = 0
    front = 0
    back = 0

    for idx in range(len(nums))
      i         j 
0,1,2,3,1,1,2,2,3

s = Solution()
print(s.removeDuplicates([0, 0, 0, 0, 0]))  # 1
print(s.removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))  # 5
print(s.removeDuplicates([0, 0, 1, 2, 2, 3, 4]))  # 5
print(s.removeDuplicates([0, 1]))  # 2
print(s.removeDuplicates([0]))  # 1
print(s.removeDuplicates([]))  # -1
