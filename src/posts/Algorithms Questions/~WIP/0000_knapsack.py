class Solution:
    def knapsack(self, items, max_weight):
        """
        items type: List[tuple()]
        maxWeight type: int
        rtype: int

        returns the maxValue possible from putting items into knapsack without going over the maxWeight
        """
        max_value = float('-inf')
        cur_weight = 0
        cur_value = 0
        memo = {}

        for item in items:
            cur_weight += item[0]
            cur_value += item[1]
        # print(cur_weight)
        # print(cur_value)
        if cur_weight <= max_weight:
            return cur_value
        else:
            ans = self._recursion(items, max_weight, cur_weight, cur_value, max_value, memo)
            # print(memo)
            return ans
        
    def _recursion(self, items, max_weight, cur_weight, cur_value, max_value, memo):
        for i in range(len(items)):
            new_items = items[:]
            new_weight = cur_weight
            new_value = cur_value
            new_weight -= items[i][0]
            new_value -= items[i][1]
            # print(new_items)
            # print(new_weight)
            # print(new_value)
            if new_weight <= max_weight:
                max_value = max(new_value, max_value)
                max_value = max(new_value, max_value)   
            else:
                if (tuple(new_items)) in memo:
                    max_value = max_value = max(memo[tuple(new_items)], max_value)
                del new_items[i]
                max_value = self._recursion(new_items, max_weight, new_weight, new_value, max_value, memo)
        memo[tuple(items)] = max_value
        return max_value
                
s = Solution()
items = [(1, 6), (2, 10), (3, 12)]
print(s.knapsack(items, 5)) # 22
items = [(10,60),(20,100),(30,120)]
print(s.knapsack(items, 50)) # 220
items = [(5,10),(4,40),(6,30),(3,50)]
print(s.knapsack(items, 10)) # 90
items = [(1,10),(2,15),(3,40)]
print(s.knapsack(items, 6)) # 65
items = [(1,1),(2,6),(5,18),(6,22),(7,25)]
print(s.knapsack(items, 11)) # 40
items = [(1,20),(2,5),(3,10),(8,40),(7,15),(4,25)]
print(s.knapsack(items, 10)) # 60
items = [(5,10),(4,40),(6,30),(3,50)]
print(s.knapsack(items, 10)) # 60
