### README: Sum of Subsets Problem

---

## **Overview**

The **Sum of Subsets Problem** is a classic combinatorial problem in computer science and mathematics. The goal is to determine whether there exists a subset of a given set of integers whose sum equals a specified target value.

This implementation uses **backtracking** to explore all possible subsets of the input set and visualizes the steps using the `algorithm-visualizer` library.

---

## **Features**

- Visual representation of the **subset inclusion/exclusion** decisions.
- Logs that detail the recursive exploration, backtracking steps, and valid subsets.
- Modular and reusable code for other backtracking problems.
- Dynamic updates to match the target sum for any input configuration.

---

## **Use Cases**

- **Decision Problems**: Check if a subset exists for a given target sum.
- **Optimization**: Solve real-world problems involving resource allocation or partitioning.
- **Education**: Visualize and understand backtracking algorithms.
- **Subset Problems**: Extend to find all subsets or variations (e.g., knapsack problem).

---

## **Algorithm**

The algorithm uses **backtracking** to solve the problem recursively:

1. **Base Cases**:
   - If the `currentSum` equals the `target`, a solution is found.
   - If `currentIndex` exceeds the array bounds or `currentSum > target`, backtrack.

2. **Recursive Steps**:
   - Include the current element: Add it to the `currentSum` and mark it in the subset.
   - Exclude the current element: Skip it and move to the next index.

3. **Backtracking**:
   - Undo the changes to explore alternate paths.

### **Algorithm Steps**

1. Start with an empty subset and `currentSum = 0`.
2. Recursively:
   - Include the current element in the subset and check if the `target` can be achieved.
   - Exclude the current element and move to the next one.
3. If a valid subset is found, log and display it; otherwise, backtrack.
4. Continue until all possibilities are explored.


## **Example**

### **Input**

```javascript
const set = [3, 1, 2, 5];
const target = 5;
```

### **Output (Logs)**

```
Target Sum: 5
Starting the Sum of Subset Problem...
Exploring index: 0, current sum: 0, subset: [0, 0, 0, 0]
Include element 3 at index 0
Exploring index: 1, current sum: 3, subset: [1, 0, 0, 0]
Include element 1 at index 1
Exploring index: 2, current sum: 4, subset: [1, 1, 0, 0]
Include element 2 at index 2
Backtracking from index: 3, sum: 6
Exclude element 2 at index 2
Exploring index: 3, current sum: 4, subset: [1, 1, 0, 0]
Backtracking from index: 4, sum: 4
Exclude element 1 at index 1
Include element 2 at index 2
Exploring index: 3, current sum: 5, subset: [1, 0, 1, 0]
Found a valid subset: [3, 2]
Solver finished.
```

### **Visualization**

- **Set**: The full input set is displayed.
- **Subset Solution**: Highlights the subset being considered at each step.
- **Logs**: Detailed explanations of inclusion, exclusion, backtracking, and solutions.

---

## **Customization**

1. **Change the Input Set**:
   Modify the `set` array to test with different numbers.
   ```javascript
   const set = [4, 6, 8, 3];
   const target = 10;
   ```

2. **Target Sum**:
   Update the `target` value to find subsets for a new target.

---

## **Limitations**

- Does not find **all possible subsets**; stops at the first valid subset.
- Limited to smaller input sizes due to the exponential growth of subsets.

---

