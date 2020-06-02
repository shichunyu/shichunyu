from collections import deque

class Solution:
    def coinChange(self, coins, amount):
        """
        Use BFS which is to find the shortest path from 0 to amount.
        This is much faster than the above dp solution.
        """
        if not amount:  # Don't need any coin.
            return 0

        queue = deque([(0, 0)])
        visited = [True] + [False] * amount
        while queue:
            print(queue)
            totalCoins, currVal = queue.popleft()
            totalCoins += 1  # Take a new coin.
            for coin in coins:
                nextVal = currVal + coin
                if nextVal == amount:  # Find a combination.
                    return totalCoins

                if nextVal < amount:  # Could add more coins.
                    if not visited[nextVal]:  # Current value not checked.
                        visited[nextVal] = True  # Prevent checking again.
                        queue.append((totalCoins, nextVal))

            return -1  # Cannot find any combination.

s = Solution()
print(s.coinChange([1,2,5],11)) # 3
