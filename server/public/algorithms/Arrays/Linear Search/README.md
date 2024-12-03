# Linear Search

Linear search, also known as sequential search, is the simplest search algorithm. It checks every element in the array sequentially until the target element is found or the array ends. This algorithm does not require the input array to be sorted, making it a versatile choice for small or unsorted datasets.

In a linear search:
- The algorithm starts at the first element.
- It compares each element to the target element.
- If the element matches, the search is successful, and the index is returned.
- If no match is found, the algorithm returns a failure result (e.g., `-1`).

![Linear Search Visualization](https://upload.wikimedia.org/wikipedia/commons/b/bf/Linear_search_time_complexity.png)

## Complexity

**Time Complexity**:  
- **Best case**: `O(1)` (target found at the first position)  
- **Worst case**: `O(n)` (target is the last element or not in the array)

**Space Complexity**:  
- `O(1)` (no additional space is required apart from input)

## Use Cases
- Searching in unsorted data.
- Small datasets where simplicity is preferred over performance.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linear_search)
- [GeeksforGeeks](https://www.geeksforgeeks.org/linear-search/)
- [YouTube](https://www.youtube.com/watch?v=SGU9duLEhLQ)