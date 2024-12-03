# Dijkstra's Shortest Path Algorithm

Dijkstra's algorithm is a graph search algorithm that solves the **single-source shortest path problem** for a graph with **non-negative edge weights**. It finds the shortest path from a source node to all other nodes in the graph.

It is widely used in **routing protocols**, **navigation systems**, and other optimization problems.

---

## Overview

- **Type:** Greedy Algorithm  
- **Input:** Graph \( G(V, E) \), Source Node  
- **Output:** Shortest distance from the source node to all other nodes in the graph  
- **Graph Requirements:** All edge weights must be non-negative  

---

## Algorithm Steps

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

### 1. Initialization:
- Set the distance of the source node to `0`.
- Set the distance of all other nodes to `Infinity`.
- Mark all nodes as unvisited.

### 2. Relaxation:
For each unvisited node, update the shortest known distance to its neighbors using the formula:
\[
\text{distance[neighbor]} = \min(\text{distance[neighbor]}, \text{distance[currentNode]} + \text{edgeWeight})
\]

### 3. Greedy Selection:
Select the unvisited node with the smallest known distance. Mark this node as visited.

### 4. Repeat:
Repeat the relaxation process for all nodes until all reachable nodes are visited or no unvisited nodes remain.

---

## Time Complexity

1. **Using Adjacency Matrix:**
   \[
   O(V^2)
   \]
   Where \(V\) is the number of vertices in the graph.

2. **Using Adjacency List with Min-Priority Queue (e.g., Binary Heap):**
   \[
   O((V + E) \log V)
   \]
   Where \(E\) is the number of edges.

---

## Features

- Handles **non-negative edge weights**.
- Outputs the shortest distance from the source to all nodes.

---

## Limitations

- Cannot handle graphs with **negative edge weights** (use **Bellman-Ford** instead).
- May be inefficient for dense graphs without optimization (e.g., priority queue).

---

## Use Cases

- **Navigation Systems:** GPS and mapping applications like Google Maps.  
- **Networking:** Finding the shortest path for data packets.  
- **Traffic Systems:** Optimizing travel times across networks.  
- **Resource Allocation:** Solving cost optimization problems in distributed systems.

---



