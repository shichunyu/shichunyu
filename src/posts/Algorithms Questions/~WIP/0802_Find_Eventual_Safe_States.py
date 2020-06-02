 """
 Insights
 1. All terminal nodes are eventually safe
 2. For non-terminal nodes, ANY choice of where to walk should eventually bring ot terminal node
 3. If you know one node is eventually safe, then nodes going to only eventually safe nodes are also ES.
 4. Investigate all the outgoing edges. Remove the edges that are certainly safe.
 """

 """
 Algorithm setup
 Adj_List = [[1,2],[2,3],[5],[0],[5],[],[]] provided by questin
 Indegree = [[3],[0],[0,1],[1],[],[4],[]] a list of INCOMING edges for each node (opposite of the Adj_list). Instead of building this you can reverse the graph, but that requires mutating it.
 Outdegree = [2,2,1,1,1,0,0] count the # of outgoing edges for each node
 Res = [] our final list of eventually safe nodes.
 Queue = [] our working queue
 """

"""
Algorithm Steps
1. Enqueue nodes with 0 outdegree
2. Put first queue item into Res
3. Reduce counter for the dependencies of item just added to Res
4. Enqeue any new nodes now with 0 outdegree
5. Repeat Steps 2-4
6. End when no nodes left with 0 outdegree to enqueue
7. Sort the final result if needed using sort()
"""

"""
Algorith Run Example
Queue = [5,6] Enqueue nodes with 0 outdegree (no dependencies)
Res = []
Res = [5] Put 5 in the result
Outdegree = [2,2,0,1,0,0,0] Reduce the counter for 2 & 4 since we have removed an edge
Queue = [6,4,2] Add 4 & 2 to queue because their outdegree = 0
Res = [5,6] Pop 6 from the Queue
Queue = [4,2] Since 6 has no dependencies, we're done
Res = [5,6,4] Pop 4 from Queue
Queue = [2] Since 4 has no dependencies, we're done
Res = [5,6,4,2] Pop 2 from Queue
Outdegree = [1,1,0,1,0,0,0] Reduce the counter for 0 & 1 since we have removed an edge
At this point, there are no nodes left with 0 outdegree, so the algorithm is over.

"""

class Solution(object):
    def eventualSafeNodes(self,graph):
        """
        :type graph: List[List[int]]
        :rtype: List[int]
        """
        outdegree = [0] * len(graph)
        indegree = [[] for _ in range(len(graph))]

        for i in range(len(graph)):
            outdegree[i] = len(graph[i])
            for j in range(len(graph[i])):
                indegree[graph[i][j]].append(i)

        queue = []
        for i in range(len(outdegree)):
            if outdegree[i] == 0:
                queue.append(i)
        res = []
        while queue:
            node = queue.pop(0)
            res.append(node)
            if indegree[node]:
                for rest in indegree[node]:
                    outdegree[rest] -= 1
                    if outdegree[rest] == 0:
                        queue.append(rest)
        return sorted(res)

sol = Solution()
graph = [[1,2],[2,3],[5],[0],[5],[],[]]
print(sol.eventualSafeNodes(graph)) # [2,4,5,6]