class Solution:
    def change(self, amount, coins):
        """
        Given a set of coin denominations, return the total number of combinations that sum up to given amount.
        amount type: int
        coins type: List[int]
        rtype: int
        """
        # Initiate array with one extra index for $0
        total_ways = [0] * (amount + 1)
        # There is always 1 way to make $0, which is to have no coins
        total_ways[0] = 1
        for c in coins:
            for i in range(1,amount+1):
                if i >= c:
                    total_ways[i] += total_ways[i-c]
        print(total_ways)
        return total_ways[-1]

s = Solution()
print(s.change(10,[1,5,10,25])) # 3