

# Sliding Window Maximum Sum Algorithm Visualization

This project visualizes the **Sliding Window Maximum Sum** algorithm using the **Algorithm Visualizer** library. The algorithm computes the maximum sum of any 3 consecutive elements in an array, showcasing its operation through animations and detailed logs.


## Overview

This project implements and visualizes a sliding window algorithm. The visualization demonstrates how the algorithm maintains a running sum of 3 consecutive elements and updates the maximum value dynamically. 

It is an educational tool designed for understanding the **sliding window technique**, often used in problems involving contiguous subarrays.

---

## Algorithm Explanation

### Steps:
1. **Initialization:**
   - Calculate the sum of the first 3 elements of the array.
   - Initialize `max` to this initial sum.

2. **Sliding Window Iteration:**
   - Starting from the 4th element, update the sum by adding the current element and removing the element that is no longer in the window.
   - Compare the new sum with `max` and update `max` if the new sum is larger.

3. **Final Output:**
   - After completing the iteration, the algorithm outputs the maximum sum of any 3 consecutive elements.

### Complexity:
- **Time Complexity:** \(O(n)\), as the array is traversed once.
- **Space Complexity:** \(O(1)\), as no extra data structures are used.

---

## Use Case

The sliding window technique is widely used in:
- Signal processing: Analyzing moving averages.
- Financial data: Calculating the highest rolling sum in stock price trends.
- Gaming: Computing real-time stats over a fixed period.
- Data streams: Monitoring trends with fixed-size subsets of data.

---



## Example Execution

### Input:
A randomly generated array of 20 integers between -5 and 5:  
`[1, -2, 3, 4, -1, 2, -5, 3, 0, 4, -3, 1, 2, -4, 5, -2, 3, -1, 0, 2]`

### Logs:
```
Initial array: [1, -2, 3, 4, -1, 2, -5, 3, 0, 4, -3, 1, 2, -4, 5, -2, 3, -1, 0, 2]
Step 1: Calculate the sum of the first 3 elements (D[0] + D[1] + D[2]).
Initial sum = 2
Initialize max to the initial sum: max = 2
Step 2: Slide the window by adding D[3] and removing D[0] from the sum.
Updated sum = 5 (sum = previous sum + D[3] - D[0])
New max found: max = 5
...
Final maximum sum of any 3 consecutive elements = 6
```

### Output:
The maximum sum of any 3 consecutive elements in the array is **6**.

---


