
---

## **Overview**

**Problem Solving Lab** is an interactive online platform designed to enhance the learning experience for students studying algorithms and data structures. This platform focuses on **algorithm visualization**, allowing students to see step-by-step execution of algorithms, which improves understanding of their flow and operations. With over **30+ algorithms**, it provides a comprehensive solution for educators and learners alike.

The platform integrates algorithm explanation, visualization, and coding in a seamless web-based environment. Students can experiment with algorithms, edit code in an online editor, and visualize changes dynamically.

---

## **Features**

- **Algorithm Visualization**: Dynamic, step-by-step graphical representation of algorithms and data structures.
- **Interactive Learning**: Experiment with algorithms in real-time to explore their behavior.
- **Code Editor**: Write, edit, and execute algorithms in an integrated coding environment.
- **Support for 30+ Algorithms**: Includes sorting, searching, dynamic programming, backtracking, and more.
- **Custom Visualization**: Modify code and visualize the changes instantly.

---

## **Use Cases**

1. **Educational Tool**: Supports teaching and learning of data structures and algorithms.
2. **Conceptual Clarity**: Helps students understand complex algorithms by providing real-time visual walkthroughs.
3. **Experimentation**: Enables users to modify algorithms and see how changes impact their behavior.
4. **Interview Preparation**: Assists in visualizing and practicing common algorithmic problems.

---

## **Algorithm Visualization Classes**

The **Tracer API** in Problem Solving Lab provides several classes for visualization, each designed for specific types of data structures and algorithms. Below are the key components:

### 1. **Array1DTracer**
- Visualizes one-dimensional arrays.
- **Methods**:
  - `chart()`: Displays the array as a chart.
  - `select(index)`: Highlights a specific index in the array.
  - `patch(index, value)`: Temporarily highlights and updates a value.
  - `reset()`: Resets the array visualization.

### 2. **Array2DTracer**
- Visualizes two-dimensional arrays (e.g., matrices).
- **Methods**:
  - `selectRow(row)`, `selectCol(col)`: Highlights a specific row or column.
  - `deselect(index)`: Removes highlights.
  - `set(matrix)`: Sets values within the matrix.

### 3. **GraphTracer**
- Visualizes graphs, supporting nodes, edges, and animations.
- **Methods**:
  - `addNode(id)`: Adds a new node to the graph.
  - `addEdge(src, dest)`: Adds a directed edge from `src` to `dest`.
  - `layoutTree(root)`, `layoutCircle()`: Configures graph layout as a tree or circle.

### 4. **LogTracer**
- Logs algorithm steps to help users follow the process.
- **Methods**:
  - `print(message)`: Outputs a step or message.
  - `reset()`: Clears the log.

### 5. **ChartTracer**
- Tracks algorithm progression by plotting changes in data.
- **Methods**:
  - `select(index)`: Highlights chart values.
  - `reset()`: Resets the chart.

---

### **Using the Tracer API**
Here’s an example of how to visualize a Binary Search Tree (BST):

```javascript
const { GraphTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');

const G = [ /* Adjacency matrix */ ];
const tracer = new GraphTracer('Binary Search Tree');
const logger = new LogTracer('Logs');
Layout.setRoot(new VerticalLayout([tracer, logger]));

tracer.set(G);
tracer.layoutTree(0);
logger.println('Visualizing Binary Search Tree');

// Example of adding a node and an edge
tracer.addNode(1);
tracer.addEdge(0, 1);
logger.println('Node 1 added and connected to Node 0');
```

---

## **Supported Algorithms**

- **Sorting**: Bubble Sort, Merge Sort, Quick Sort, Heap Sort.
- **Searching**: Binary Search, Depth-First Search (DFS), Breadth-First Search (BFS).
- **Graphs**: Dijkstra’s Algorithm, Prim’s Algorithm, Kruskal’s Algorithm.
- **Dynamic Programming**: Knapsack Problem, Longest Common Subsequence.
- **Backtracking**: N-Queens, Sudoku Solver.
- **Divide and Conquer**: Matrix Multiplication, Closest Pair of Points.



## **License**

This project is licensed under the MIT License.

---



---
