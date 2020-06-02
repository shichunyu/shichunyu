"""
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2, 3, 1, 1, 4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
Jump 1 step from index 0 to 1, then 3 steps to the last index.
Note:

You can assume that you can always reach the last index.
"""


class Solution:
    def jump(self, nums):
        n = len(nums)
        jumps = [float('inf')] * n
        jumps[0] = 0
	    i = 0

        _recursion(0, nums, jumps)

    def _recursion(self, i, nums, jumps):
		  while jumps[n-1] == float('inf'):
            cur_val = nums[i]
            if i + cur_val <= n-1:
                jump_to = i + cur_val
            else:
                jump_to = n-1
            jumps[jump_to] = jumps[i] + 1
            i = jump_to - 1
            while jui == float('inf'):
                jump[i] = jump[i+1]
                _recursion(i, nums, jumps)
            
        return jumps[n-1]


s = Solution()
print(s.jump([2, 3, 1, 1, 4]))
