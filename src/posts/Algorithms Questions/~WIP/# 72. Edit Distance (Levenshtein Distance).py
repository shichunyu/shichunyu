class Solution:
    def minDistance(self, word1, word2):
        """
        Returns the minimum number of operations needed to change word1 into word2
        word1 type: str
        word2 type: str
        rtype: int
        """
        # word1 = "ros"
        # word2 = "horse"
        table = [[0] * (len(word2)+1) for _ in range(len(word1)+1)]
        print(table)

        # populate the first row and first column
        for row in range(1,len(word1)+1): # 0 - 3
            table[row][0] = table[row-1][0] + 1
        for col in range(1,len(word2)+1): # 0 - 5
            table[0][col] = table[0][col-1] + 1
        print(table)
                
        # populate the rest of the table
        for row in range(1, len(word1)+1):
            for col in range(1, len(word2)+1):
                # if the characters match, simply "cancel them out"
                if word1[row-1] == word2[col-1]:
                    table[row][col] = table[row-1][col-1]
                else:
                    table[row][col] = min(table[row-1][col]+1,table[row][col-1]+1,table[row-1][col-1]+1)
        print(table)
        return table[-1][-1]

s = Solution()
print(s.minDistance("ros","horse"))


# [
# [0, 1, 2, 3, 4, 5], 
# [1, 0, 1, 2, 3, 0], 
# [2, 1, 1, 1, 2, 0], 
# [3, 0, 0, 0, 0, 0]]
