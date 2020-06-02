# 323. Number of Connected Component in an Undirected Graph

![question](images/0323_Number_of_Connected_Component_in_an_Undirected_Graph.jpg)

## BFS

```python
from collections import deque

class Solution(object):
    def countComponents(self, n, edges):
        visited = [False] * n
        dic = {}
        #construct the dictionary
        while n - 1 > -1:
            dic[n-1] = []
            n -= 1
        for edge in edges:
            dic[edge[0]].append(edge[1])

        q = deque()
        q.append(0)
        components = 1
        return self._visit(q, dic, visited, components)

    def _visit(self, q, dic, visited, components):
        while q:
            curNode = q.popleft()
            visited[curNode] = True
            for edge in dic[curNode]:
                q.append(edge)
        if not all(visited):
            components += 1
            nextNode = visited.index(False)
            q.append(nextNode)
            return self._visit(q, dic, visited, components)
        else: 
            return components

s = Solution()
print(s.countComponents(5, [[0,1],[1,2],[3,4]]))

"""
dic = {
    4: 1
    3: 2,1
}
"""
```

## DFS

```python
class Solution:
    def countComponents(self, n, edges):
        ans = 0
        vertices = {}
        visited = []

        for i in range(n):
            vertices[i] = []

        for i in range(len(edges)):
            vertices[edges[i][0]].append(edges[i][1])
            vertices[edges[i][1]].append(edges[i][0])

        print(vertices)
        for vertex in vertices:
            ans += self._dfs(vertex,vertices,edges,visited)

        return ans

    def _dfs(self,vertex,vertices,edges,visited):
        # check if visited
        if vertex in visited:
            return 0

        # first time
        visited.append(vertex)

        # visit other vertecies
        for neighbor in vertices[vertex]:
            self._dfs(neighbor,vertices,edges,visited)

        return 1


s = Solution()
print(s.countComponents(5,[[0,1],[1,2],[3,4]]))
# print(s.countComponents(5,[[1,2],[0,1],[3,4]]))
# print(s.countComponents(5,[[0,1],[1,2],[2,3],[3,4]]))
# print(s.countComponents(5,[]))
```

